var CC_Knob = require("./classes/CC_Knob");
var CC_Knob_MultiCommand = require("./classes/CC_Knob_MultiCommand");
var CC_Button = require("./classes/CC_Button");
var CC_Button_Event = require("./classes/CC_Button_Event");

var CommandPair = require("../types/CommandPair");
var CommandValuePair = require("../types/CommandValuePair");
var CommandVariablePair = require("../types/CommandVariablePair");

/**
 * Creates button that triggers command when pressed
 * @param {MR_FactoryMappingPage} page
 * @param {MR_DeviceDriver} deviceDriver
 * @param {MR_Button} button
 * @param {CommandPair} commandPair
 */
 function createButton(page, deviceDriver, button, commandPair) {
  var commandVar = deviceDriver.mSurface.makeCustomValueVariable(commandPair.variableName())
  page.makeCommandBinding(commandVar, commandPair.category, commandPair.command);

  return new CC_Button(button, commandVar);
}

/**
 * @param {MR_FactoryMappingPage} page
 * @param {MR_DeviceDriver} deviceDriver
 * @param {MR_Knob} knob
 * @param {CommandValuePair} commandValuePair
 */
 function createKnob(
  page,
  deviceDriver,
  knob,
  commandValuePair
) {
  const increase = commandValuePair.increasePair;
  const decrease = commandValuePair.decreasePair;

  var command1Var = deviceDriver.mSurface.makeCustomValueVariable(increase.variableName());
  var command2Var = deviceDriver.mSurface.makeCustomValueVariable(decrease.variableName());

  page.makeCommandBinding(command1Var, increase.category, increase.command);
  page.makeCommandBinding(command2Var, decrease.category, decrease.command);

  return new CC_Knob(knob, command1Var, command2Var);
}

/**
 * @param {MR_FactoryMappingPage} page
 * @param {MR_DeviceDriver} deviceDriver
 * @param {MR_Knob} knob
 * @param {string} commandCategory
 * @param {string} commandType1
 * @param {string} commandType2
 */
function createKnobExt(
  page,
  deviceDriver,
  knob,
  commandCategory,
  commandType1,
  commandType2
) {
  return createKnob(
    page,
    deviceDriver,
    knob,
    new CommandValuePair(new CommandPair(commandCategory, commandType1), new CommandPair(commandCategory, commandType2))
  );
}

/**
 * @param {MR_FactoryMappingPage} page
 * @param {MR_DeviceDriver} deviceDriver
 * @param {MR_Knob} knob
 * @param {CommandValuePair[]} commandArray
 * @returns {CC_Knob_MultiCommand}
 */
 function createKnobMultiCommand(page, deviceDriver, knob, commandArray) {
  /**
   * @type {CommandVariablePair[]}
   */
  var commands = [];

  // Create all the variables for the commands
  for (var i = 0; i < commandArray.length; i++) {
    const pair = commandArray[i];
    const increasePair = pair.increasePair;
    const decreasePair = pair.decreasePair;

    var commandVariablePair = new CommandVariablePair(
      deviceDriver.mSurface.makeCustomValueVariable(increasePair.variableName()),
      deviceDriver.mSurface.makeCustomValueVariable(decreasePair.variableName())
    );

    page.makeCommandBinding(commandVariablePair.increaseVar, increasePair.category, increasePair.command);
    page.makeCommandBinding(commandVariablePair.decreaseVar, decreasePair.category, decreasePair.command);

    commands.push(commandVariablePair);
  }

  return new CC_Knob_MultiCommand(knob, commands);
}

/**
 * Create knob 
 * @param {MR_FactoryMappingPage} page
 * @param {MR_DeviceDriver} deviceDriver
 * @param {MR_Knob} knob
 * @param {MR_Button} button
 * @param {CommandValuePair[]} commandArray
 */
function createKnobMultiCommandSwitch(page, deviceDriver, knob, button, commandArray) {
  const cc_knob_multi = createKnobMultiCommand(page, deviceDriver, knob, commandArray);

  function handleButtonPressed() {
    cc_knob_multi.changeCommand();
  }

  return new CC_Button_Event(button, handleButtonPressed);
}

/**
 * Create knob
 * @param {MR_FactoryMappingPage} page
 * @param {MR_DeviceDriver} deviceDriver
 * @param {MR_Knob} knob
 * @param {CommandValuePair} commandValue
 * @param {MR_Button} button
 * @param {CommandPair} commandPair
 */
 function createKnobCommandSwitch(page, deviceDriver, knob, commandValue, button, commandPair) {
  const cc_knob = createKnob(page, deviceDriver, knob, commandValue);
  const cc_button = createButton(page, deviceDriver, button, commandPair);
  return [cc_knob, cc_button];
}

module.exports = {
  createButton,
  createKnob,
  createKnobExt,
  createKnobCommandSwitch,
  createKnobMultiCommand,
  createKnobMultiCommandSwitch
};
