import { useRef, useState, useEffect } from 'react'
import smileyFace from './assets/smileyFace.jpg'
import upsideDownSmileyFace from './assets/upsideDownSmileyFace.jpg'
import './FunPage.css'
import cookie from './assets/Cookie/cookie.png';
import cookie1 from './assets/Cookie/biteOne.png';
import cookie2 from './assets/Cookie/biteTwo.png';
import cookie3 from './assets/Cookie/biteThree.png';
import cookie4 from './assets/Cookie/biteFour.png';
import cookie5 from './assets/Cookie/biteFive.png';
import cookie6 from './assets/Cookie/biteSix.png';
import cookie7 from './assets/Cookie/biteSeven.png';
import tombstone from './assets/Cookie/Tombstone.png';



function FunPage() {
  const rickRollButtonRef = useRef(null);
  const [count, setCount] = useState(0);
  const [rickRollRotation, setRotation] = useState(0);
  const [rickRollPosition, setPosition] = useState({top: 100, left: 100});
  const [bgColor, setBgColor] = useState("#ffffff");
  const [bgClickCount, setBgClickCount] = useState(0);
  const [isDisco, setIsDisco] = useState(false);
  const [showTombstone, setShowTombstone] = useState(false);
  const cookieImages = [cookie, cookie1, cookie2, cookie3, cookie4, cookie5, cookie6, cookie7];
  
  const getRandomColor = () => {
    const char = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += char[Math.floor(Math.random() * 16)]
    }
    return color;
  }

  const bgClick = (e) => {
    // Only change color if NOT clicking on a button or link
    const isButton = e.target.closest('button');
    const isLink = e.target.closest('a');
    if (!isButton && !isLink) {
      setBgColor(getRandomColor());
      const newCount = bgClickCount + 1;
      setBgClickCount(newCount);
      if (newCount >= 15) {
        setIsDisco(true);
        setBgClickCount(0);
      }
    }
  } 

  //Disco mode animation
  useEffect(() => {
    if (!isDisco) return;

    const interval = setInterval(() => {
      setBgColor(getRandomColor());}, 100);
    
    const timeout = setTimeout(() => {
      setIsDisco(false);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };

  }, [isDisco])

  const randomRotate = () => {
    const deg = Math.floor(Math.random() * 360);
    setRotation(deg);
  };

  /* Adjust randomPosition logic to account for NavBar height */
  const randomPosition = () => {
    const button = rickRollButtonRef.current;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const navBarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-bar-height')) || 80; // Default to 80px

    const newTop = Math.random() * (window.innerHeight - buttonHeight - navBarHeight) + navBarHeight + 0.5 * buttonHeight;
    const newLeft = Math.random() * (window.innerWidth - buttonWidth) + 0.5 * buttonWidth;

    setPosition({ top: newTop, left: newLeft });
  };

  const cookieClick = () => {
    const newCount = count + 1;
    if (newCount >= 9) {
      setCount(0);
      setShowTombstone(false);
    }
    else {
      setCount(newCount);
    }
  };

  //Showing tombstone after 4 seconds of eating cookie
  useEffect(() => {
    if (count === 8) {
      const timer = setTimeout(() => {
        setShowTombstone(true);
    }, 3000);
    return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div onClick={bgClick} style={{backgroundColor: bgColor,  minHeight: '90vh', transition: 'background-color 0.3s ease', top: '10vh'}}>
      <div className="smiles">
        <a href="https://theuselessweb.com/" target="_blank">
          <img src={smileyFace} className="smileyFace" alt="Smiley face" />
        </a>
        <a href="https://doodles.google/" target="_blank">
          <img src={upsideDownSmileyFace} className="upsideDownSmileyFace" alt="Upside down smiley face" />
        </a>
      </div>
      <h1>The Fun Site</h1>
      <p className="instructions">
        Click to have fun!
      </p>
      <div className="cookie">
        <button onClick={cookieClick} className = "cookieButton">
          {count === 0 && (<img src={cookie} alt = "Cookie!" className="cookieImage"/>)}
          {count > 0 && count < 8 && (
            <img 
              src={cookieImages[count]} 
              alt={`Cookie ${count}`} 
              className="cookieImage" 
            />
          )}
          {count === 8 && !showTombstone && (<span className = "cookieText"> HEY! You ate it all!</span>)}
          {showTombstone && (<img src={tombstone} alt = "Tombstone" className="cookieImage"/>)}
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
    </div>
  )
}

export default FunPage
