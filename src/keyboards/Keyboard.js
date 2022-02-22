import Keyboard_AZERTY from "./Keyboard_AZERTY";
import Keyboard_QWERTY from "./Keyboard_QWERTY"

function Keyboard(props) {
    if (props.layout === 'QWERTY') {
      return <Keyboard_QWERTY keyState={props.keyState} 
        capsLock={props.capsLock} 
        expectedKey={props.expectedKey}
        layoutSelector={props.layoutSelector}
      />
    } 
    if (props.layout === 'AZERTY') {
      return <Keyboard_AZERTY  keyState={props.keyState} 
        capsLock={props.capsLock} 
        expectedKey={props.expectedKey}
        layoutSelector={props.layoutSelector}
      />
    }
}

export default Keyboard;