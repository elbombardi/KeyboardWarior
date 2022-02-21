import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Keyboard from './keyboards/Keyboard';

function App() {
  const [keyState, setKeyState] = useState({}) 
  const [text, setText] = useState("")
  const [capsLock, setCapsLock] = useState(false)
  const [resetCapsLock, setResetCapsLock] = useState(true)
  const [layout, setLayout] = useState("AZERTY")

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
      console.log("key down : " + e.code + ', ' + e.key)
    }
  }

  const onkeyUpHandler = function(e) {
    e.preventDefault()
    if (keyState[e.code]) {
      keyState[e.code] = false;
      setText(text + e.key)
      setKeyState({...keyState});
      detectCapsLock(e);
      console.log("key up : " + e.code)
    }
  }

  const onblurHanlder = function(e) {
    setKeyState({})
    setResetCapsLock(true)
  }

  document.onkeydown = onKeyDownHandler;
  document.onkeyup = onkeyUpHandler;  
  window.onblur = onblurHanlder;
  return (
    <div className="App">
        <Keyboard layout={layout} keyState={keyState} capsLock={capsLock} />
    </div>
  );
}

export default App;
