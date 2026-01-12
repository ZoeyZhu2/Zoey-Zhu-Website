import { useRef, useState } from 'react'
import smileyFace from './assets/smileyFace.jpg'
import upsideDownSmileyFace from './assets/upsideDownSmileyFace.jpg'
import './App.css'


function App() {
  const rickRollButtonRef = useRef(null);
  const [count, setCount] = useState(0);
  const [rickRollRotation, setRotation] = useState(0);
  const [rickRollPosition, setPosition] = useState({top: 100, left: 100});
  const randomRotate = () => {
    const deg = Math.floor(Math.random() * 360);
    setRotation(deg);
  };

  const randomPosition = () => {
    const button = rickRollButtonRef.current;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const newTop = Math.random() * (window.innerHeight - buttonHeight) + 0.5 * buttonHeight;
    const newLeft = Math.random() * (window.innerWidth - buttonWidth) + 0.5 * buttonWidth;
    setPosition({top: newTop, left: newLeft});
  };
  return (
    <>
      <div>
        <a href="https://theuselessweb.com/" target="_blank">
          <img src={smileyFace} className="smileyFace" alt="Smiley face" />
        </a>
        <a href="https://doodles.google/" target="_blank">
          <img src={upsideDownSmileyFace} className="upsideDownSmileyFace" alt="Upside down smiley face" />
        </a>
      </div>
      <h1>The Fun Site</h1>
      <p className="read-the-docs">
        Click to have fun.
      </p>
      <div className="cookie">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <button onClick={() => setCount((count) => count + 1)}>
          click me
        </button>
      </div>
      <div>
         <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <button 
            ref = {rickRollButtonRef} 
            className = "rickRollButton" 
            onMouseEnter = {() => {
              setTimeout(() => {
              randomRotate();
              randomPosition();
            }, 200);
              }} 
              style={{ 
                transform: `rotate(${rickRollRotation}deg) scale(1.5)`, 
                top: rickRollPosition.top, 
                left: rickRollPosition.left
              }}
          >  
            click me!!! 
          </button>
        </a>
      </div>
    </>
  )
}

export default App
