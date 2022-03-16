var CC_Knob = require("./CC_Knob");
var CommandVariablePair = require("../../types/CommandVariablePair");

/**
 * @param {MR_Knob} knob
 * @param {CommandVariablePair[]} commandArray
 */
function CC_Knob_MultiCommandKnob(knob, commandArray) {
  /**
   * @type {CommandVariablePair[]}
   */
  var commands = commandArray;
  /**
   * @type {number}
   */
  var index = 0;

  this._getCurrentCommand = function() {
    return commands[index];
  };

  var current = this._getCurrentCommand();

  /**
   * @type {CC_Knob}
   */
  var cc_knob = new CC_Knob(knob, current.increaseVar, current.decreaseVar);

  this._increaseIndex = function() {
    if (index + 1 >= commands.length) {
      index = 0;
    } else {
      index = index + 1;
    }
  };

  this.changeCommand = function() {
    this._increaseIndex();
    const newCommands = this._getCurrentCommand();
    cc_knob.changeCommand(newCommands.increaseVar, newCommands.decreaseVar);
  };
}

module.exports = CC_Knob_MultiCommandKnob;
