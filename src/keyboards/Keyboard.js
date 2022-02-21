import Keyboard_AZERTY from "./Keyboard_AZERTY";
import Keyboard_QWERTY from "./Keyboard_QWERTY"

function Keyboard(props) {
    if (props.layout === 'QUERTY') {
      return <Keyboard_QWERTY keyState={props.keyState} capsLock={props.capsLock}/>
    } 
    if (props.layout === 'AZERTY') {
      return <Keyboard_AZERTY keyState={props.keyState} capsLock={props.capsLock}/>
    }
  }

  export default Keyboard;