import React, { useEffect, useState } from "react";

const ScrollingText = () => {
  const words = ["Education", "Marketing Solutions", "Video Platform"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Rotate words every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];

  return (
    <div
      style={{
        background: "#043B64",
        overflow: "hidden",
        width: "100%",
        whiteSpace: "nowrap",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "inline-block",
          color: "white",
          fontSize: "18px",
          fontWeight: "500",
          padding: "12px 0",
          animation: "scrollText 15s linear infinite",
        }}
      >
        {/* Repeat enough times for seamless effect */}
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} style={{ paddingRight: "60px" }}>
            {currentWord} •
          </span>
        ))}
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;
