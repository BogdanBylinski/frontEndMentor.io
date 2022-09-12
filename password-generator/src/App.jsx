import "./styles/main.scss";
import { useState } from "react";
import "./styles/checkbox.scss"
import makeid from "./components/passwordGenerate.js"
import strength from "./components/Strength";
import Strength from "./components/Strength";

function App() {
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [charactersCount, setCharactersCount] = useState(10);
  const [copied, setCopied] = useState("");
  const [uppers, setUppers] = useState(false)
  const [lowers, setLowers] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generate =()=>{
    let generatedPassword = makeid(charactersCount, uppers, lowers,numbers, symbols );
    setPasswordValue(generatedPassword)
  }

  const changeRange = (e)=>{
    setCharactersCount(e.target.value)
  }

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleMouseEnter2 = () => {
    setIsHover2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHover2(false);
  };
  const copy = () => {
    setCopied("Copied");
    setTimeout(() => {
      setCopied("");
    }, 2000);
    navigator.clipboard.writeText(passwordValue);
  };

  return (
    <div className="App">
      <div className="main">
        <div className="text">Password Generator</div>
        <div className="generator_container">
          <div className="generator_container-top">
            <div className="password_container">
              {/* <div className="password_container-password" placeholder="P4$5W0rD!">{passwordValue}</div> */}
              <input type="text" name="" id="" disabled value={passwordValue} placeholder="P4$5W0rD!"/>
              <div
                className="password_container-copy"
                onClick={() => copy()}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="password_container-copy-text">{copied}</div>
                <svg className="copy" width="21" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                    fill="#A4FFAF"
                    style={{ fill: isHover ? "#E6E5EA" : "#A4FFAF" }}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="generator_container-bottom">
            <div className="main_container">
              <div className="main_container-character">
                <div className="main_container-character-character_text">
                  Character length
                </div>
                <div className="main_container-character-character_number">
                  {charactersCount}
                </div>
              </div>
              <div className="main_container-slider">
                <input
                  defaultValue={10}
                  onChange={(e)=>changeRange(e)}
                  className="slider"
                  type="range"
                  name=""
                  id=""
                  min="0"
                  max="20"
                  style={{background: `linear-gradient(90deg, #A4FFAF 0%, #A4FFAF ${charactersCount*5}%, #24232C 0%, #24232C 100%)`}}
                />
              </div>
              <div className="main_container-checkboxes">
                <div className="checkboxes_line">
                  <input
                    className="checkboxes_line-checkbox"
                    type="checkbox"
                    onChange={()=>uppers ===false? setUppers(true) : setUppers(false)}
                    defaultChecked={uppers}
                    name=""
                    id=""
                  />
                  <div className="checkboxes_line-text">
                    Include Uppercase Letters
                  </div>
                </div>
                <div className="checkboxes_line">
                  <input
                    className="checkboxes_line-checkbox"
                    type="checkbox"
                    onChange={()=>lowers ===false? setLowers(true) : setLowers(false)}
                    defaultChecked={lowers}
                    name=""
                    id=""
                  />
                  <div className="checkboxes_line-text">
                    Include Lowercase Letters
                  </div>
                </div>
                <div className="checkboxes_line">
                  <input
                  onChange={()=>numbers ===false? setNumbers(true) : setNumbers(false)}
                     defaultChecked={numbers}
                    className="checkboxes_line-checkbox"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <div className="checkboxes_line-text">Include Numbers</div>
                </div>
                <div className="checkboxes_line">
                  <input
                     defaultChecked={symbols}
                     onClick={() => symbols ===false? setSymbols(true) : setSymbols(false)}
                    className="checkboxes_line-checkbox"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <div className="checkboxes_line-text">Include Symbols</div>
                </div>
              </div>
              <div className="main_container_strength">
                <div className="mainContainer_strength-text">Strength</div>
                <div className="mainContainer_strength-right">
                
        <div className="mainContainer_strength-rightColumnsHolder">
          <Strength charactersCount={charactersCount}></Strength>
        </div>
        
              </div>
              </div>
              <div className="main_container-button" onClick={()=>generate()} style={{ color: isHover2 ? "#A4FFAF" : "#18171F", backgroundColor: isHover2 ? "#18171F" : "#A4FFAF"}} onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}>
                <p className="button_text" style={{ color: isHover2 ? "#A4FFAF" : "#18171F", backgroundColor: isHover2 ? "#18171F" : "#A4FFAF"}}>GENERATE</p>
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
                
                style={{ fill: isHover2 ? "#A4FFAF" : "#18171F" }}/></svg> 
                {/* <img src={arrow} style={{ fill: isHover ? "#E6E5EA" : "#A4FFAF" }} alt="generate-arrow" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
