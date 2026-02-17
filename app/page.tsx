"use client";

import { useState } from "react";
import { quizBank } from "./data/quizBank";

type Card = {
  question: string;
  answer: string;
};

type Difficulty = "Easy" | "Medium" | "Hard";
type Topic = keyof typeof quizBank;

export default function Home() {
  const [topic, setTopic] = useState<Topic>("World Capitals");
  const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
  const [cards, setCards] = useState<Card[]>([]);
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [screen, setScreen] = useState<"setup" | "play">("setup");

  const generateQuiz = () => {
    const pool = quizBank[topic][difficulty];
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setCards(shuffled.slice(0, 5));
    setCurrent(0);
    setShowAnswer(false);
    setScreen("play");
  };

  return (
    <main className="min-h-screen w-screen bg-gradient-to-b from-sky-100 to-white flex flex-col items-center justify-center p-4">

      {screen === "setup" && (
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 space-y-6 text-center">
          <h1 className="text-4xl font-bold">🧠 Flashly</h1>
          <p className="text-gray-500">Learn something new in 5 cards</p>

          <select
            className="w-full p-4 rounded-xl border text-lg"
            value={topic}
            onChange={(e) => setTopic(e.target.value as Topic)}
          >
            {Object.keys(quizBank).map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>

          <div className="flex gap-3">
            {(["Easy", "Medium", "Hard"] as Difficulty[]).map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`flex-1 py-3 rounded-xl font-semibold transition ${
                  difficulty === d
                    ? "bg-black text-white"
                    : "bg-gray-100"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <button
            onClick={generateQuiz}
            className="w-full bg-black text-white py-4 rounded-2xl text-xl font-bold hover:scale-105 transition"
          >
            Start Learning 🚀
          </button>
        </div>
      )}

      {screen === "play" && cards.length > 0 && (
        <div className="w-full max-w-md flex flex-col items-center space-y-4">

          <div className="flex justify-between w-full">
            <button onClick={() => setScreen("setup")} className="text-gray-500">
              ← Back
            </button>
            <span>{current + 1}/{cards.length}</span>
          </div>

          {/* CARD */}
          <div
            key={current}
            className="relative w-full h-64 cursor-pointer perspective"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <div
              className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d ${
                showAnswer ? "rotate-y-180" : ""
              }`}
            >
              {/* FRONT */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl shadow-xl flex items-center justify-center p-6 backface-hidden text-2xl font-bold text-center">
                {cards[current].question}
              </div>

              {/* BACK */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl shadow-xl flex items-center justify-center p-6 backface-hidden rotate-y-180 text-2xl font-bold text-center">
                {cards[current].answer}
              </div>
            </div>
          </div>

          <p className="text-gray-500">Tap card to flip</p>

          <button
            onClick={() => {
              if (current === cards.length - 1) {
                setScreen("setup");
              } else {
                setShowAnswer(false);
                setCurrent((prev) => prev + 1);
              }
            }}
            className="w-full bg-black text-white py-4 rounded-2xl text-xl font-bold hover:scale-105 transition"
          >
            {current === cards.length - 1 ? "Finish 🎉" : "Next ➡"}
          </button>
        </div>
      )}

    </main>
  );
}
