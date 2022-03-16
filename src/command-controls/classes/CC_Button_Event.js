/**
 * @param {MR_Button} button
 * @param {() => void} onPressed
 */
 function CC_Button_Event(button, onPressed) {
  /**
   * @param {MR_ActiveDevice} activeDevice
   * @param {number} value
   */
  function processValueChange(activeDevice, value) {
    if (value > 0) {
      onPressed();
    }
  }
  button.mSurfaceValue.mOnProcessValueChange = processValueChange.bind(this);
}

module.exports = CC_Button_Event;
