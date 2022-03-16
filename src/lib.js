// Project needs API to read types
var midiremote_api = require("midiremote_api_v1");

// Import command control
var CC_Knob = require("./command-controls/classes/CC_Knob");
var CC_Knob_MultiCommand = require("./command-controls/classes/CC_Knob_MultiCommand");
var CC_Button = require("./command-controls/classes/CC_Button");
var CC_Button_Event = require("./command-controls/classes/CC_Button_Event");
var command_controls = require("./command-controls/command_controls");

var CommandPair = require("./types/CommandPair");
var CommandValuePair = require("./types/CommandValuePair");
var CommandVariablePair = require("./types/CommandVariablePair");


module.exports = {
  types: {
    CommandPair,
    CommandValuePair,
    CommandVariablePair
  },
  command_controls: {
    classes: {
      CC_Knob,
      CC_Knob_MultiCommand,
      CC_Button,
      CC_Button_Event
    },
    createButton: command_controls.createButton,
    createKnob: command_controls.createKnob,
    createKnobExt: command_controls.createKnobExt,
    createKnobCommandSwitch: command_controls.createKnobCommandSwitch,
    createKnobMultiCommand: command_controls.createKnobMultiCommand,
    createKnobMultiCommandSwitch: command_controls.createKnobMultiCommandSwitch
  }
}
