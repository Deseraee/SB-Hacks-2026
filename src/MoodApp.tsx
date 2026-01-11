import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colors = {
  white: "#FFFFFF",
  gray: "#E0E0E0", 
  black: "#000000",
  textPrimary: "#333333",
};

const moods = [
  { 
    name: "Sad", 
    color: "#80D8FF", 
    joke: "Sorry about that! Let's fix it with a laugh.\nWhy do programmers mix up Halloween and Christmas?\n Ans: Because Oct 31 == Dec 25!" 
  },
  { 
    name: "Neutral", 
    color: "#FFD180", 
    joke: "A simple one for you:\nWhy do Java developers wear glasses?\n Ans: Because they don't C#." 
  },
  { 
    name: "Happy", 
    color: "#228B22", 
    joke: "A little joy to add to your day:\nHow many programmers does it take to change a light bulb?\n Ans: None, that's a hardware problem!" 
  },
];

const defaultMood = { name: "", color: "#D2B48C", joke: "" };

// SmileyFace component
const SmileyFace = ({ currentMood, showMouth }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (currentMood !== null) setPosition(currentMood);
  }, [currentMood]);

  const getFaceColor = () => currentMood !== null ? moods[currentMood].color : defaultMood.color;

  const getMouthPath = () => {
    if (currentMood === 0) return "M 40,100 Q 80,80 120,100"; // Sad (blue) -> happy mouth
    if (currentMood === 1) return "M 40,100 Q 80,100 120,100"; // Neutral
    if (currentMood === 2) return "M 40,100 Q 80,120 120,100"; // Happy (red) -> sad mouth
    return "M 40,100 Q 80,100 120,100"; // Default
  };

  const getLeftEyePosition = () => {
    if (currentMood === 2) return { cx: 55, cy: 55 }; // Happy higher
    return { cx: 55, cy: 60 }; // Neutral / Sad
  };

  const getRightEyePosition = () => {
    if (currentMood === 2) return { cx: 105, cy: 55 }; // Happy higher
    return { cx: 105, cy: 60 };
  };

  const leftEye = getLeftEyePosition();
  const rightEye = getRightEyePosition();

  return (
    <div style={{ margin: "20px 0", position: "relative", width: "200px", height: "200px" }}>
      <svg width="200" height="200" viewBox="0 0 160 160">
        <motion.circle 
          cx="80" cy="80" r="75" fill={getFaceColor()} stroke="#000" strokeWidth="2"
          animate={{ fill: getFaceColor() }} transition={{ duration: 0.5 }}
        />
        <motion.circle cx={leftEye.cx} cy={leftEye.cy} r="8" fill="#000" animate={{ cy: leftEye.cy }} transition={{ duration: 0.3 }} />
        <motion.circle cx={rightEye.cx} cy={rightEye.cy} r="8" fill="#000" animate={{ cy: rightEye.cy }} transition={{ duration: 0.3 }} />
        {showMouth && (
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, d: getMouthPath() }}
            transition={{ duration: 0.5 }}
            fill="transparent"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )}
        {/* Eyebrows */}
        {showMouth && currentMood === 0 && (
          <>
            <path d="M 40,45 Q 55,40 70,45" fill="transparent" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <path d="M 90,45 Q 105,40 120,45" fill="transparent" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          </>
        )}
        {showMouth && currentMood === 2 && (
          <>
            <path d="M 40,45 Q 55,50 70,45" fill="transparent" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <path d="M 90,45 Q 105,50 120,45" fill="transparent" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          </>
        )}
      </svg>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", gap: "15px" }}>
        {[0, 1, 2].map((index) => (
          <div key={index} style={{
            width: "12px", height: "12px", borderRadius: "50%",
            backgroundColor: position === index ? "#000" : "#ccc",
            transition: "background-color 0.3s ease"
          }}/>
        ))}
      </div>
    </div>
  );
};

export default function MoodAppWeb() {
  const [currentMood, setCurrentMood] = useState<number | null>(null);
  const [dotScales, setDotScales] = useState([1, 1, 1]);

  const handleMoodPress = (index: number) => {
    setCurrentMood(index);
    const newScales = [1, 1, 1];
    newScales[index] = 1.4;
    setDotScales(newScales);
    setTimeout(() => { newScales[index] = 1; setDotScales([...newScales]); }, 300);
  };

  const moodToShow = currentMood !== null ? moods[currentMood] : defaultMood;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px", backgroundColor: moodToShow.color, transition: "background-color 0.5s ease", fontFamily: "'Mali', cursive" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", color: colors.black, textAlign: "center" }}>
        How are you feeling today?
      </h1>

      <SmileyFace currentMood={currentMood} showMouth={currentMood !== null} />

      {/* White card container */}
      <div style={{
        marginTop: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        padding: "30px",
        width: "90%",
        maxWidth: "600px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        {/* Mood buttons */}
        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginBottom: "30px" }}>
          {moods.map((mood, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <button onClick={() => handleMoodPress(i)}
                style={{
                  transform: `scale(${dotScales[i]})`,
                  backgroundColor: currentMood === i ? colors.white : colors.gray,
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "inherit", border: "2px solid #000" }} />
              </button>
              <span style={{ marginTop: "8px", fontWeight: "bold", color: colors.black, fontSize: "1rem" }}>
                {mood.name}
              </span>
            </div>
          ))}
        </div>

        {/* Joke section */}
        <AnimatePresence>
          {currentMood !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundColor: "#fff8e1",
                borderRadius: "12px",
                padding: "20px",
                width: "100%",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <p style={{ fontSize: "1.2rem", color: colors.textPrimary, textAlign: "center", whiteSpace: "pre-line", lineHeight: "1.5" }}>
                {moodToShow.joke}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}