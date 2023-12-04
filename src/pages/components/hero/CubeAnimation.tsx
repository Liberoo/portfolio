import React, { useState, useEffect } from "react";

const CubeAnimation = () => {
  const texts = [
    "twoją stronę internetową",
    "twoją automatyzację",
    "twój sklep internetowy",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 1000);
    }
  }, [isVisible]);

  return (
    <div className="cube-animation">
      stworzę:
      <div className="relative inline w-full ml-2">
        {texts.map((text, index) => (
          <span
            key={index}
            className={`fade absolute top-0 left-0  ${
              textIndex === index ? "fade-in" : ""
            } whitespace-nowrap inline-block`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CubeAnimation;
