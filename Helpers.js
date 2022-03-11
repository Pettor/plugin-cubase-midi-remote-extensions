
/**
 * @param {MR_FactoryMappingPage} page
 * @param {MR_DeviceDriver} deviceDriver 
 * @param {MR_Knob} knob
 * @param {MR_Button} button
 * @param {string} commandArray
 */

 function createCommandKnobWithButton(page, deviceDriver, knob, button, commandArray) {
  
  var stateModule = (function () {
    var knobModule;
    var buttonModule;

    var pub = {};

    pub.init = function() {
      var command1Variable = deviceDriver.mSurface.makeCustomValueVariable(`customValue_${commandCategory1}_${commandType1}`);
      var command2Variable = deviceDriver.mSurface.makeCustomValueVariable(`customValue_${commandCategory2}_${commandType2}`);
      var command3Variable = deviceDriver.mSurface.makeCustomValueVariable(`customValue_${commandCategory3}_${commandType3}`);

      page.makeCommandBinding(command1Variable, commandCategory1, commandType1)
      page.makeCommandBinding(command2Variable, commandCategory2, commandType2)

      knobModule = createCommandKnobModule(knob, command1Variable, command2Variable);
    }

    return pub;
  }());

  stateModule.init();
}

/**
 * @param {MR_FactoryMappingPage} page
 * @param {MR_DeviceDriver} deviceDriver
 * @param {MR_Knob} knob
 * @param {string} commandCategory
 * @param {string} commandType1
 * @param {string} commandType2
 */

 function createCommandKnobCategory(page, deviceDriver, knob, commandCategory, commandType1, commandType2) {
   return createCommandKnobMultiCategory(page, deviceDriver, knob, commandCategory, commandType1, commandCategory, commandType2)
 }

/**
 * @param {MR_FactoryMappingPage} page
 * @param {MR_DeviceDriver} deviceDriver
 * @param {MR_Knob} knob
 * @param {string} commandCategory1
 * @param {string} commandType1
 * @param {string} commandCategory2
 * @param {string} commandType2
 */

function createCommandKnobMultiCategory(page, deviceDriver, knob, commandCategory1, commandType1, commandCategory2, commandType2) {
  var stateModule = (function() {
    var knobModule;

    var pub = {}

    pub.init = function() {
      var command1Variable = deviceDriver.mSurface.makeCustomValueVariable(`customValue_${commandCategory1}_${commandType1}`);
      var command2Variable = deviceDriver.mSurface.makeCustomValueVariable(`customValue_${commandCategory2}_${commandType2}`);

      page.makeCommandBinding(command1Variable, commandCategory1, commandType1)
      page.makeCommandBinding(command2Variable, commandCategory2, commandType2)

      knobModule = createCommandKnobModule(knob, command1Variable, command2Variable);
    }

    return pub;
  }());

  stateModule.init();
}


/**
 * @param {MR_Knob} knob
 * @param {MR_SurfaceCustomValueVariable} defaultCommand1
 * @param {MR_SurfaceCustomValueVariable} defaultCommand2
 */

function createCommandKnobModule(knob, defaultCommand1, defaultCommand2) {
  var stateModule = (function() {
    var command1;
    var command2;

    var pub = {}

    pub.init = function() {
      command1 = defaultCommand1;
      command2 = defaultCommand2;

      knob.mSurfaceValue.mOnProcessValueChange = function(activeDevice, value) {
        if(value === 0 ) {
          command1.setProcessValue(activeDevice, 1)
        } else if (value === 1) {
          command2.setProcessValue(activeDevice, 1)
        } else {
          console.log("value is not 0 or 1 - make sure to use relative knob with binary offset");
        }
      }
    }

    pub.changeCommand = function(/** @type {MR_SurfaceCustomValueVariable} */ newCommand1, /** @type {MR_SurfaceCustomValueVariable} */ newCommand2) {
      command1 = newCommand1;
      command2 = newCommand2;
    }

    return pub;
  }());

  stateModule.init();
  return stateModule;
}

/**
 * @param {MR_Button} button
 * @param {MR_SurfaceCustomValueVariable} defaultCommand
 * @param {() => void} onButtonPressed
 */

 function createCommandButtonModule(button, defaultCommand, onButtonPressed) {
  var stateModule = (function() {
    var command;

    var pub = {}

    pub.init = function() {
      command = defaultCommand;

      button.mSurfaceValue.mOnProcessValueChange = function(activeDevice) {
        onButtonPressed();
        defaultCommand.setProcessValue(activeDevice, 1);
      }
    }

    pub.changeCommand = function(/** @type {MR_SurfaceCustomValueVariable} */ newCommand) {
      command = newCommand;
    }

    return pub;
  }());

  stateModule.init();
  return stateModule;
}


export default {
  createCommandButtonModule,
  createCommandKnobModule,
  createCommandKnobCategory,
  createCommandKnobMultiCategory,
  createCommandKnobWithButton
};
