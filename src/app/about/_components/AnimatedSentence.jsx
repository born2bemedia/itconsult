"use client";

const AnimatedSentence = ({ text }) => {
  return (
    <p className="sentence">
      {text.split("").map((char, index) => (
        <span key={index} className="letter" style={{ "--char-index": index }}>
          {char}
        </span>
      ))}
    </p>
  );
};

export default AnimatedSentence;
