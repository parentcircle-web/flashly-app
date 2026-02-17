export const quizBank: Record<string, Record<string, { question: string; answer: string }[]>> = {
  "World Capitals": {
    Easy: [
      { question: "Capital of France?", answer: "Paris" },
      { question: "Capital of India?", answer: "New Delhi" },
      { question: "Capital of Japan?", answer: "Tokyo" },
      { question: "Capital of Italy?", answer: "Rome" },
      { question: "Capital of Canada?", answer: "Ottawa" }
    ],
    Medium: [
      { question: "Capital of Australia?", answer: "Canberra" },
      { question: "Capital of Brazil?", answer: "Brasilia" },
      { question: "Capital of Egypt?", answer: "Cairo" },
      { question: "Capital of Norway?", answer: "Oslo" }
    ],
    Hard: [
      { question: "Capital of Kazakhstan?", answer: "Astana" },
      { question: "Capital of Mongolia?", answer: "Ulaanbaatar" },
      { question: "Capital of Iceland?", answer: "Reykjavik" }
    ]
  },

  "Formula 1": {
    Easy: [
      { question: "Who won F1 2023?", answer: "Verstappen" },
      { question: "Which team is Ferrari?", answer: "Scuderia" },
      { question: "F1 has how many wheels?", answer: "Four" }
    ],
    Medium: [
      { question: "Which country hosts Monaco GP?", answer: "Monaco" },
      { question: "Who is called The Doctor?", answer: "Rossi" }
    ],
    Hard: [
      { question: "First F1 champion?", answer: "Farina" }
    ]
  },

  "JavaScript": {
    Easy: [
      { question: "Keyword to declare variable?", answer: "let" },
      { question: "Type of NaN?", answer: "number" }
    ],
    Medium: [
      { question: "Method to parse JSON?", answer: "JSON.parse" }
    ],
    Hard: [
      { question: "Prototype-based language?", answer: "JavaScript" }
    ]
  }
};
