🎲 Dice Game (React)

A simple and fun dice-rolling game built using React and React Router.
The user selects a number (1–6), rolls a dice, and earns or loses points based on the result.

🚀 Features

Choose a number between 1 and 6

Roll the dice and get a random outcome

Score increases if the guess is correct, decreases if wrong

Reset score anytime

Clean two-page navigation using React Router

📁 Project Structure
src/
│
├── App.js
├── components/
│   ├── StartGame.js
│   └── GamePage.js
├── Images/
│   ├── die.png
│   ├── dice1.png ... dice6.png
│
├── StartGame.css
├── GamePage.css

🧭 Navigation

This project uses react-router-dom:

/ → Start Game page

/game → Main game page

<BrowserRouter>
  <Routes>
    <Route path="/" element={<StartGame />} />
    <Route path="/game" element={<GamePage />} />
  </Routes>
</BrowserRouter>

🕹️ How to Play

Click Start Game on the home screen.

Select a number from 1 to 6.

Press Roll Dice.

If your selected number matches the dice roll → Score increases.
Otherwise → Score decreases.

Use Reset to set score back to 0.

📦 Installation & Setup
# Clone the repository
git clone <your-repo-url>

# Navigate into the project
cd dice-game

# Install dependencies
npm install

# Start the app
npm start

🧰 Tech Used

React

React Router

useState Hook

Basic CSS for styling
