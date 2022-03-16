var CommandPair = require("./CommandPair");

/**
 * @param {CommandPair} increasePair
 * @param {CommandPair} decreasePair
 */
 function CommandValuePair(increasePair, decreasePair) {
  this.increasePair = increasePair;
  this.decreasePair = decreasePair;
}

module.exports = CommandValuePair;
