// Assuming difficulty levels are 1 (easy), 2 (medium), 3 (hard)
function calculateScore(questionDifficulty, isCorrect) {
  let baseScore = questionDifficulty * 10; // Base score multiplier
  if (isCorrect) {
    return baseScore;
  } else {
    return 0; // or a partial score based on other factors
  }
}
