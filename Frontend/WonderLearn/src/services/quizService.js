// src/data/quizQuestions.js
export const allQuizzes = {
  mathematics: {
    1: [
      {
        id: 1,
        character: "🦁 Leo the Lion",
        storyText: "Leo found 4 mangoes on one tree and 3 mangoes on another tree! How many mangoes does Leo have altogether?",
        options: ["6 Mangoes", "7 Mangoes", "8 Mangoes", "5 Mangoes"],
        correctAnswer: "7 Mangoes",
        hint: "Count 4 fingers on one hand, then add 3 more!"
      },
      {
        id: 2,
        character: "🦉 Ollie the Owl",
        storyText: "Ollie has 9 golden stars and gives 4 stars to his little brother. How many stars are left?",
        options: ["4 Stars", "6 Stars", "5 Stars", "3 Stars"],
        correctAnswer: "5 Stars",
        hint: "Start at 9 and count backwards 4 steps."
      },
      {
        id: 3,
        character: "🐵 Milo the Monkey",
        storyText: "Milo swings across 2 vines every minute. How many vines will he swing across in 4 minutes?",
        options: ["6 Vines", "8 Vines", "10 Vines", "4 Vines"],
        correctAnswer: "8 Vines",
        hint: "Add 2 + 2 + 2 + 2!"
      }
    ],
    // Add levels 2, 3, 4 for mathematics here...
  },
  science: {
    1: [
      {
        id: 1,
        character: "🚀 Astro the Alien",
        storyText: "Which planet is closest to our Sun?",
        options: ["Venus", "Mercury", "Mars", "Earth"],
        correctAnswer: "Mercury",
        hint: "It's the smallest and hottest planet nearest to the sun!"
      },
      {
        id: 2,
        character: "🌍 Terra the Earth",
        storyText: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Mars", "Saturn", "Neptune"],
        correctAnswer: "Mars",
        hint: "It has a reddish color due to iron oxide on its surface."
      }
    ],
    // Add levels 2, 3 for science here...
  },
  history: {
    1: [
      {
        id: 1,
        character: "📜 Time-Keeper Tim",
        storyText: "Where were the ancient Pyramids built?",
        options: ["Egypt", "Rome", "Greece", "China"],
        correctAnswer: "Egypt",
        hint: "Think of the desert, pharaohs, and the River Nile!"
      }
    ]
  }
};