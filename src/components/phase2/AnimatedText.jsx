import React, { useState, useEffect } from "react";

const AnimatedText = () => {
    const texts = ["This is the Text", "React + Tailwind", "hello bhai jaan"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [removing, setRemoving] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timer;
        if (!removing && charIndex < texts[currentTextIndex].length) {
            // Adding characters
            timer = setTimeout(() => {
                setDisplayText((prev) => prev + texts[currentTextIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
        } else if (removing && charIndex > 0) {
            // Removing characters
            timer = setTimeout(() => {
                setDisplayText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, 100);
        } else if (charIndex === texts[currentTextIndex].length && !removing) {
            // Pause before removing
            timer = setTimeout(() => setRemoving(true), 1000);
        } else if (removing && charIndex === 0) {
            // Switch to next text
            setRemoving(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timer);
    }, [charIndex, removing, currentTextIndex, texts]);

    // Split the current text into words
    const words = displayText.split(" ");

    return (
        <div className="flex items-center border justify-cente">
            <h1 className="text-4xl font-bold text-white">
                {words.map((word, index) => (
                    <span
                        key={index}
                        className={`mr-2 ${index % 2 === 0
                                ? "text-red-500"
                                : "text-blue-500"
                            }`}
                    >
                        {word}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default AnimatedText;
