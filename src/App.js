import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Keyboard from './keyboards/Keyboard';

function App() {
  const [keyState, setKeyState] = useState({}) 
  const [capsLock, setCapsLock] = useState(false)
  const [resetCapsLock, setResetCapsLock] = useState(true)
  const [layout, setLayout] = useState("AZERTY")

  const refText = `In astrodynamics or celestial mechanics, a hyperbolic trajectory is the trajectory of any object around a central body with more than enough speed to escape the central object's gravitational pull. The name derives from the fact that according to Newtonian theory such an orbit has the shape of a hyperbola. In more technical terms this can be expressed by the condition that the orbital eccentricity is greater than one.`
  const [typedText, setTypeText] = useState("")
  const [remainingText, setRemainingText] = useState(refText.substring(1, refText.length))
  const [expectedKey, setExpectedKey] = useState(refText[0])
  
  const [errors, setErrors] = useState(0)
  const [totalTyped, setTotalTyped] = useState(0)
  const [done, setDone] = useState(false)
  const [timerStart, setTimerStart] = useState()
  const [speed, setSpeed] = useState(0)

  const detectCapsLock = function(e) {
    if (resetCapsLock) {
      if (e.code.startsWith('Key')) {
        if (e.shiftKey) {
          setCapsLock(e.key.toUpperCase() !== e.key)
        } else {
          setCapsLock(e.key.toUpperCase() === e.key)
        }
        setResetCapsLock(false)
      }
    } 
    if (e.code === 'CapsLock') {
      setCapsLock(!capsLock)
    }
  }

  const onKeyDownHandler = function(e) {
    e.preventDefault()
    if (!keyState[e.code]) {
      keyState[e.code] = true;
      setKeyState({...keyState});
      //console.log("'" + e.key + "': '" + e.code + "', ")
    }
  }

  const onkeyUpHandler = function(e) {
    e.preventDefault()
    if (keyState[e.code]) {
      keyState[e.code] = false;
      setKeyState({...keyState});
      detectCapsLock(e);
      validateTyped(e.key)
    }
  }

  const onblurHanlder = function(e) {
    setKeyState({})
    setResetCapsLock(true)
  }

  function validateTyped(key) {
    if (key in {"CapsLock":"", "Shift":"", "Control":"", "Alt":"", "Escape":""}) return;
    if (!timerStart) {
      setTimerStart(Date.now())
      setInterval(() => {
        setSpeed(timerStart)
      }, 1000);
    }
    setTotalTyped(totalTyped + 1)
    if (expectedKey === key) {
      setTypeText(typedText + key)
      setExpectedKey(remainingText[0])
      setRemainingText(remainingText.substring(1, remainingText.length))
      setDone(remainingText === "")
    } else {
      setErrors(errors + 1)
    }
  }

  document.onkeydown = onKeyDownHandler;
  document.onkeyup = onkeyUpHandler;  
  window.onblur = onblurHanlder;
  
  const screen = function() {
    return <div className="screen">
        <p>{typedText}<span className="expected">{expectedKey}</span><span className="remaining">{remainingText}</span></p>
    </div>
  }

  const layoutSelector = function() {
    return (
      <select className="layout-selector" 
              defaultValue={layout} 
              onChange={(e) => {setLayout(e.target.value)}}>
          <option value="QWERTY">QWERTY</option>
          <option value="AZERTY">AZERTY</option>
      </select>);
  }
  
  const statistics = function() {
    return <div className="statistics">
        <p>Errors : {errors} </p>
        <p>Accuracy : {100 - (Math.round((errors / (totalTyped + remainingText.length)) * 1000)/10) } % </p>
        <p>Speed : {speed} </p>
    </div>
  }

  const keyboard = function() {
     return <>
        <Keyboard layout={layout} 
                  keyState={keyState} 
                  capsLock={capsLock} 
                  expectedKey={expectedKey}
                  layoutSelector={layoutSelector}  />
     </>
  }

  return (
    <div className="App">
        {screen()}
        {statistics()}
        {keyboard()} 
    </div>
  );
}

export default App;
