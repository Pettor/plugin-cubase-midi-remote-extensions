/**
 * @param {MR_SurfaceCustomValueVariable} increaseVar
 * @param {MR_SurfaceCustomValueVariable} decreaseVar
 */
 function CommandVariablePair(increaseVar, decreaseVar) {
  this.increaseVar = increaseVar;
  this.decreaseVar = decreaseVar;
}

module.exports = CommandVariablePair;
