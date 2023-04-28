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
import Church from "./pages/Church";
import Violin from "./pages/Violin";
import Velaflame from "./pages/Velaflame";
import BYUBroadcasting from './pages/BYUBroadcasting';
import BYULS from './pages/BYULS'
import Zappala from "./pages/Zappala";
import Sealed from "./pages/Sealed";
import Missionary from "./pages/Missionary";
import Contact from "./pages/Contact";


function App() {
  const [level, setLevel] = useState(1);
  const [exp, setExp] = useState(0);
  const [maxExp, setMaxExp] = useState(5);
  const [addExpAmount, setAddExpAmount] = useState(0);

  useEffect(() => {
    const level = parseInt(localStorage.getItem("level"))
    setLevel(level);
    const initialMaxExp = calculateTotalExp(level);
    setMaxExp(initialMaxExp);
    const exp = parseInt(localStorage.getItem("exp"))
    setExp(exp);
  }, []);

  useEffect(() => {
    const expBarInner = document.querySelector('#exp-bar-inner');
    expBarInner.style.setProperty('--exp', exp);
    expBarInner.style.setProperty('--max-exp', maxExp);
  }, [exp, maxExp]);

  function useFireworks() {
    const container = document.querySelector('#fireworks-container')
    const fireworks = new Fireworks(container, {
      autoresize: true,
      opacity: 0.5,
      acceleration: 1.10,
      friction: 0.92,
      gravity: 1.8,
      particles: 80,
      traceLength: 3,
      traceSpeed: 14,
      explosion: 10,
      intensity: 30,
      flickering: 50,
      lineStyle: 'round',
      hue: {
        min: 0,
        max: 360
      },
      delay: {
        min: 30,
        max: 60
      },
      rocketsPoint: {
        min: 50,
        max: 50
      },
      lineWidth: {
        explosion: {
          min: 2,
          max: 4
        },
        trace: {
          min: 1,
          max: 2
        }
      },
      brightness: {
        min: 50,
        max: 80
      },
      decay: {
        min: 0.015,
        max: 0.03
      },
      mouse: {
        click: false,
        move: false,
        max: 1
      }
    })
    fireworks.start()
    container.classList.add('fireworks-started');

    setTimeout(() => {
      container.classList.add('fireworks-stopped');
      container.classList.remove('fireworks-started');
      fireworks.stop();
      setTimeout(() => {
        container.classList.remove('fireworks-stopped');
        container.removeChild(document.querySelector("canvas"))
      }, 500);
    }, 4000)
  }

  useEffect(() => {
    if (level !== 1 && level !== parseInt(localStorage.getItem("level"))) {
      useFireworks();
      console.log("Fireworks")
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

  function saveStats() {
    localStorage.setItem("level", level)
    localStorage.setItem("maxExp", maxExp)
    localStorage.setItem("exp", exp)
  }

  window.addEventListener("beforeunload", function () {
    saveStats();
  });

  return (
    <Router>
      <Character level={level} setLevel={setLevel} exp={exp} setExp={setExp} maxExp={maxExp} setMaxExp={setMaxExp} addExpAmount={addExpAmount} addExp={addExp} />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/experience" exact element={<Experience level={level} addExp={addExp} addExpNotif={addExpNotif} />} />
        <Route path="/about" exact element={<About level={level} addExpNotif={addExpNotif} />} />
        <Route path="/church" exact element={<Church addExp={addExp} addExpNotif={addExpNotif} />} />
        <Route path="/velaflame" exact element={<Velaflame addExp={addExp} addExpNotif={addExpNotif} />} />
        <Route path="/broadcasting" exact element={<BYUBroadcasting addExp={addExp} addExpNotif={addExpNotif} />} />
        <Route path="/byuls" exact element={<BYULS addExp={addExp} addExpNotif={addExpNotif} />} />
        <Route path="/zappala" exact element={<Zappala addExp={addExp} addExpNotif={addExpNotif} />} />
        <Route path="/sealed" exact element={<Sealed addExp={addExp} addExpNotif={addExpNotif} />} />
        <Route path="/missionary" exact element={<Missionary addExp={addExp} addExpNotif={addExpNotif} />} />
        <Route path="/violin" exact element={<Violin addExp={addExp} addExpNotif={addExpNotif} />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <div id="fireworks-container">
        <div id="level-up">LEVEL UP!</div>
      </div>
      <Footer addExp={addExp} addExpNotif={addExpNotif} />
    </Router>
  );
}

export default App;
