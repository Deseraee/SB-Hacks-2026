import { Link} from "react-router-dom";
import ourMissionImg from "./assets/ourmission.png";
import ourValuesImg from "./assets/ourvalues.png";
import logoImg from "./assets/logo.png"

const THEME = {
  bg: "#fff2de",
  text: "#3b2f2a",
  heading: "#7a4e3a",
  cardBg: "rgba(255, 255, 255, 0.9)",
  cardBorder: "rgba(0, 0, 0, 0.08)",
  cardShadow: "0 10px 24px rgba(0,0,0,0.06)",
  hoverShadow: "0 18px 46px rgba(0,0,0,0.12)",
};

export default function About() {
  const values = [
    {
      title: "Empathy",
      desc: "We listen with care and respond with support that validates women's experiences.",
    },
    {
      title: "Respect",
      desc: "We honor boundaries, choices, and privacy.",
    },
    {
      title: "Accountability",
      desc: "We build responsibly, reduce harm, and continually improve the accuracy of guidance.",
    },
    {
      title: "Trust",
      desc: "We provide reliable information and transparent support so users feel safe and confident.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#FCF6BD",
        color: THEME.text,
        minHeight: "100vh",
        width: "100%",
        fontFamily: 'Mali, cursive, sans-serif',
      }}
    >
      {/* Back Button Container */}
      <div style={{
        background: "linear-gradient(to right, #fdf2f8, #fce7f3)", 
        padding: "1rem 2rem",
      }}>
        <Link 
          to="/"
          style={{
            color: "#7a4e3a",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: 'Mali, cursive, sans-serif'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#9c6851";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#7a4e3a";
          }}
        >
          ← Back to Home
        </Link>
      </div>
      
      <div style={styles.page}>
        <section style={styles.section}>
          <img
            src={logoImg}
            alt="EmpoweringHer community illustration"
            style={styles.logoImg}
          />

          <h1 style={{ ...styles.title, color: THEME.heading, fontFamily: 'Mali, cursive, sans-serif' }}>
            Who We Are
          </h1>

          <div style={styles.textBlock}>
            <p style={{ ...styles.text, fontFamily: 'Mali, cursive, sans-serif' }}>
              Empowering Her was created to support women's rights and help them
              feel confident standing up for themselves, especially in vulnerable
              situations. The project combines an AI assistant with emergency
              support to offer guidance, reassurance, and help when it matters
              most.
            </p>

            <p style={{ ...styles.text, fontFamily: 'Mali, cursive, sans-serif' }}>
              We believe that access to reliable information, emotional and
              thoughtful guidance plays a key role in helping women navigate those
              situations.
            </p>

            <p style={{ ...styles.text, fontFamily: 'Mali, cursive, sans-serif' }}>
              Our AI-driven assistant Athena is designed to be welcoming, direct,
              and supportive, helping women understand their rights, options, and
              how to better position themselves.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <img
            src={ourMissionImg}
            alt="Empowerment heart with sun rays"
            style={styles.missionImage}
          />

          <h2 style={{ ...styles.subtitle, color: THEME.heading, fontFamily: 'Mali, cursive, sans-serif' }}>
            Our Mission
          </h2>

          <div style={styles.missionContent}>
            <p style={{ ...styles.text, fontFamily: 'Mali, cursive, sans-serif' }}>
              To empower women through accessible technology, reliable resources,
              and provide a safe conversational space.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <img
            src={ourValuesImg}
            alt="Hands holding a flower"
            style={styles.valuesImage}
          />

          <h2 style={{ ...styles.subtitle, color: THEME.heading, fontFamily: 'Mali, cursive, sans-serif' }}>
            Our Values
          </h2>

          <div style={styles.valuesGrid}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  ...styles.valueCard,
                  background: THEME.cardBg,
                  border: `1px solid ${THEME.cardBorder}`,
                  boxShadow: THEME.cardShadow,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = THEME.hoverShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = THEME.cardShadow;
                }}
              >
                <h3 style={{ ...styles.valueTitle, color: THEME.heading, fontFamily: 'Mali, cursive, sans-serif' }}>
                  {v.title}
                </h3>
                <p style={{ ...styles.valueText, color: THEME.text, fontFamily: 'Mali, cursive, sans-serif' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 3rem",
    fontFamily: "Mali, cursive, sans-serif",
  },
  section: {
    marginBottom: "5rem",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "2.5rem",
    textAlign: "center",
    fontFamily: "Mali, cursive, sans-serif",
    letterSpacing: "0.02em",
  },
  subtitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
    fontFamily: "Mali, cursive, sans-serif",
    letterSpacing: "0.02em",
  },
  textBlock: {
    maxWidth: "100%",
    margin: "0 auto",
  },
  text: {
    fontSize: "1.35rem",
    lineHeight: "2",
    marginBottom: "2rem",
    textAlign: "justify",
    textJustify: "inter-word",
    fontFamily: "Mali, cursive, sans-serif",
  },
  missionContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "100%",
    margin: "0 auto",
  },
  missionImage: {
    width: "300px",
    height: "auto",
    margin: "0 auto 2rem",
    display: "block",
  },
  valuesImage: {
    width: "300px",
    height: "auto",
    margin: "0 auto 2rem",
    display: "block",
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    marginTop: "2.5rem",
  },
  valueCard: {
    backgroundColor: "#fff2de",   
    borderRadius: "20px",
    padding: "2rem",
    transition: "transform 180ms ease, box-shadow 180ms ease",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
  },
  valueTitle: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "left",
    fontFamily: "Mali, cursive, sans-serif",
  },
  valueText: {
    margin: 0,
    fontSize: "1.1rem",
    lineHeight: "1.7",
    opacity: 0.92,
    fontFamily: "Mali, cursive, sans-serif",
  },
  logoImg: {
    width: "500px",
    height: "auto",
    margin: "0 auto 2rem",
    display: "block",
  },
};