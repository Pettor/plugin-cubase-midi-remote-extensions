/**
 * @param {MR_Button} button
 * @param {MR_SurfaceCustomValueVariable} command
 */
function CC_Button(button, command) {
  this.command = command;

  /**
   * @param {MR_ActiveDevice} activeDevice
   * @param {number} value
   */
  function processValueChange(activeDevice, value) {
    if (value > 0) {
      this.command.setProcessValue(activeDevice, 1);
    }
  }
  button.mSurfaceValue.mOnProcessValueChange = processValueChange.bind(this);
}

module.exports = CC_Button;
