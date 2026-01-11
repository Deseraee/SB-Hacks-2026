import React, { useState, useRef, useEffect } from "react";
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

// SmileyFace component with sliding animation like the original
const SmileyFace = ({ currentMood, showMouth }) => {
  const [position, setPosition] = useState(0);
  
  // Map mood to position (0, 1, 2)
  useEffect(() => {
    if (currentMood !== null) {
      setPosition(currentMood);
    }
  }, [currentMood]);

  // Calculate background color based on position
  const getFaceColor = () => {
    if (currentMood === null) return defaultMood.color;
    return moods[currentMood].color;
  };

 // Calculate mouth path based on position
const getMouthPath = () => {
    if (currentMood === 0) { // Sad (blue) - NOW HAPPY MOUTH
      return "M 40,100 Q 80,80 120,100"; // Changed from sad to happy
    } else if (currentMood === 1) { // Neutral
      return "M 40,100 Q 80,100 120,100";
    } else if (currentMood === 2) { // Happy (red) - NOW SAD MOUTH
      return "M 40,100 Q 80,120 120,100"; // Changed from happy to sad
    }
    return "M 40,100 Q 80,100 120,100"; // Default neutral
  };

  // Eye positions for different moods (subtle changes)
  const getLeftEyePosition = () => {
    if (currentMood === 0) return { cx: 55, cy: 60 }; // Sad - normal
    if (currentMood === 1) return { cx: 55, cy: 60 }; // Neutral - normal
    if (currentMood === 2) return { cx: 55, cy: 55 }; // Happy - slightly higher
    return { cx: 55, cy: 60 }; // Default
  };

  const getRightEyePosition = () => {
    if (currentMood === 0) return { cx: 105, cy: 60 }; // Sad - normal
    if (currentMood === 1) return { cx: 105, cy: 60 }; // Neutral - normal
    if (currentMood === 2) return { cx: 105, cy: 55 }; // Happy - slightly higher
    return { cx: 105, cy: 60 }; // Default
  };

  const leftEye = getLeftEyePosition();
  const rightEye = getRightEyePosition();

  return (
    <div style={{ margin: "20px 0", position: "relative", width: "200px", height: "200px" }}>
      <svg width="200" height="200" viewBox="0 0 160 160">
        {/* Face circle with animated background color */}
        <motion.circle 
          cx="80" 
          cy="80" 
          r="75" 
          fill={getFaceColor()} 
          stroke="#000" 
          strokeWidth="2"
          animate={{ fill: getFaceColor() }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Left eye */}
        <motion.circle 
          cx={leftEye.cx} 
          cy={leftEye.cy} 
          r="8" 
          fill="#000" 
          animate={{ cy: leftEye.cy }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Right eye */}
        <motion.circle 
          cx={rightEye.cx} 
          cy={rightEye.cy} 
          r="8" 
          fill="#000" 
          animate={{ cy: rightEye.cy }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Mouth - animated with framer-motion */}
        {showMouth && (
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              d: getMouthPath()
            }}
            transition={{ duration: 0.5 }}
            fill="transparent"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )}
        
        {/* Optional: Add eyebrows for more expression */}
        {showMouth && currentMood === 0 && ( // Sad eyebrows
          <>
            <path d="M 40,45 Q 55,40 70,45" fill="transparent" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <path d="M 90,45 Q 105,40 120,45" fill="transparent" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          </>
        )}
        
        {showMouth && currentMood === 2 && ( // Happy eyebrows (curved up)
          <>
            <path d="M 40,45 Q 55,50 70,45" fill="transparent" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <path d="M 90,45 Q 105,50 120,45" fill="transparent" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          </>
        )}
      </svg>
      
      {/* Position indicator dots at the bottom (like in original) */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        marginTop: "10px",
        gap: "15px" 
      }}>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: position === index ? "#000" : "#ccc",
              transition: "background-color 0.3s ease"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function MoodAppWeb() {
  const [currentMood, setCurrentMood] = useState<number | null>(null);
  const [dotScales, setDotScales] = useState([1, 1, 1]);
  const [fadeIn, setFadeIn] = useState(false);

  const handleMoodPress = (index: number) => {
    setCurrentMood(index);
    setFadeIn(true);
    
    // Animate the selected dot
    const newScales = [1, 1, 1];
    newScales[index] = 1.4;
    setDotScales(newScales);
    
    setTimeout(() => {
      newScales[index] = 1;
      setDotScales([...newScales]);
    }, 300);
  };

  const moodToShow = currentMood !== null ? moods[currentMood] : defaultMood;

  return (
    <div 
      style={{ 
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: moodToShow.color,
        transition: "background-color 0.5s ease",
        fontFamily: "'Mali', cursive",
      }}
    >
      <h1 style={{ 
        fontSize: "2.5rem", 
        fontWeight: "bold", 
        marginBottom: "20px", 
        color: colors.black, 
        textAlign: "center" 
      }}>
        How are you feeling today?
      </h1>

      {/* Smiley Face with original-style animation */}
      <SmileyFace currentMood={currentMood} showMouth={currentMood !== null} />

      {/* Intro text */}
      {currentMood === null && (
        <p style={{ 
          marginTop: "20px", 
          fontSize: "1.2rem", 
          fontWeight: "600", 
          color: colors.black, 
          textAlign: "center", 
          padding: "0 30px" 
        }}>
          Tap a mood to reveal a mood booster 😉
        </p>
      )}

      {/* Mood Dots - matching original layout */}
      <div style={{ 
        display: "flex", 
        marginTop: "40px", 
        width: "280px", 
        justifyContent: "space-between" 
      }}>
        {moods.map((mood, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button 
              onClick={() => handleMoodPress(i)}
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
              }}
            >
              <div style={{ 
                width: "40px", 
                height: "40px", 
                borderRadius: "50%",
                backgroundColor: "inherit",
                border: "2px solid #000"
              }} />
            </button>
            <span style={{ 
              marginTop: "8px", 
              fontWeight: "bold", 
              color: colors.black, 
              fontSize: "1rem" 
            }}>
              {mood.name}
            </span>
          </div>
        ))}
      </div>

      {/* Fade-in Joke */}
      <AnimatePresence>
        {currentMood !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            style={{ 
              marginTop: "30px", 
              backgroundColor: "#fff8e1", 
              borderRadius: "12px", 
              padding: "20px", 
              width: "60%",
              maxWidth: "600px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <p style={{ 
              fontSize: "1.2rem", 
              color: colors.textPrimary, 
              textAlign: "center",
              whiteSpace: "pre-line",
              lineHeight: "1.5",
            }}>
              {moodToShow.joke}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}