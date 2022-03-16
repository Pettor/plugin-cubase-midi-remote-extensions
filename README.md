# Cubase Midi Remote Extensions

A Cubase Midi Remote library providing additional functions and controllers for Cubase Midi Remote. This file can be used within any device script to simplify creation of some more advanced controllers.


## What It Does

This library currently focus on providing easy ways to use knobs and buttons to send advanced commands to Cubase. For example you can use any knob to zoom in and out or move the transport cursor when turning it left and right. It's also possible to combine this with a button to change the amount of zoom or speed the cursor travels when button is pressed.


## Installation

Easiest way to start using this library is to simply download the Zip-file of the latest release.

Extract the content to a new folder in the `Device Scripts` directory (default location on Windows: `C:\Users\Name of User\Documents\Steinberg\Cubase\MIDI Remote\Driver Scripts`).

Preferably create a new directory for downloaded libraries e.g. `\Driver Scripts\.libs\`. Extract all the content of the Zip-file to the libs-folder. The structure should now look something like this:

`~\Documents\Steinberg\Cubase\MIDI Remote\Driver Scripts\.libs\cubase-midi-remote-extension\**content here**`

### Use as Git Repository 

It's also possible to simply clone the library to e.g. `~\Documents\Steinberg\Cubase\MIDI Remote\Driver Scripts\.libs` using `git clone https://github.com/Pettor/cubase-midi-remote-extensions.git`.


## Usage

From a device script import the library. Visual Studio Code should auto-complete any types and classes in the library.

```
var midiremote_api = require("midiremote_api_v1");

// Import lib
var lib = require("../.libs/cubase-midi-remote-extensions/lib");
```


### Zoom In / Out using Knob

To create a knob that zoom in and out when knob is turned simply type:

```
// Create knob just like you would normally do
var zoomKnob = deviceDriver.mSurface.makeKnob(0, 0, 1, 1);

// The library is intended for relative binary offset types
zoomKnob.mSurfaceValue.mMidiBinding
  .setInputPort(midiInput)
  .bindToControlChange(x, y)
  .setTypeRelativeBinaryOffset();

var page = deviceDriver.mMapping.makePage("Default");

// Create knob with simple commands
lib.command_controls.createKnob(
  page,
  deviceDriver,
  zoomKnob,
  new lib.types.CommandValuePair(
    new lib.types.CommandPair("Zoom", "Zoom In"),
    new lib.types.CommandPair("Zoom", "Zoom Out")
  )
);
```


### Zoom In / Out Knob with Reset 

If you have a controller knob with a combined button the `createKnobCommandSwitch` method will be useful. This controller takes a command for turning left / right and a command for a button. This can be useful for a knob that is used to zoom in / out and then reset zoom on button press:

```
// Create knob to zoom in / out
var zoomKnob = deviceDriver.mSurface.makeKnob(0, 0, 1, 1);
// Create button used to reset zoom
var zoomResetButton = deviceDriver.mSurface.makeButton(0, 1, 1, 1);

zoomKnob.mSurfaceValue.mMidiBinding
  .setInputPort(midiInput)
  .bindToControlChange(x1, y1)
  .setTypeRelativeBinaryOffset();

zoomResetButton.mSurfaceValue.mMidiBinding
  .setInputPort(midiInput)
  .bindToControlChange(x2, y2);

var page = deviceDriver.mMapping.makePage("Default");

// Create knob that can switch between commands an use a dedicated button to send another command.
lib.command_controls.createKnobCommandSwitch(
  page,
  deviceDriver,
  zoomKnob,
  new lib.types.CommandValuePair(
    new lib.types.CommandPair("Zoom", "Zoom In"),
    new lib.types.CommandPair("Zoom", "Zoom Out")
  ),
  zoomResetButton,
  new lib.types.CommandPair("Zoom", "Zoom Preset 1")
);
```


### Move Transport Cursor and Change Cursor Speed

Some commands have multiple command settings and can be useful to switch between. Moving the transport cursor is one such command where it's sometimes useful to move the cursor using the slow setting for precision and then switch to a fast setting to move quickly in the project. Switching between the speed is done using a button. This is usually best if the knob has a dedicated button but can of course be any button on the controller:

```
// Create knob used to change the cursor selection
var navigateKnob = deviceDriver.mSurface.makeKnob(0, 0, 1, 1);
// Create button used to change movement speed of cursor
var speedButton = deviceDriver.mSurface.makeButton(0, 1, 1, 1);

navigateKnob.mSurfaceValue.mMidiBinding
  .setInputPort(midiInput)
  .bindToControlChange(x1, y1)
  .setTypeRelativeBinaryOffset();

speedButton.mSurfaceValue.mMidiBinding
  .setInputPort(midiInput)
  .bindToControlChange(x2, y2);

var page = deviceDriver.mMapping.makePage("Default");

// Create knob with multiple commands and a button to switch between them
lib.command_controls.createKnobMultiCommandSwitch(
  page,
  deviceDriver,
  navigateKnob,
  speedButton,
  [
    new lib.types.CommandValuePair(
      new lib.types.CommandPair("Transport", "Nudge Cursor Left"),
      new lib.types.CommandPair("Transport", "Nudge Cursor Right")
    ),
    new lib.types.CommandValuePair(
      new lib.types.CommandPair("Transport", "Nudge Cursor -5 Seconds"),
      new lib.types.CommandPair("Transport", "Nudge Cursor +5 Seconds")
    ),
    new lib.types.CommandValuePair(
      new lib.types.CommandPair("Transport", "Nudge Cursor -10 Seconds"),
      new lib.types.CommandPair("Transport", "Nudge Cursor +10 Seconds")
    ),
  ]
);
```
