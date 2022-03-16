/**
 * @param {string} category
 * @param {string} command
 */
function CommandPair(category, command) {
  this.category = category;
  this.command = command;

  this.variableName = function variableName() {
    return "customVariable__" + this.category + "." + this.command;
  }
}

module.exports = CommandPair;
