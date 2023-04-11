import { useState } from "react";
import './Character.css'

function Character() {
    const [level, setLevel] = useState(1);
    const [exp, setExp] = useState(0);
    const [maxExp, setMaxExp] = useState(5);
    const [addExpAmount, setAddExpAmount] = useState(0);

    function addExp(amount) {
        setExp(prevExp => prevExp + amount);
        if (exp + amount >= maxExp) {
            setLevel(prevLevel => prevLevel + 1);
            setMaxExp(prevMaxExp => prevMaxExp * 2);
            setExp(exp + amount - maxExp);
        }
        setAddExpAmount(amount);
        setTimeout(() => { setAddExpAmount(0); }, 1000);
    }

    return (
        <div id="character">
            <div id="stats">
                <div onClick={() => addExp(1)} id="level">{level}</div>
                <div id="right-stats">
                    <div id="exp-bar-container">
                        <div id="exp-bar-inner" style={{ width: (exp / maxExp) * 100 + '%' }}>
                        </div>
                        {addExpAmount !== 0 && <span id="add-exp">+ {addExpAmount} Exp</span>}
                    </div>
                    <div id="exp-stat">Exp: {exp} / {maxExp}</div>
                </div>
            </div>
        </div>
    );
}

export default Character;
