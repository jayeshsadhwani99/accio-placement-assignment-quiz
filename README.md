# Assignment

The objective of this assignment is to create a language learning game that
helps users improve their language proficiency through interactive exercises
and activities. The game should include frontend UI components, backend
logic for scoring, and a database to store user progress and language data.

## Frontend Development

Use react and create a basic layout for quiz questions.

## Backend Development

The APIs required:

1. Authentication: Can be done using **passport**

2. Languages: To support multiple languages

   - list languages
   - add/update languages
   - get content by using complex filters

3. Exercise and Scoring:

   - submit answer
   - user progress

4. Leaderboard: get leaderboard, also filter using language

5. Bonus Features (If implemented):
   - dynamic CMS
   - maybe **adminbro**

## Basic Schemas

- user
- leaderboard
- exercise

## Scoring Logic

### Concept

**Purpose**: Scoring logic is designed to evaluate a user's performance in each exercise.

**Factors**: Consider question difficulty, response accuracy, and response time.

**Scoring Algorithm**: Simple linear or more complex algorithms based on the above factors.

### Example

```(js)
function calculateScore(questionDifficulty, isCorrect) {
    let baseScore = questionDifficulty * 10; // Base score multiplier
    if (isCorrect) {
        return baseScore;
    } else {
        return 0; // or a partial score based on other factors
    }
}
```

## Adaptive Difficulty

### Concept

To adjust the difficulty of questions based on the user's performance.

### Implementation

**User Performance Tracking**: Keep track of user's answers, both correct and incorrect.

**Difficulty Adjustment Logic**: Adjust the level of subsequent questions based on performance.

```(js)
function adjustDifficulty(userAnswers) {
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    const totalAnswers = userAnswers.length;

    if (correctAnswers / totalAnswers > 0.75) {
        // Increase difficulty
        return currentDifficultyLevel + 1;
    } else if (correctAnswers / totalAnswers < 0.50) {
        // Decrease difficulty
        return currentDifficultyLevel - 1;
    } else {
        // Keep the same
        return currentDifficultyLevel;
    }
}

```
