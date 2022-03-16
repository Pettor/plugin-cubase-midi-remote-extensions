/**
 * @param {MR_Knob} knob
 * @param {MR_SurfaceCustomValueVariable} defaultIncreaseCommand
 * @param {MR_SurfaceCustomValueVariable} defaultDecreaseCommand
 */
function CC_Knob(knob, defaultIncreaseCommand, defaultDecreaseCommand) {
  this._increaseCommand = defaultIncreaseCommand;
  this._decreaseCommand = defaultDecreaseCommand;
  this._prevValue = 0;

  /**
   * @param {MR_ActiveDevice} activeDevice
   * @param {number} value
   */
  function processValueChange(activeDevice, value) {
    if (value === 1 || value > this._prevValue) {
      this._increaseCommand.setProcessValue(activeDevice, 1);
    } else {
      this._decreaseCommand.setProcessValue(activeDevice, 1);
    }
    this._prevValue = value;
  }
  knob.mSurfaceValue.mOnProcessValueChange = processValueChange.bind(this);

  /**
   * @param {MR_SurfaceCustomValueVariable} newIncreaseCommand
   * @param {MR_SurfaceCustomValueVariable} newDecreaseCommand
   */
  this.changeCommand = function changeCommand(newIncreaseCommand, newDecreaseCommand) {
    this._increaseCommand = newIncreaseCommand;
    this._decreaseCommand = newDecreaseCommand;
  };
}

module.exports = CC_Knob;
