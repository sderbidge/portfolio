import './Character.css'

function Character({ level, exp, maxExp, addExpAmount, addExp }) {

    return (
        <div id="character">
            <div id="stats">
                <div onClick={() => addExp(1)} id="level">{level}</div>
                <div id="right-stats">
                    <div id="exp-bar-container">
                        <div id="exp-bar-inner">
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
