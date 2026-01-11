import React from "react";
import {Link} from 'react-router-dom';

export default function Resources() {
  return (
    <div
      style={{
        backgroundColor: "#FCF6BD",
        minHeight: "100vh",
        width: "100%",
        fontFamily: 'Mali, cursive, sans-serif',
      }}
    >
      {/* Header with Back Button - Fixed width like WelcomePage */}
      <header className="bg-gradient-to-r from-orange-100 to-orange-200 shadow-md py-1.5 px-4">
        <nav className="px-4 py-4 flex items-center">
          <Link 
            to="/"
            className="text-gray-800 hover:text-pink-400 font-semibold text-2xl flex items-center gap-1.5"
            style={{ fontFamily: 'Mali' }}
          >
            ← Back to Home
          </Link>
        </nav>
      </header>
      <div style={styles.container}>
        <h1 style={styles.title}>Resources</h1>

        <div style={styles.columns}>
          {/* Column 1 */}
          <div style={styles.col}>
            <div style={styles.block}>
              <h2 style={styles.colTitle}> Know your rights</h2>
              <p style={styles.p}>
                You have the right to set boundaries and be treated with respect by everyone. 
              </p>
              <p style={styles.p}>
                Harassment or discrimination in any situation you encounter is not acceptable and it should not be normalized. Remember that 
                you can always ask for help even when you are in doubt. 
              </p>
              <p style={styles.p}>
                Whether it's writing a message, organizing your thoughts, processing difficult moments, or planning what to say, Athena is here to help and make sure your needs are being met.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div style={styles.col}>
            <div style={styles.block}>
              <h2 style={styles.colTitle}> Reminder</h2>
              <p style={styles.p}>
                If something feels off, trust that feeling. Your safety matters more than being "polite."
              </p>
              <p style={styles.p}>
                Try saying simple scripts, such as: 
                <span style={styles.quote}>"No." "Stop." "I'm not comfortable with that."</span>
              </p>
              <p style={styles.p}>
                If you can, save details of moments, it can help later, but know that you don't need to have evidence to seek any type of support. 
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div style={styles.col}>
            <div style={styles.block}>
              <h2 style={styles.colTitle}> Not alone</h2>
              <p style={styles.p}>
                You don't have to handle everything by yourself. Seeking support can mean calling a hotline, asking a friend to walk you home, having someone help you report an incident, or simply talking things through.
              </p>
              <p style={styles.p}>
                If you're outside the U.S., use international directories to find local help fast.
              </p>
              <p style={styles.p}>
                If you're a UCSB student, the Women's Center is a supportive space that offers confidential guidance, advocacy, and educational programs focused on gender equity, well-being and empowerment. 
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contacts */}
        <div style={styles.contactsBox}>
          <h3 style={styles.contactsTitle}>Quick contacts</h3>

          <div style={styles.contactsGrid}>
            <div style={styles.contactItem}>
              <div style={styles.contactLabel}>Emergency</div>
              <div style={styles.contactText}>Call 911 if you are in danger now.</div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactLabel}>Santa Barbara County</div>
              <div style={styles.contactText}>
                Call 211 (local services + support). <span style={styles.muted}>Alt:</span> (800) 400-1572
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactLabel}>Sexual assault support (U.S.)</div>
              <div style={styles.contactText}>RAINN: 800-656-4673</div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactLabel}>Domestic violence support (U.S.)</div>
              <div style={styles.contactText}>1-800-799-7233</div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactLabel}>Global support</div>
              <div style={styles.contactText}>
                If you're outside the U.S., these trusted resources can help you find confidential support:
              </div>
              <div style={styles.linkList}>
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  Find a Helpline
                </a>
              </div>
            </div>
            
            <div style={styles.contactItem}>
              <div style={styles.contactLabel}>UCSB resources</div>
              <div style={styles.contactText}>
                UCSB Women's Center{" "}
                <a
                  href="https://womenscenter.sa.ucsb.edu/resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  View resources
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    background: "#FCF6BD",
    fontFamily: "'Mali', cursive, sans-serif",
    padding: "3.2rem 1.5rem 4rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "2.8rem",
    fontSize: "3.4rem",
    fontWeight: 900,
    color: "#F8AB63",
    textShadow: "2px 2px 15px rgba(0,0,0,0.15)",
    marginTop: "4rem",
  },
  columns: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2.2rem",
  },
  col: {
    display: "flex",
    padding: "0 0.6rem",
  },
  block: {
    background: "rgba(255,255,255,0.85)",
    borderRadius: "28px",
    padding: "1.8rem 1.6rem",
    backdropFilter: "blur(10px)",
    flex: 1,
  },
  colTitle: {
    textAlign: "center",
    fontSize: "1.3rem",
    fontWeight: 800,
    marginBottom: "1.4rem",
    color: "#d97706",
  },
  p: {
    marginBottom: "1rem",
    color: "#4a3a25",
    lineHeight: 1.9,
    fontSize: "1rem",
  },
  quote: {
    fontWeight: 800,
    marginLeft: "0.3rem",
    color: "#f59e0b",
    background: "rgba(255,159,28,0.15)",
    padding: "0.2rem 0.45rem",
    borderRadius: "6px",
  },

  // ---------- CONTACTS ----------
  contactsBox: {
    marginTop: "3.3rem",
    background: "linear-gradient(135deg, #F59C63, #F59C63)",
    borderRadius: "32px",
    padding: "2.5rem",
    boxShadow: "0 16px 48px rgba(249,115,22,0.35)",
    border: "2px solid rgba(255,255,255,0.35)",
  },
  contactsTitle: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: "1.5rem",
    fontWeight: 900,
    marginBottom: "1.5rem",
  },
  contactsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1.4rem",
  },
  contactItem: {
    background: "rgba(255,255,255,0.25)",
    borderRadius: "20px",
    padding: "1.2rem",
    border: "1px solid rgba(255,255,255,0.4)",
  },
  contactLabel: {
    color: "#ffffff",
    fontWeight: 900,
    fontSize: "1rem",
    marginBottom: "0.3rem",
  },
  contactText: {
    color: "#ffffff",
    fontSize: "0.98rem",
    lineHeight: 1.6,
    fontWeight: 500,
  },
  muted: {
    opacity: 0.95,
    color: "#ffffff",
  },
  link: {
    color: "#ffffff",
    fontWeight: 900,
    textDecoration: "underline",
  },
  linkList: {
    marginTop: "0.4rem",
  },
};