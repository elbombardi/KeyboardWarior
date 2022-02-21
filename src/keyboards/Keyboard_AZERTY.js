import "./Keyboard_AZERTY.css" 

function Keyboard_AZERTY(props) {  
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
  <div className="azerty keyboard">
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
      {keyDual("num",["³","²"],"Backquote")}
      {keyDual("num",["1","&"],"Digit1")}
      {keyDual("num",["2","é"],"Digit2")}
      {keyDual("num",["3","\""],"Digit3")}
      {keyDual("num",["4","'"],"Digit4")}
      {keyDual("num",["5","("],"Digit5")}
      {keyDual("num",["6","-"],"Digit6")}
      {keyDual("num",["7","è"],"Digit7")}
      {keyDual("num",["8","_"],"Digit8")}
      {keyDual("num",["9","ç"],"Digit9")}
      {keyDual("num",["0","à"],"Digit0")}
      {keyDual("num",["°",")"],"Minus")}
      {keyDual("num",["+","="],"Equal")}
      {key("backspace","🡠","Backspace")}
      {key("tab","↹", "Tab")}
      {key("letter","A", "KeyQ")}
      {key("letter","Z", "KeyW")}
      {key("letter","E", "KeyE")}
      {key("letter","R", "KeyR")}
      {key("letter","T", "KeyT")}
      {key("letter","Y", "KeyY")}
      {key("letter","U", "KeyU")}
      {key("letter","I", "KeyI")}
      {key("letter","O", "KeyO")}
      {key("letter","P", "KeyP")}
      {keyDual("",["¨","^"], "BracketLeft")} 
      {keyDual("",["£","$"], "BracketRight")} 
      {key("enter","↵", "Enter")}
      {key("caps","Caps", "CapsLock")}
      {key("letter","Q", "KeyA")}
      {key("letter","S", "KeyS")}
      {key("letter","D", "KeyD")}
      {key("letter","F", "KeyF")}
      {key("letter","G", "KeyG")}
      {key("letter","H", "KeyH")}
      {key("letter","J", "KeyJ")}
      {key("letter","K", "KeyK")}
      {key("letter","L", "KeyL")}
      {key("letter","M", "Semicolon")}
      {keyDual("",["%","ù"], "Quote")}
      {keyDual("",["µ","*"], "Backslash")}
      {key("enter2","", "Enter")}
      {key("shift left","⇧", "ShiftLeft")}
      {key("letter","W", "KeyZ")}  
      {key("letter","X", "KeyX")}
      {key("letter","C", "KeyC")}
      {key("letter","V", "KeyV")}
      {key("letter","B", "KeyB")}
      {key("letter","N", "KeyN")}
      {keyDual("",["?", ","], "KeyM")}
      {keyDual("",[".",";"], "Comma")}
      {keyDual("",["/",":"], "Period")}
      {keyDual("",["§","!"], "Slash")}
      {key("shift right","⇧", "ShiftRight")}
      {key("ctrl","ctrl", "ControlLeft")}
      {key("hidden","", "")}
      {key("alt","alt", "AltLeft")}
      {key("space","", "Space")}
      {key("alt","alt gr", "AltRight")}
      {key("hidden","", "")}
      {key("ctrl","ctrl", "ControlRight")}
    </div>
  </div>
  )
}

export default Keyboard_AZERTY;