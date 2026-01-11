import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mood definitions
const moods = [
  { 
    name: "Sad", 
    color: "#DBEAFE", // Blue
    joke: "Feeling down? Here's a laugh:\nWhy do programmers mix up Halloween and Christmas?\nAns: Because Oct 31 == Dec 25!" 
  },
  { 
    name: "Neutral", 
    color: "#EDE9FE", // Purple
    joke: "Just okay? Here's a little one:\nWhy did the programmer quit their job?\nAns: They didn’t get arrays." 
  },
  { 
    name: "Happy", 
    color: "#D1FAE5", // Green
    joke: "Feeling great? Here's a smile:\nHow many programmers does it take to change a light bulb?\nAns: None, that's a hardware problem!" 
  },
];

const defaultMood = { name: "", color: "#F3F4F6", joke: "" };

// SmileyFace component
const SmileyFace = ({ currentMood, showMouth }: { currentMood: number | null, showMouth: boolean }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (currentMood !== null) setPosition(currentMood);
  }, [currentMood]);

  const getFaceColor = () => currentMood !== null ? moods[currentMood].color : defaultMood.color;

  const getMouthPath = () => {
    if (currentMood === 0) return "M 40,100 Q 80,70 120,100"; // Sad -> happy mouth
    if (currentMood === 1) return "M 40,100 Q 80,100 120,100"; // Neutral
    if (currentMood === 2) return "M 40,100 Q 80,120 120,100"; // Happy -> sad mouth
    return "M 40,100 Q 80,100 120,100";
  };

  const getLeftEyePosition = () => currentMood === 2 ? { cx: 55, cy: 55 } : { cx: 55, cy: 60 };
  const getRightEyePosition = () => currentMood === 2 ? { cx: 105, cy: 55 } : { cx: 105, cy: 60 };

  const leftEye = getLeftEyePosition();
  const rightEye = getRightEyePosition();

  return (
    <div className="w-52 h-52 relative mb-6">
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
      </svg>

      {/* Position dots */}
      <div className="flex justify-center mt-2 gap-3">
        {[0, 1, 2].map((index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${position === index ? "bg-black" : "bg-gray-300"}`} />
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
    <div
  className="min-h-screen flex flex-col justify-center items-center p-8 transition-colors duration-500"
  style={{ backgroundColor: "#FCF6BD" }}
>

      <h1 className="text-5xl font-bold text-center mb-8 text-gray-900" style={{ fontFamily: "Mali" }}>
        How are you feeling today?
      </h1>

      {/* White card box */}
      <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center w-full max-w-2xl">
        {/* Smiley face */}
        <SmileyFace currentMood={currentMood} showMouth={currentMood !== null} />

        {/* Mood buttons */}
        <div className="flex justify-around w-full mb-6">
          {moods.map((mood, i) => (
            <motion.button
              key={i}
              onClick={() => handleMoodPress(i)}
              className={`w-14 h-14 rounded-full border-2 border-gray-300 transform transition-all duration-300 shadow-lg`}
              style={{ backgroundColor: mood.color }}
              whileTap={{ scale: 1.3 }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Joke section with mood background */}
        <AnimatePresence>
          {currentMood !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="p-6 rounded-xl shadow-inner w-full"
              style={{ backgroundColor: moodToShow.color }}
            >
              <p className="text-center text-gray-800 whitespace-pre-line leading-relaxed" style={{ fontFamily: "Mali" }}>
                {moodToShow.joke}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}