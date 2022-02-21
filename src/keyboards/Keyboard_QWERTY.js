import "./Keyboard_QWERTY.css"

function Keyboard_QWERTY(props) {  
  const key = function(classes, label, keyCode) {
    if (props.keyState[keyCode]) {
      return <div className={"key " + classes + " down"}>{label}</div> 
    }
    return <div className={"key " + classes}>{label}</div>
  };

  const keyDual = function(classes, labels, keyCode) {
    let label = (<>{labels.map((item, index) => {
      return <>{item}<br/></>
    })}</>)
    return key(classes + " dual", label, keyCode)
  };

  const capsLockMarkup = function() {
    let onoff = "off"
    if (props.capsLock) {
      onoff = "on";
    }
    return <div className="lights">
            <span className={"caps-lock " + onoff}>Caps Lock</span>
          </div>; 
  }

  
  return (
  <div className="querty keyboard">
    <div className="logo"/>
    {capsLockMarkup()}
    <div className="section-a">
      {key("function space1", "Esc", "Escape")}
      {key("function", "F1", "F1")}
      {key("function", "F2", "F2")}
      {key("function", "F3", "F3")}
      {key("function space2", "F4", "F4")}
      {key("function", "F5", "F5")}
      {key("function", "F6", "F6")}
      {key("function", "F7", "F7")}
      {key("function space2", "F8", "F8")}
      {key("function",  "F9", "F9")}
      {key("function", "F10", "F10")}
      {key("function", "F11", "F11")}
      {key("function", "F12", "F12")}
      {keyDual("num",["~","`"],"Backquote")}
      {keyDual("num",["!","1"],"Digit1")}
      {keyDual("num",["@","2"],"Digit2")}
      {keyDual("num",["#","3"],"Digit3")}
      {keyDual("num",["$","4"],"Digit4")}
      {keyDual("num",["%","5"],"Digit5")}
      {keyDual("num",["^","6"],"Digit6")}
      {keyDual("num",["&","7"],"Digit7")}
      {keyDual("num",["*","8"],"Digit8")}
      {keyDual("num",["(","9"],"Digit9")}
      {keyDual("num",[")","0"],"Digit0")}
      {keyDual("num",["_","-"],"Minus")}
      {keyDual("num",["+","="],"Equal")}
      {key("backspace","Backspace","Backspace")}
      {key("tab","Tab", "Tab")}
      {key("letter","Q", "KeyQ")}
      {key("letter","W", "KeyW")}
      {key("letter","E", "KeyE")}
      {key("letter","R", "KeyR")}
      {key("letter","T", "KeyT")}
      {key("letter","Y", "KeyY")}
      {key("letter","U", "KeyU")}
      {key("letter","I", "KeyI")}
      {key("letter","O", "KeyO")}
      {key("letter","P", "KeyP")}
      {keyDual("",["{","["], "BracketLeft")}
      {keyDual("",["}","]"], "BracketRight")}
      {keyDual("letter slash",["|","\\"], "Backslash")}
      {key("caps",["Caps","Lock"], "CapsLock")}
      {key("letter","A", "KeyA")}
      {key("letter","S", "KeyS")}
      {key("letter","D", "KeyD")}
      {key("letter","F", "KeyF")}
      {key("letter","G", "KeyG")}
      {key("letter","H", "KeyH")}
      {key("letter","J", "KeyJ")}
      {key("letter","K", "KeyK")}
      {key("letter","L", "KeyL")}
      {keyDual("",[":",";"], "Semicolon")}
      {keyDual("",["\"","'"], "Quote")}
      {key("enter","Enter", "Enter")}
      {key("shift left","Shift", "ShiftLeft")}
      {key("letter","Z", "KeyZ")}  
      {key("letter","X", "KeyX")}
      {key("letter","C", "KeyC")}
      {key("letter","V", "KeyV")}
      {key("letter","B", "KeyB")}
      {key("letter","N", "KeyN")}
      {key("letter","M", "KeyM")}
      {keyDual("",["<",","], "Comma")}
      {keyDual("",[">","."], "Period")}
      {keyDual("",["?","/"], "Slash")}
      {key("shift right","Shift", "ShiftRight")}
      {key("ctrl","Ctrl", "ControlLeft")}
      {key("hidden","", "")}
      {key("","Alt", "AltLeft")}
      {key("space","", "Space")}
      {key("","Alt", "AltRight")}
      {key("hidden","", "")}
      {key("","Prnt", "")}
      {key("ctrl","Ctrl", "ControlRight")}
    </div>
  </div>
  )
}

export default Keyboard_QWERTY;