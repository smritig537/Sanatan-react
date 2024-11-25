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
    document.addEventListener("mousemove", spark);
    return () => {
      document.removeEventListener("mousemove", spark);
    };
  }, []);

  return null;
};

export default SparkEffect;
