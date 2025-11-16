# 🎲 Dice Game (React)

A simple and fun dice-rolling game built using React and React Router. The user selects a number (1–6), rolls a dice, and earns or loses points based on the result.

## 🚀 Features

- Choose a number between 1 and 6
- Roll the dice and get a random outcome
- Score increases if the guess is correct, decreases if wrong
- Reset score anytime
- Clean two-page navigation using React Router

## 📁 Project Structure

```
src/
│
├── App.js
├── components/
│   ├── StartGame.js
│   └── GamePage.js
│   └── StartGame.js
│   └── GamePage.css
├── StartGame.css
├── GamePage.css
├── Images/
│   ├── die.png
│   ├── dice1.png ... dice6.png
│
```

## 🧭 Navigation

This project uses `react-router-dom`:

- `/` → Start Game page
- `/game` → Main game page

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<StartGame />} />
    <Route path="/game" element={<GamePage />} />
  </Routes>
</BrowserRouter>
```

## 🕹️ How to Play

1. Click **Start Game** on the home screen.
2. Select a number from **1 to 6**.
3. Press **Roll Dice**.
4. If your selected number matches the dice roll → **Score increases**. Otherwise → **Score decreases**.
5. Use **Reset** to set score back to 0.

## 📦 Installation & Setup

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project
cd dice-game

# Install dependencies
npm install

# Start the app
npm start
```

The app will open at `http://localhost:3000` in your browser.

## 🧰 Tech Stack

- **React** - JavaScript library for building user interfaces
- **React Router** - Client-side routing for seamless page navigation
- **useState Hook** - React hook for managing component state
- **CSS** - Custom styling for responsive and attractive UI

## 📝 Component Details

### StartGame.js
The landing page component that displays the welcome screen and a button to navigate to the game page.

### GamePage.js
The main game component that handles:
- Number selection (1-6)
- Dice rolling logic
- Score calculation and display
- Reset functionality

## 🎨 Styling

The project uses two CSS files for organization:

- **StartGame.css** - Styles for the start/home page
- **GamePage.css** - Styles for the main game interface

Both files include responsive design to ensure the game works well on different screen sizes.

## 🎯 Game Logic

- When the user rolls the dice, a random number between 1 and 6 is generated
- The selected number is compared with the rolled number
- **Match** → Score += 10 points
- **No Match** → Score -= 5 points
- Score is displayed in real-time and updates after each roll

## 💡 Future Enhancements

- Add difficulty levels
- Implement a leaderboard
- Add sound effects for dice rolls
- Create a timer-based challenge mode
- Add animations for dice rolling
