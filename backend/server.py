from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from datetime import datetime

app = Flask(__name__)
CORS(app) 
DB = "empowering_her.db"


def init_db():
    with sqlite3.connect(DB) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                question TEXT NOT NULL,
                answer TEXT,
                created_at TEXT
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS alerts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                latitude REAL,
                longitude REAL,
                is_mock INTEGER,
                created_at TEXT
            )
        """)


def now():
    return datetime.now().strftime("%Y-%m-%d %I:%M %p")


@app.route("/api/ask", methods=["POST"])
def ask():
    data = request.get_json(silent=True) or {}
    question = (data.get("question") or "").strip()

    if not question:
        return jsonify({"error": "Question cannot be empty."}), 400

    # Placeholder answer. Swap in a real AI call here later.
    answer = f'You asked: "{question}". Athena is here to support you.'

    with sqlite3.connect(DB) as conn:
        conn.execute(
            "INSERT INTO questions (question, answer, created_at) VALUES (?, ?, ?)",
            (question, answer, now()),
        )

    return jsonify({"question": question, "answer": answer})


@app.route("/api/questions", methods=["GET"])
def recent_questions():
    with sqlite3.connect(DB) as conn:
        rows = conn.execute(
            "SELECT question, answer, created_at FROM questions ORDER BY id DESC LIMIT 10"
        ).fetchall()
    return jsonify([{"question": q, "answer": a, "time": t} for q, a, t in rows])


@app.route("/api/alert", methods=["POST"])
def alert():
    data = request.get_json(silent=True) or {}
    lat, lon = data.get("latitude"), data.get("longitude")

    if lat is None or lon is None:
        return jsonify({"error": "Location required."}), 400

    with sqlite3.connect(DB) as conn:
        conn.execute(
            "INSERT INTO alerts (latitude, longitude, is_mock, created_at) VALUES (?, ?, ?, ?)",
            (lat, lon, int(bool(data.get("isMock"))), now()),
        )

    # Next step: send an SMS/email to a trusted contact here (e.g., Twilio).
    return jsonify({"status": "alert received"})
@app.route("/")
def home():
    return jsonify({"message": "Empowering Her API is running"})

if __name__ == "__main__":
    init_db()
    app.run(port=5000, debug=True)
