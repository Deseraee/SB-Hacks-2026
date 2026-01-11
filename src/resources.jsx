import React from "react";
import {Link} from 'react-router-dom';

export default function Resources() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        <h1 style={styles.title}>Resources</h1>
        {/* 3 columns */}
        <div style={styles.columns}>
          {/* Column 1 */}
          <div style={styles.col}>
            <div style={styles.block}>
              <h2 style={styles.colTitle}>🛡️ Know your rights</h2>
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
              <h2 style={styles.colTitle}>🔔 Reminder</h2>
              <p style={styles.p}>
                If something feels off, trust that feeling. Your safety matters more than being "polite."
              </p>
              <p style={styles.p}>
                Try saying simple scripts, such as: 
                <span style={styles.quote}> "No." "Stop." "I'm not comfortable with that."</span>
              </p>
              <p style={styles.p}>
                If you can, save details of moments, it can help later, but know that you don't need to have evidence to seek any type of support. 
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div style={styles.col}>
            <div style={styles.block}>
              <h2 style={styles.colTitle}>🤝 Not alone</h2>
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

        {/* Bottom contact box */}
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
                If you're outside the U.S., these trusted resources can help you find
                confidential support in your country:
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
    background: "linear-gradient(135deg, #fff9e6 0%, #ffe8d6 50%, #ffd9e8 100%)",
    fontFamily: "'Mali', cursive, sans-serif", // Changed to Mali
    padding: "3.2rem 1.5rem 4rem",
    position: "relative",
    overflow: "hidden",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    margin: "0 0 2.8rem",
    fontSize: "3.4rem",
    fontWeight: 800, // Bold
    color: "#d4456c",
    letterSpacing: "0.5px",
    textShadow: "2px 2px 0px rgba(255,255,255,0.5), 4px 4px 20px rgba(212,69,108,0.2)",
    fontFamily: "'Mali', cursive, sans-serif", // Added Mali font
  },
  columns: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "2.2rem",
    alignItems: "stretch",
    marginTop: "0.5rem",
  },
  col: {
    display: "flex",
    position: "relative",
    padding: "0 0.6rem",
  },
  colTitle: {
    textAlign: "center",
    fontSize: "1.3rem",
    fontWeight: 700, // Bold
    margin: "0 0 1.4rem",
    color: "#5a3a52",
    textShadow: "1px 1px 0px rgba(255,255,255,0.8)",
    fontFamily: "'Mali', cursive, sans-serif", // Added Mali font
  },
  block: {
    background: "rgba(255, 255, 255, 0.75)", 
    border: "2px solid rgba(212, 69, 108, 0.15)",
    borderRadius: "28px",
    padding: "1.8rem 1.6rem 1.4rem",
    boxShadow: "0 8px 32px rgba(212, 69, 108, 0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
  p: {
    margin: "0 0 1rem",
    color: "#4a3a45",
    lineHeight: 1.9,
    fontSize: "1rem",
    textAlign: "justify",
    fontFamily: "'Mali', cursive, sans-serif", // Added Mali font
    fontWeight: 400, // Regular weight for paragraphs
  },
  quote: {
    fontWeight: 700, // Bold for quotes
    marginLeft: "0.35rem",
    color: "#d4456c",
    background: "rgba(212, 69, 108, 0.08)",
    padding: "0.15rem 0.4rem",
    borderRadius: "6px",
    fontFamily: "'Mali', cursive, sans-serif", // Added Mali font
  },
  contactsBox: {
    marginTop: "3.3rem",
    background: "linear-gradient(135deg, #d4456c 0%, #b8365a 100%)",
    borderRadius: "32px",
    padding: "2.5rem 2.5rem 2rem",
    boxShadow: "0 16px 48px rgba(212, 69, 108, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
    border: "2px solid rgba(255,255,255,0.15)",
  },
  contactsTitle: {
    margin: "0 0 1.5rem",
    textAlign: "center",
    color: "#ffffff",
    fontSize: "1.3rem",
    fontWeight: 700, // Bold
    letterSpacing: "0.3px",
    textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
    fontFamily: "'Mali', cursive, sans-serif", // Added Mali font
  },
  contactsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "1.1rem 1.6rem",
  },
  contactItem: {
    background: "rgba(255,255,255,0.15)",
    borderRadius: "20px",
    padding: "1.1rem 1.2rem",
    border: "1px solid rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
    transition: "transform 0.2s ease, background 0.2s ease",
  },
  contactLabel: {
    color: "#ffffff",
    fontWeight: 700, // Bold
    fontSize: "1rem",
    marginBottom: "0.3rem",
    textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
    fontFamily: "'Mali', cursive, sans-serif", // Added Mali font
  },
  contactText: {
    color: "rgba(255,255,255,0.95)",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    fontFamily: "'Mali', cursive, sans-serif", // Added Mali font
    fontWeight: 400, // Regular weight
  },
  muted: {
    opacity: 0.85,
    fontWeight: 500,
    fontFamily: "'Mali', cursive, sans-serif", // Added Mali font
  },
  link: {
    color: "#ffffff",          
    textDecoration: "underline",
    fontWeight: 600,
    textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
    fontFamily: "'Mali', cursive, sans-serif", // Added Mali font
  },
  linkList: {
    marginTop: "0.5rem",
  },
};