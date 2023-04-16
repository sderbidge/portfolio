/* eslint-disable react-hooks/rules-of-hooks */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Character from "./components/Character"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Experience from "./pages/Experience"

import './App.css'
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Fireworks } from 'fireworks-js'
import About from "./pages/About";
import Violin from "./pages/Violin";


function App() {
  const [level, setLevel] = useState(1);
  const [exp, setExp] = useState(0);
  const [maxExp, setMaxExp] = useState(5);
  const [addExpAmount, setAddExpAmount] = useState(0);

  useEffect(() => {
    const initialMaxExp = calculateTotalExp(level);
    setMaxExp(initialMaxExp);
  }, []);

  useEffect(() => {
    const expBarInner = document.querySelector('#exp-bar-inner');
    expBarInner.style.setProperty('--exp', exp);
    expBarInner.style.setProperty('--max-exp', maxExp);
  }, [exp, maxExp]);

  function useFireworks() {
    const container = document.querySelector('#fireworks-container')
    const fireworks = new Fireworks(container, { /* options */ })
    fireworks.start()
    container.classList.add('fireworks-started');

    setTimeout(() => {
      container.classList.add('fireworks-stopped');
      container.classList.remove('fireworks-started');
      fireworks.stop();
    }, 3000)

    setTimeout(() => {
      container.classList.remove('fireworks-stopped');
    }, 500);
  }

  useEffect(() => {
    if (level !== 1) {
      useFireworks();
    }
  }, [level])

  function calculateTotalExp(level) {
    return 5 * Math.pow(2, level - 1);
  }

  function addExp(amount) {
    setExp(prevExp => {
      let totalExp = prevExp + amount;
      let newLevel = level;
      let newMaxExp = maxExp;
      let prevMaxExp = maxExp
      if (totalExp >= maxExp) {
        newLevel += 1;
        newMaxExp = calculateTotalExp(newLevel);
        totalExp -= prevMaxExp;
        if (totalExp >= newMaxExp) {
          addExp(totalExp - newMaxExp);
          newLevel += 1;
          newMaxExp = calculateTotalExp(newLevel);
          totalExp -= newMaxExp;
          totalExp = Math.abs(totalExp)
        }
      } else if (totalExp >= calculateTotalExp(newLevel)) {
        newLevel += 1;
        newMaxExp = calculateTotalExp(newLevel)
        totalExp -= newMaxExp;
        totalExp = Math.abs(totalExp)
      }
      setLevel(newLevel);
      setMaxExp(newMaxExp);
      return totalExp;
    });
  }

  function addExpNotif(exp) {
    console.log(exp)
    setAddExpAmount((prev) => prev + exp)
    setTimeout(() => {
      setAddExpAmount(0)
    }, 1500)
    console.log("Setting to 0...")
  }

  return (
    <Router>
      <Character level={level} setLevel={setLevel} exp={exp} setExp={setExp} maxExp={maxExp} setMaxExp={setMaxExp} addExpAmount={addExpAmount} addExp={addExp} />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/experience" exact element={<Experience level={level} addExpNotif={addExpNotif} />} />
        <Route path="/about" exact element={<About level={level} addExpNotif={addExpNotif} />} />
        <Route path="/violin" exact element={<Violin addExp={addExp} addExpNotif={addExpNotif} />} />
      </Routes>
      <div id="fireworks-container">
        <div id="level-up">LEVEL UP!</div>
      </div>
      <Footer addExp={addExp} addExpNotif={addExpNotif} />
    </Router>
  );
}

export default App;
