import React, { useEffect } from "react";

const SparkEffect = () => {
  const spark = (event) => {
    const square = document.createElement("div");
    square.className = "square";
    square.style.left = `${event.pageX}px`;
    square.style.top = `${event.pageY}px`;
    square.style.transform = `scale(${Math.random() * 2 + 1})`;

    square.style.setProperty("--x", getRandomTransitionValue());
    square.style.setProperty("--y", getRandomTransitionValue());

    document.body.appendChild(square);

    setTimeout(() => {
      document.body.removeChild(square);
    }, 2000);
  };

  const getRandomTransitionValue = () => {
    return `${Math.random() * 400 - 200}px`;
  };

  useEffect(() => {
    const handleMousemove = (event) => {
      if (window.innerWidth > 768) {
        // Enable effect only for devices with width greater than 768px
        spark(event);
      }
    };

    document.addEventListener("mousemove", handleMousemove);
    return () => {
      document.removeEventListener("mousemove", handleMousemove);
    };
  }, []);

  return null;
};

export default SparkEffect;
