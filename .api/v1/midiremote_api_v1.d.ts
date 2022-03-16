/**
 * @class MR_MidiRemoteAPI
 * Entry point to the **MIDI Remote API**.
 * @example
 * var midiremote_api = require('midiremote_api_v1')
 */
class MR_MidiRemoteAPI {
	mDefaults: MR_HostDefaults;
	constructor() {
	}
	
	/**
	 * Represents specific hardware device.
	 * @example
	 * var deviceDriver = midiremote_api.makeDeviceDriver('ExampleCompany', 'SimpleDevice', 'Steinberg Media Technologies GmbH')
	 * @param {string} vendorName
	 * @param {string} deviceName
	 * @param {string} createdBy
	 * @returns {MR_DeviceDriver}
	 */
	makeDeviceDriver (vendorName: string, deviceName: string, createdBy: string): MR_DeviceDriver
	{
		return new MR_DeviceDriver
	}
}

/**
 * @typedef Integer
 * @type {number}
 */

/**
 * @typedef Text
 * @type {string}
 */

/**
 * @typedef Scalar
 * @type {number}
 */

/**
 * @typedef Bool
 * @type {boolean}
 */

/**
 * @typedef Byte
 * @type {number}
 */

/**
 * @typedef Uuid
 * @type {string}
 */

/**
 * @typedef Size
 * @type {number}
 */

/**
 * @typedef Index
 * @type {number}
 */

/**
 * @typedef Name
 * @type {string}
 */

/**
 * @typedef MidiMessage
 * @type {number[]}
 */

/**
 * @typedef HostObjectClassID
 * @type {string}
 */

/**
 * @typedef HostObjectPath
 * @type {string}
 */

/**
 * @typedef HostValueTag
 * @type {number}
 */

/**
 * @class MR_HostDefaults
 */
class MR_HostDefaults {
	constructor() {
	}
	
	/**
	 * @returns {string}
	 */
	getAppName (): string
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getNumberOfInsertEffectSlots (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getNumberOfStripEffectSlots (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getNumberOfSendSlots (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getNumberOfQuickControls (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxControlRoomTalkbackChannels (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxControlRoomExternalInputChannels (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxControlRoomCueChannels (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxControlRoomPhonesChannels (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxControlRoomMonitorChannels (): number
	{
		
	}
}

/**
 * @class MR_ActiveDevice
 * Represents a detected and activated device of a specific [DeviceDriver](#devicedriver).
 */
class MR_ActiveDevice {
	constructor() {
	}
	
	/**
	 * @param {string} key
	 * @param {string} val
	 */
	setState (key: string, val: string): void
	{
		
	}
	
	/**
	 * @param {string} key
	 * @returns {string}
	 */
	getState (key: string): string
	{
		
	}
}

/**
 * @class MR_ActiveMapping
 */
class MR_ActiveMapping {
	constructor() {
	}
	
}

/**
 * @class MR_HostAction
 */
class MR_HostAction {
	constructor() {
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (activeMapping: MR_ActiveMapping): void
	{
		
	}
}

/**
 * @class MR_MixerBankZoneAction
 * @augments MR_HostAction
 */
class MR_MixerBankZoneAction extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (activeMapping: MR_ActiveMapping): void
	{
		
	}
}

/**
 * @class MR_TrackSelectionAction
 * @augments MR_HostAction
 */
class MR_TrackSelectionAction extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (activeMapping: MR_ActiveMapping): void
	{
		
	}
}

/**
 * @class MR_SubPageActionActivate
 * @augments MR_HostAction
 */
class MR_SubPageActionActivate extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (activeMapping: MR_ActiveMapping): void
	{
		
	}
}

/**
 * @class MR_SubPageAreaAction
 * @augments MR_HostAction
 */
class MR_SubPageAreaAction extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (activeMapping: MR_ActiveMapping): void
	{
		
	}
}

/**
 * @class MR_MappingPageActionActivate
 * @augments MR_HostAction
 */
class MR_MappingPageActionActivate extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (activeMapping: MR_ActiveMapping): void
	{
		
	}
}

/**
 * @class MR_DeviceDriverAction
 * @augments MR_HostAction
 */
class MR_DeviceDriverAction extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (activeMapping: MR_ActiveMapping): void
	{
		
	}
}

/**
 * @class MR_DeviceDriver
 * Represents specific hardware device.
 * @example
 * var deviceDriver = midiremote_api.makeDeviceDriver('ExampleCompany', 'SimpleDevice', 'Steinberg Media Technologies GmbH')
 */
class MR_DeviceDriver {
	mPorts: MR_Ports;
	mSurface: MR_DeviceSurface;
	mMapping: MR_FactoryMapping;
	mAction: MR_DeviceDriverActions;
	mOnActivate: function (MR_ActiveDevice): void;
	mOnDeactivate: function (MR_ActiveDevice): void;
	constructor() {
	}
	
	/**
	 * Define device auto detection.
	 * @example
	 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
	 *     .expectInputNameEquals('SimpleDevice IN')
	 *     .expectOutputNameEquals('SimpleDevice OUT')
	 *     
	 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
	 *     .expectInputNameEquals('SimpleDevice (MIDI IN)')
	 *     .expectOutputNameEquals('SimpleDevice (MIDI OUT)')
	 * 
	 * @returns {MR_DeviceDetectionUnit}
	 */
	makeDetectionUnit (): MR_DeviceDetectionUnit
	{
		return new MR_DeviceDetectionUnit
	}
	
	/**
	 * @param {string} fileName
	 * @param {number} delayInMilliseconds
	 * @returns {MR_InitialSysexFile}
	 */
	setInitialSysexFile (fileName: string, delayInMilliseconds: number): MR_InitialSysexFile
	{
		return new MR_InitialSysexFile
	}
	
	/**
	 * @param {string} fileName
	 * @returns {MR_UserGuide}
	 */
	setUserGuide (fileName: string): MR_UserGuide
	{
		return new MR_UserGuide
	}
}

/**
 * @callback OnActivate
 * @param {MR_ActiveDevice} activeDevice

/**
 * @callback OnDeactivate
 * @param {MR_ActiveDevice} activeDevice

/**
 * @class MR_Ports
 * Device driver sub section for creating midi port objects.
 * @example
 * var midiInput = deviceDriver.mPorts.makeMidiInput()
 * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
 */
class MR_Ports {
	constructor() {
	}
	
	/**
	 * Device driver MIDI input port.
	 * @example
	 * var midiInput = deviceDriver.mPorts.makeMidiInput()
	 * @param {string} name
	 * @returns {MR_DeviceMidiInput}
	 */
	makeMidiInput (name: string = ''): MR_DeviceMidiInput
	{
		return new MR_DeviceMidiInput
	}
	
	/**
	 * Device driver MIDI output port.
	 * @example
	 * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
	 * @param {string} name
	 * @returns {MR_DeviceMidiOutput}
	 */
	makeMidiOutput (name: string = ''): MR_DeviceMidiOutput
	{
		return new MR_DeviceMidiOutput
	}
}

/**
 * @class MR_DeviceMidiInput
 * Device driver MIDI input port.
 * @example
 * var midiInput = deviceDriver.mPorts.makeMidiInput()
 */
class MR_DeviceMidiInput {
	mOnSysex: function (MR_ActiveDevice, MidiMessage): void;
	constructor() {
	}
	
}

/**
 * @callback OnSysex
 * @param {MR_ActiveDevice} activeDevice
 * @param {MidiMessage} message

/**
 * @class MR_DeviceMidiOutput
 * Device driver MIDI output port.
 * @example
 * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
 */
class MR_DeviceMidiOutput {
	constructor() {
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {MidiMessage} message
	 */
	sendMidi (activeDevice: MR_ActiveDevice, message: MidiMessage): void
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {string} fileName
	 * @param {number} delayMilliseconds
	 */
	sendSysexFile (activeDevice: MR_ActiveDevice, fileName: string, delayMilliseconds: number): void
	{
		
	}
}

/**
 * @class MR_DeviceSurface
 * Emulates hardware surface elements.
 * @example
 * var knob1 = deviceDriver.mSurface.makeKnob(0, 0, 1, 1.5)
 * var knob2 = deviceDriver.mSurface.makeKnob(1, 0, 1, 1.5)
 * var knob3 = deviceDriver.mSurface.makeKnob(2, 0, 1, 1.5)
 * var knob4 = deviceDriver.mSurface.makeKnob(3, 0, 1, 1.5)
 * 
 * // bind midi ports to surface elements
 */
class MR_DeviceSurface {
	constructor() {
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_PushEncoder}
	 */
	makePushEncoder (x: number, y: number, w: number, h: number): MR_PushEncoder
	{
		return new MR_PushEncoder
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_Knob}
	 */
	makeKnob (x: number, y: number, w: number, h: number): MR_Knob
	{
		return new MR_Knob
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_Fader}
	 */
	makeFader (x: number, y: number, w: number, h: number): MR_Fader
	{
		return new MR_Fader
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_Button}
	 */
	makeButton (x: number, y: number, w: number, h: number): MR_Button
	{
		return new MR_Button
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_ModWheel}
	 */
	makeModWheel (x: number, y: number, w: number, h: number): MR_ModWheel
	{
		return new MR_ModWheel
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_PitchBend}
	 */
	makePitchBend (x: number, y: number, w: number, h: number): MR_PitchBend
	{
		return new MR_PitchBend
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_TriggerPad}
	 */
	makeTriggerPad (x: number, y: number, w: number, h: number): MR_TriggerPad
	{
		return new MR_TriggerPad
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_PadXY}
	 */
	makePadXY (x: number, y: number, w: number, h: number): MR_PadXY
	{
		return new MR_PadXY
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_JoyStickXY}
	 */
	makeJoyStickXY (x: number, y: number, w: number, h: number): MR_JoyStickXY
	{
		return new MR_JoyStickXY
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_Lamp}
	 */
	makeLamp (x: number, y: number, w: number, h: number): MR_Lamp
	{
		return new MR_Lamp
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_BlindPanel}
	 */
	makeBlindPanel (x: number, y: number, w: number, h: number): MR_BlindPanel
	{
		return new MR_BlindPanel
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @param {number} firstKeyIndex
	 * @param {number} lastKeyIndex
	 * @returns {MR_PianoKeys}
	 */
	makePianoKeys (x: number, y: number, w: number, h: number, firstKeyIndex: number, lastKeyIndex: number): MR_PianoKeys
	{
		return new MR_PianoKeys
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_SurfaceLabelField}
	 */
	makeLabelField (x: number, y: number, w: number, h: number): MR_SurfaceLabelField
	{
		return new MR_SurfaceLabelField
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_ControlLayerZone}
	 */
	makeControlLayerZone (name: string): MR_ControlLayerZone
	{
		return new MR_ControlLayerZone
	}
	
	/**
	 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
	 * @param {string} name
	 * @returns {MR_SurfaceCustomValueVariable}
	 */
	makeCustomValueVariable (name: string): MR_SurfaceCustomValueVariable
	{
		return new MR_SurfaceCustomValueVariable
	}
}

/**
 * @class MR_SurfaceElement
 */
class MR_SurfaceElement {
	constructor() {
	}
	
}

/**
 * @class MR_PushEncoder
 * @augments MR_SurfaceElement
 */
class MR_PushEncoder extends MR_SurfaceElement {
	mEncoderValue: MR_SurfaceElementValue;
	mPushValue: MR_SurfaceElementValue;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_PushEncoder}
	 */
	setControlLayer (controlLayer: MR_ControlLayer): MR_PushEncoder
	{
		return this
	}
}

/**
 * @class MR_Knob
 * @augments MR_SurfaceElement
 */
class MR_Knob extends MR_SurfaceElement {
	mSurfaceValue: MR_SurfaceElementValue;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_Knob}
	 */
	setControlLayer (controlLayer: MR_ControlLayer): MR_Knob
	{
		return this
	}
}

/**
 * @class MR_Fader
 * @augments MR_SurfaceElement
 */
class MR_Fader extends MR_SurfaceElement {
	mSurfaceValue: MR_SurfaceElementValue;
	constructor() {
		super()
	}
	
	/**
	 * @returns {MR_Fader}
	 */
	setTypeVertical (): MR_Fader
	{
		return this
	}
	
	/**
	 * @returns {MR_Fader}
	 */
	setTypeHorizontal (): MR_Fader
	{
		return this
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_Fader}
	 */
	setControlLayer (controlLayer: MR_ControlLayer): MR_Fader
	{
		return this
	}
}

/**
 * @class MR_Button
 * @augments MR_SurfaceElement
 */
class MR_Button extends MR_SurfaceElement {
	mSurfaceValue: MR_SurfaceElementValue;
	constructor() {
		super()
	}
	
	/**
	 * @returns {MR_Button}
	 */
	setTypePush (): MR_Button
	{
		return this
	}
	
	/**
	 * @returns {MR_Button}
	 */
	setTypeToggle (): MR_Button
	{
		return this
	}
	
	/**
	 * @returns {MR_Button}
	 */
	setShapeRectangle (): MR_Button
	{
		return this
	}
	
	/**
	 * @returns {MR_Button}
	 */
	setShapeCircle (): MR_Button
	{
		return this
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_Button}
	 */
	setControlLayer (controlLayer: MR_ControlLayer): MR_Button
	{
		return this
	}
}

/**
 * @class MR_ModWheel
 * @augments MR_SurfaceElement
 */
class MR_ModWheel extends MR_SurfaceElement {
	mSurfaceValue: MR_SurfaceElementValue;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_ModWheel}
	 */
	setControlLayer (controlLayer: MR_ControlLayer): MR_ModWheel
	{
		return this
	}
}

/**
 * @class MR_PitchBend
 * @augments MR_SurfaceElement
 */
class MR_PitchBend extends MR_SurfaceElement {
	mSurfaceValue: MR_SurfaceElementValue;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_PitchBend}
	 */
	setControlLayer (controlLayer: MR_ControlLayer): MR_PitchBend
	{
		return this
	}
}

/**
 * @class MR_TriggerPad
 * @augments MR_SurfaceElement
 */
class MR_TriggerPad extends MR_SurfaceElement {
	mSurfaceValue: MR_SurfaceElementValue;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_TriggerPad}
	 */
	setControlLayer (controlLayer: MR_ControlLayer): MR_TriggerPad
	{
		return this
	}
}

/**
 * @class MR_PadXY
 * @augments MR_SurfaceElement
 */
class MR_PadXY extends MR_SurfaceElement {
	mX: MR_SurfaceElementValue;
	mY: MR_SurfaceElementValue;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_PadXY}
	 */
	setControlLayer (controlLayer: MR_ControlLayer): MR_PadXY
	{
		return this
	}
}

/**
 * @class MR_JoyStickXY
 * @augments MR_SurfaceElement
 */
class MR_JoyStickXY extends MR_SurfaceElement {
	mX: MR_SurfaceElementValue;
	mY: MR_SurfaceElementValue;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_JoyStickXY}
	 */
	setControlLayer (controlLayer: MR_ControlLayer): MR_JoyStickXY
	{
		return this
	}
}



/**
 * @class MR_Lamp
 * @augments MR_SurfaceElement
 */
class MR_Lamp extends MR_SurfaceElement {
	mSurfaceValue: MR_SurfaceElementValue;
	constructor() {
		super()
	}
	
	/**
	 * @returns {MR_Lamp}
	 */
	setShapeRectangle (): MR_Lamp
	{
		return this
	}
	
	/**
	 * @returns {MR_Lamp}
	 */
	setShapeCircle (): MR_Lamp
	{
		return this
	}
}

/**
 * @class MR_BlindPanel
 * @augments MR_SurfaceElement
 */
class MR_BlindPanel extends MR_SurfaceElement {
	constructor() {
		super()
	}
	
	/**
	 * @returns {MR_BlindPanel}
	 */
	setShapeRectangle (): MR_BlindPanel
	{
		return this
	}
	
	/**
	 * @returns {MR_BlindPanel}
	 */
	setShapeCircle (): MR_BlindPanel
	{
		return this
	}
}

/**
 * @class MR_PianoKeys
 * @augments MR_SurfaceElement
 */
class MR_PianoKeys extends MR_SurfaceElement {
	constructor() {
		super()
	}
	
}

/**
 * @class MR_SurfaceLabelField
 */
class MR_SurfaceLabelField {
	constructor() {
	}
	
	/**
	 * @param {MR_SurfaceElement} surfaceElement
	 * @returns {MR_SurfaceLabelField}
	 */
	relateTo (surfaceElement: MR_SurfaceElement): MR_SurfaceLabelField
	{
		return new MR_SurfaceLabelField
	}
}

/**
 * @class MR_ControlLayerZone
 */
class MR_ControlLayerZone {
	constructor() {
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_ControlLayer}
	 */
	makeControlLayer (name: string): MR_ControlLayer
	{
		return new MR_ControlLayer
	}
}

/**
 * @class MR_ControlLayer
 */
class MR_ControlLayer {
	constructor() {
	}
	
}




/**
 * @class MR_SurfaceValue
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 */
class MR_SurfaceValue {
	
	constructor() {
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {number} value
	 */
	setProcessValue (activeDevice: MR_ActiveDevice, value: number): void
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @returns {number}
	 */
	getProcessValue (activeDevice: MR_ActiveDevice): number
	{
		
	}
}

/**
 * @class MR_SurfaceElementValue
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 * @augments MR_SurfaceValue
 */
class MR_SurfaceElementValue extends MR_SurfaceValue {
	mMidiBinding: MR_SurfaceValueMidiBinding;
	mOnProcessValueChange: function (MR_ActiveDevice, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {number} value
	 */
	setProcessValue (activeDevice: MR_ActiveDevice, value: number): void
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @returns {number}
	 */
	getProcessValue (activeDevice: MR_ActiveDevice): number
	{
		
	}
}

/**
 * @class MR_SurfaceCustomValueVariable
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 * @augments MR_SurfaceValue
 */
class MR_SurfaceCustomValueVariable extends MR_SurfaceValue {
	mMidiBinding: MR_SurfaceValueMidiBinding;
	mOnProcessValueChange: function (MR_ActiveDevice, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {number} value
	 */
	setProcessValue (activeDevice: MR_ActiveDevice, value: number): void
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @returns {number}
	 */
	getProcessValue (activeDevice: MR_ActiveDevice): number
	{
		
	}
}

/**
 * @class MR_SurfaceValueMidiBinding
 */
class MR_SurfaceValueMidiBinding {
	constructor() {
	}
	
	/**
	 * @param {MR_DeviceMidiInput} inputPort
	 * @returns {MR_SurfaceValueMidiBinding}
	 */
	setInputPort (inputPort: MR_DeviceMidiInput): MR_SurfaceValueMidiBinding
	{
		return this
	}
	
	/**
	 * @param {MR_DeviceMidiOutput} outputPort
	 * @returns {MR_SurfaceValueMidiBinding}
	 */
	setOutputPort (outputPort: MR_DeviceMidiOutput): MR_SurfaceValueMidiBinding
	{
		return this
	}
	
	/**
	 * @param {boolean} isConsuming
	 * @returns {MR_SurfaceValueMidiBinding}
	 */
	setIsConsuming (isConsuming: boolean): MR_SurfaceValueMidiBinding
	{
		return this
	}
	
	/**
	 * @param {number} channelNumber
	 * @param {number} pitch
	 * @returns {MR_MidiBindingToNote}
	 */
	bindToNote (channelNumber: number, pitch: number): MR_MidiBindingToNote
	{
		return new MR_MidiBindingToNote
	}
	
	/**
	 * @param {number} channelNumber
	 * @param {number} controlChangeNumber
	 * @returns {MR_MidiBindingToControlChange}
	 */
	bindToControlChange (channelNumber: number, controlChangeNumber: number): MR_MidiBindingToControlChange
	{
		return new MR_MidiBindingToControlChange
	}
	
	/**
	 * @param {number} channelNumber
	 * @param {number} controlChangeNumber
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	bindToControlChange14Bit (channelNumber: number, controlChangeNumber: number): MR_MidiBindingToControlChange14Bit
	{
		return new MR_MidiBindingToControlChange14Bit
	}
	
	/**
	 * @param {number} channelNumber
	 * @param {number} controlChangeNumber
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	bindToControlChange14BitNRPN (channelNumber: number, controlChangeNumber: number): MR_MidiBindingToControlChange14BitNRPN
	{
		return new MR_MidiBindingToControlChange14BitNRPN
	}
	
	/**
	 * @param {number} channelNumber
	 * @returns {MR_MidiBindingToPitchBend}
	 */
	bindToPitchBend (channelNumber: number): MR_MidiBindingToPitchBend
	{
		return new MR_MidiBindingToPitchBend
	}
	
	/**
	 * @param {number} channelNumber
	 * @returns {MR_MidiBindingToChannelPressure}
	 */
	bindToChannelPressure (channelNumber: number): MR_MidiBindingToChannelPressure
	{
		return new MR_MidiBindingToChannelPressure
	}
}

/**
 * @class MR_MidiBindingValueRange7Bit
 */
class MR_MidiBindingValueRange7Bit {
	constructor() {
	}
	
}

/**
 * @class MR_MidiBindingValueRange14Bit
 */
class MR_MidiBindingValueRange14Bit {
	constructor() {
	}
	
}

/**
 * @class MR_MidiChannelBinding
 */
class MR_MidiChannelBinding {
	constructor() {
	}
	
}

/**
 * @class MR_MidiBindingToNote
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToNote extends MR_MidiChannelBinding {
	constructor() {
		super()
	}
	
	/**
	 * @param {number} min
	 * @param {number} max
	 * @returns {MR_MidiBindingToNote}
	 */
	setValueRange (min: number, max: number): MR_MidiBindingToNote
	{
		return new MR_MidiBindingToNote
	}
}

/**
 * @class MR_MidiBindingToControlChange
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToControlChange extends MR_MidiChannelBinding {
	constructor() {
		super()
	}
	
	/**
	 * @param {number} min
	 * @param {number} max
	 * @returns {MR_MidiBindingToControlChange}
	 */
	setValueRange (min: number, max: number): MR_MidiBindingToControlChange
	{
		return new MR_MidiBindingToControlChange
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange}
	 */
	setTypeAbsolute (): MR_MidiBindingToControlChange
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange}
	 */
	setTypeRelativeSignedBit (): MR_MidiBindingToControlChange
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange}
	 */
	setTypeRelativeBinaryOffset (): MR_MidiBindingToControlChange
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange}
	 */
	setTypeRelativeTwosComplement (): MR_MidiBindingToControlChange
	{
		return this
	}
}

/**
 * @class MR_MidiBindingToControlChange14Bit
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToControlChange14Bit extends MR_MidiChannelBinding {
	constructor() {
		super()
	}
	
	/**
	 * @param {number} min
	 * @param {number} max
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	setValueRange (min: number, max: number): MR_MidiBindingToControlChange14Bit
	{
		return new MR_MidiBindingToControlChange14Bit
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	setTypeAbsolute (): MR_MidiBindingToControlChange14Bit
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	setTypeRelativeSignedBit (): MR_MidiBindingToControlChange14Bit
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	setTypeRelativeBinaryOffset (): MR_MidiBindingToControlChange14Bit
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	setTypeRelativeTwosComplement (): MR_MidiBindingToControlChange14Bit
	{
		return this
	}
}

/**
 * @class MR_MidiBindingToControlChange14BitNRPN
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToControlChange14BitNRPN extends MR_MidiChannelBinding {
	constructor() {
		super()
	}
	
	/**
	 * @param {number} min
	 * @param {number} max
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	setValueRange (min: number, max: number): MR_MidiBindingToControlChange14BitNRPN
	{
		return new MR_MidiBindingToControlChange14BitNRPN
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	setTypeAbsolute (): MR_MidiBindingToControlChange14BitNRPN
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	setTypeRelativeSignedBit (): MR_MidiBindingToControlChange14BitNRPN
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	setTypeRelativeBinaryOffset (): MR_MidiBindingToControlChange14BitNRPN
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	setTypeRelativeTwosComplement (): MR_MidiBindingToControlChange14BitNRPN
	{
		return this
	}
}

/**
 * @class MR_MidiBindingToPitchBend
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToPitchBend extends MR_MidiChannelBinding {
	mValueRange: MR_MidiBindingValueRange14Bit;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_MidiBindingToChannelPressure
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToChannelPressure extends MR_MidiChannelBinding {
	mValueRange: MR_MidiBindingValueRange7Bit;
	constructor() {
		super()
	}
	
}


/**
 * @callback SurfaceValueOnProcessValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {number} value

/**
 * @callback SurfaceValueOnDisplayValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {string} value
 * @param {string} units

/**
 * @callback SurfaceValueOnTitleChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {string} objectTitle
 * @param {string} valueTitle

/**
 * @callback SurfaceValueOnColorChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} isActive




/**
 * @class MR_Mapping
 */
class MR_Mapping {
	constructor() {
	}
	
}

/**
 * @class MR_FactoryMapping
 * @augments MR_Mapping
 */
class MR_FactoryMapping extends MR_Mapping {
	constructor() {
		super()
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_FactoryMappingPage}
	 */
	makePage (name: string): MR_FactoryMappingPage
	{
		return new MR_FactoryMappingPage
	}
}

/**
 * @class MR_Page
 */
class MR_Page {
	
	constructor() {
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {MR_HostValue} hostValue
	 * @returns {MR_ValueBinding}
	 */
	makeValueBinding (surfaceValue: MR_SurfaceValue, hostValue: MR_HostValue): MR_ValueBinding
	{
		return new MR_ValueBinding
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {string} commandCategory
	 * @param {string} commandName
	 * @returns {MR_CommandBinding}
	 */
	makeCommandBinding (surfaceValue: MR_SurfaceValue, commandCategory: string, commandName: string): MR_CommandBinding
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {MR_HostAction} hostAction
	 * @returns {MR_ActionBinding}
	 */
	makeActionBinding (surfaceValue: MR_SurfaceValue, hostAction: MR_HostAction): MR_ActionBinding
	{
		return new MR_ActionBinding
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_SubPageArea}
	 */
	makeSubPageArea (name: string): MR_SubPageArea
	{
		return new MR_SubPageArea
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {string} text
	 * @returns {MR_Page}
	 */
	setLabelFieldText (surfaceLabelField: MR_SurfaceLabelField, text: string): MR_Page
	{
		return null
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {MR_HostObject} hostObject
	 * @returns {MR_Page}
	 */
	setLabelFieldHostObject (surfaceLabelField: MR_SurfaceLabelField, hostObject: MR_HostObject): MR_Page
	{
		return null
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {MR_SubPageArea} subPageArea
	 * @returns {MR_Page}
	 */
	setLabelFieldSubPageArea (surfaceLabelField: MR_SurfaceLabelField, subPageArea: MR_SubPageArea): MR_Page
	{
		return null
	}
}

/**
 * @class MR_FactoryMappingPage
 * @augments MR_Page
 */
class MR_FactoryMappingPage extends MR_Page {
	mHostAccess: MR_HostAccess;
	mOnActivate: function (MR_ActiveDevice): void;
	mAction: MR_MappingPageActions;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {MR_HostValue} hostValue
	 * @returns {MR_ValueBinding}
	 */
	makeValueBinding (surfaceValue: MR_SurfaceValue, hostValue: MR_HostValue): MR_ValueBinding
	{
		return new MR_ValueBinding
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {string} commandCategory
	 * @param {string} commandName
	 * @returns {MR_CommandBinding}
	 */
	makeCommandBinding (surfaceValue: MR_SurfaceValue, commandCategory: string, commandName: string): MR_CommandBinding
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {MR_HostAction} hostAction
	 * @returns {MR_ActionBinding}
	 */
	makeActionBinding (surfaceValue: MR_SurfaceValue, hostAction: MR_HostAction): MR_ActionBinding
	{
		return new MR_ActionBinding
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_SubPageArea}
	 */
	makeSubPageArea (name: string): MR_SubPageArea
	{
		return new MR_SubPageArea
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {string} text
	 * @returns {MR_FactoryMappingPage}
	 */
	setLabelFieldText (surfaceLabelField: MR_SurfaceLabelField, text: string): MR_FactoryMappingPage
	{
		return new MR_FactoryMappingPage
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {MR_HostObject} hostObject
	 * @returns {MR_FactoryMappingPage}
	 */
	setLabelFieldHostObject (surfaceLabelField: MR_SurfaceLabelField, hostObject: MR_HostObject): MR_FactoryMappingPage
	{
		return new MR_FactoryMappingPage
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {MR_SubPageArea} subPageArea
	 * @returns {MR_FactoryMappingPage}
	 */
	setLabelFieldSubPageArea (surfaceLabelField: MR_SurfaceLabelField, subPageArea: MR_SubPageArea): MR_FactoryMappingPage
	{
		return new MR_FactoryMappingPage
	}
}

/**
 * @class MR_HostAccess
 * Provides objects and methods to bind the defined Surface to host functions.
 * @example
 * var hostSelectedTrackChannel = page.mHostAccess.mTrackSelection.mMixerChannel
 */
class MR_HostAccess {
	mTransport: MR_HostTransport;
	mMixConsole: MR_MixConsole;
	mControlRoom: MR_HostControlRoom;
	mTrackSelection: MR_TrackSelection;
	mMouseCursor: MR_HostMouseCursor;
	mFocusedQuickControls: MR_FocusedQuickControls;
	constructor() {
	}
	
}

/**
 * @class MR_HostObject
 */
class MR_HostObject {
	constructor() {
	}
	
}

/**
 * @class MR_HostTransport
 * Access transport functions.
 * @augments MR_HostObject
 */
class MR_HostTransport extends MR_HostObject {
	mValue: MR_TransportValues;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_QuickControls
 * @augments MR_HostObject
 */
class MR_QuickControls extends MR_HostObject {
	constructor() {
		super()
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_QuickControlValue}
	 */
	getByIndex (index: number): MR_QuickControlValue
	{
		return new MR_QuickControlValue
	}
	
	/**
	 * @returns {number}
	 */
	getSize (): number
	{
		
	}
}

/**
 * @class MR_FocusedQuickControls
 * @augments MR_HostObject
 */
class MR_FocusedQuickControls extends MR_HostObject {
	mFocusLockedValue: MR_FocusedQuickControlsLockedStateValue;
	constructor() {
		super()
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_QuickControlValue}
	 */
	getByIndex (index: number): MR_QuickControlValue
	{
		return new MR_QuickControlValue
	}
	
	/**
	 * @returns {number}
	 */
	getSize (): number
	{
		
	}
}

/**
 * @class MR_SendSlotFolder
 * @augments MR_HostObject
 */
class MR_SendSlotFolder extends MR_HostObject {
	constructor() {
		super()
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_SendSlot}
	 */
	getByIndex (index: number): MR_SendSlot
	{
		return new MR_SendSlot
	}
	
	/**
	 * @returns {number}
	 */
	getSize (): number
	{
		
	}
}

/**
 * @class MR_ControlRoomCueSendSlotFolder
 * @augments MR_HostObject
 */
class MR_ControlRoomCueSendSlotFolder extends MR_HostObject {
	mBypass: MR_ControlRoomCueSendFolderBypassValue;
	constructor() {
		super()
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_ControlRoomCueSendSlot}
	 */
	getByIndex (index: number): MR_ControlRoomCueSendSlot
	{
		return new MR_ControlRoomCueSendSlot
	}
	
	/**
	 * @returns {number}
	 */
	getSize (): number
	{
		
	}
}

/**
 * @class MR_MixerBankChannel
 * @augments MR_HostObject
 */
class MR_MixerBankChannel extends MR_HostObject {
	mValue: MR_MixerChannelValues;
	mPreFilter: MR_PreFilter;
	mChannelEQ: MR_ChannelEQ;
	mSends: MR_SendSlotFolder;
	mCueSends: MR_ControlRoomCueSendSlotFolder;
	mQuickControls: MR_QuickControls;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_SelectedTrackChannel
 * @augments MR_HostObject
 */
class MR_SelectedTrackChannel extends MR_HostObject {
	mValue: MR_MixerChannelValues;
	mPreFilter: MR_PreFilter;
	mChannelEQ: MR_ChannelEQ;
	mSends: MR_SendSlotFolder;
	mCueSends: MR_ControlRoomCueSendSlotFolder;
	mQuickControls: MR_QuickControls;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostMouseCursor
 * @augments MR_HostObject
 */
class MR_HostMouseCursor extends MR_HostObject {
	mValueUnderMouse: MR_HostValueAtMouseCursor;
	mValueLocked: MR_HostValueAtMouseCursorLockedState;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostControlRoomChannelMain
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelMain extends MR_HostObject {
	mLevelValue: MR_HostControlRoomValue;
	mMuteValue: MR_HostControlRoomValue;
	mBypassInserts: MR_HostControlRoomValue;
	mSelectSourceMonitorMixValue: MR_HostControlRoomValue;
	mSelectSourceExternalInputValue: MR_HostControlRoomValue;
	mListenEnabledValue: MR_HostControlRoomValue;
	mListenLevelValue: MR_HostControlRoomValue;
	mDimActiveValue: MR_HostControlRoomValue;
	mMetronomeClickActiveValue: MR_HostControlRoomValue;
	mMetronomeClickLevelValue: MR_HostControlRoomValue;
	mMetronomeClickPanValue: MR_HostControlRoomValue;
	mReferenceLevelEnabledValue: MR_HostControlRoomValue;
	constructor() {
		super()
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_HostControlRoomSelectSourceCueValueByIndex}
	 */
	getSelectSourceCueValueByIndex (index: number): MR_HostControlRoomSelectSourceCueValueByIndex
	{
		return new MR_HostControlRoomSelectSourceCueValueByIndex
	}
}

/**
 * @class MR_HostControlRoomChannelPhonesByIndex
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelPhonesByIndex extends MR_HostObject {
	mLevelValue: MR_HostControlRoomValue;
	mMuteValue: MR_HostControlRoomValue;
	mBypassInserts: MR_HostControlRoomValue;
	mSelectSourceMonitorMixValue: MR_HostControlRoomValue;
	mSelectSourceExternalInputValue: MR_HostControlRoomValue;
	mListenEnabledValue: MR_HostControlRoomValue;
	mListenLevelValue: MR_HostControlRoomValue;
	mDimActiveValue: MR_HostControlRoomValue;
	mMetronomeClickActiveValue: MR_HostControlRoomValue;
	mMetronomeClickLevelValue: MR_HostControlRoomValue;
	mMetronomeClickPanValue: MR_HostControlRoomValue;
	constructor() {
		super()
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_HostControlRoomSelectSourceCueValueByIndex}
	 */
	getSelectSourceCueValueByIndex (index: number): MR_HostControlRoomSelectSourceCueValueByIndex
	{
		return new MR_HostControlRoomSelectSourceCueValueByIndex
	}
}

/**
 * @class MR_HostControlRoomChannelCueByIndex
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelCueByIndex extends MR_HostObject {
	mLevelValue: MR_HostControlRoomValue;
	mMuteValue: MR_HostControlRoomValue;
	mBypassInserts: MR_HostControlRoomValue;
	mSelectSourceMonitorMixValue: MR_HostControlRoomValue;
	mSelectSourceExternalInputValue: MR_HostControlRoomValue;
	mSelectSourceAuxValue: MR_HostControlRoomValue;
	mTalkbackEnabledValue: MR_HostControlRoomValue;
	mTalkbackLevelValue: MR_HostControlRoomValue;
	mMetronomeClickActiveValue: MR_HostControlRoomValue;
	mMetronomeClickLevelValue: MR_HostControlRoomValue;
	mMetronomeClickPanValue: MR_HostControlRoomValue;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostControlRoomChannelExternalInputByIndex
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelExternalInputByIndex extends MR_HostObject {
	mLevelValue: MR_HostControlRoomValue;
	mMuteValue: MR_HostControlRoomValue;
	mBypassInserts: MR_HostControlRoomValue;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostControlRoomChannelTalkbackByIndex
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelTalkbackByIndex extends MR_HostObject {
	mLevelValue: MR_HostControlRoomValue;
	mMuteValue: MR_HostControlRoomValue;
	mBypassInserts: MR_HostControlRoomValue;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostControlRoomChannelMonitorByIndex
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelMonitorByIndex extends MR_HostObject {
	mLevelValue: MR_HostControlRoomValue;
	mMuteValue: MR_HostControlRoomValue;
	mBypassInserts: MR_HostControlRoomValue;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostControlRoom
 * @augments MR_HostObject
 */
class MR_HostControlRoom extends MR_HostObject {
	mMainChannel: MR_HostControlRoomChannelMain;
	mAlertDimActiveValue: MR_HostControlRoomValue;
	mTalkbackActiveValue: MR_HostControlRoomValue;
	mTalkbackDimLevelValue: MR_HostControlRoomValue;
	mListenDimLevelValue: MR_HostControlRoomValue;
	mReferenceLevelValue: MR_HostControlRoomValue;
	mSelectNextDownmixPresetValue: MR_HostControlRoomValue;
	constructor() {
		super()
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostControlRoomChannelCueByIndex}
	 */
	getCueChannelByIndex (index: number): MR_HostControlRoomChannelCueByIndex
	{
		return new MR_HostControlRoomChannelCueByIndex
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostControlRoomChannelPhonesByIndex}
	 */
	getPhonesChannelByIndex (index: number): MR_HostControlRoomChannelPhonesByIndex
	{
		return new MR_HostControlRoomChannelPhonesByIndex
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostControlRoomChannelExternalInputByIndex}
	 */
	getExternalInputChannelByIndex (index: number): MR_HostControlRoomChannelExternalInputByIndex
	{
		return new MR_HostControlRoomChannelExternalInputByIndex
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostControlRoomChannelTalkbackByIndex}
	 */
	getTalkbackChannelByIndex (index: number): MR_HostControlRoomChannelTalkbackByIndex
	{
		return new MR_HostControlRoomChannelTalkbackByIndex
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostControlRoomChannelMonitorByIndex}
	 */
	getMonitorChannelByIndex (index: number): MR_HostControlRoomChannelMonitorByIndex
	{
		return new MR_HostControlRoomChannelMonitorByIndex
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_HostControlRoomSelectSourceExternalInputValueByIndex}
	 */
	getSelectSourceExternalInputValueByIndex (index: number): MR_HostControlRoomSelectSourceExternalInputValueByIndex
	{
		return new MR_HostControlRoomSelectSourceExternalInputValueByIndex
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_HostControlRoomSelectTargetMonitorValueByIndex}
	 */
	getSelectTargetMonitorValueByIndex (index: number): MR_HostControlRoomSelectTargetMonitorValueByIndex
	{
		return new MR_HostControlRoomSelectTargetMonitorValueByIndex
	}
	
	/**
	 * @returns {number}
	 */
	getMaxTalkbackChannels (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxExternalInputChannels (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxCueChannels (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxPhonesChannels (): number
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxMonitorChannels (): number
	{
		
	}
}

/**
 * @class MR_MixConsole
 * @augments MR_HostObject
 */
class MR_MixConsole extends MR_HostObject {
	constructor() {
		super()
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_MixerBankZone}
	 */
	makeMixerBankZone (name: string = ''): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
}


/**
 * @class MR_TransportValues
 * @augments MR_HostObject
 */
class MR_TransportValues extends MR_HostObject {
	mStart: MR_StartValue;
	mStop: MR_StopValue;
	mRecord: MR_RecordValue;
	mRewind: MR_RewindValue;
	mForward: MR_ForwardValue;
	mCycleActive: MR_CycleActiveValue;
	mMetronomeActive: MR_MetronomeActiveValue;
	mMetronomeClickLevel: MR_MetronomeClickLevel;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PreFilter
 * @augments MR_HostObject
 */
class MR_PreFilter extends MR_HostObject {
	mBypass: MR_PreFilterBypassValue;
	mGain: MR_PreFilterGainValue;
	mPhaseSwitch: MR_PreFilterPhaseSwitchValue;
	mHighCutOn: MR_PreFilterHighCutOnValue;
	mHighCutFreq: MR_PreFilterHighCutFrequencyValue;
	mHighCutSlope: MR_PreFilterHighCutSlopeValue;
	mLowCutOn: MR_PreFilterLowCutOnValue;
	mLowCutFreq: MR_PreFilterLowCutFrequencyValue;
	mLowCutSlope: MR_PreFilterLowCutSlopeValue;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_ChannelEQBand
 * @augments MR_HostObject
 */
class MR_ChannelEQBand extends MR_HostObject {
	mGain: MR_EQBandGainValue;
	mFreq: MR_EQBandFrequencyValue;
	mQ: MR_EQBandQualityValue;
	mOn: MR_EQBandOnValue;
	mFilterType: MR_EQBandFilterTypeValue;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_ChannelEQ
 * @augments MR_HostObject
 */
class MR_ChannelEQ extends MR_HostObject {
	mBand1: MR_ChannelEQBand;
	mBand2: MR_ChannelEQBand;
	mBand3: MR_ChannelEQBand;
	mBand4: MR_ChannelEQBand;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_SendSlot
 * @augments MR_HostObject
 */
class MR_SendSlot extends MR_HostObject {
	mOn: MR_SendOn;
	mPrePost: MR_SendPrePost;
	mLevel: MR_SendLevel;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_ControlRoomCueSendSlot
 * @augments MR_HostObject
 */
class MR_ControlRoomCueSendSlot extends MR_HostObject {
	mOn: MR_ControlRoomCueSendOnValue;
	mPrePost: MR_ControlRoomCueSendPrePostValue;
	mLevel: MR_ControlRoomCueSendLevelValue;
	mPan: MR_ControlRoomCueSendPanValue;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_MixerChannelValues
 * @augments MR_HostObject
 */
class MR_MixerChannelValues extends MR_HostObject {
	mVolume: MR_VolumeValue;
	mPan: MR_PanValue;
	mMute: MR_MuteValue;
	mSolo: MR_SoloValue;
	mMonitorEnable: MR_MonitorEnableValue;
	mRecordEnable: MR_RecordEnableValue;
	mEditorOpen: MR_EditorOpenValue;
	mInstrumentOpen: MR_InstrumentOpenValue;
	mSelected: MR_SelectedValue;
	mAutomationRead: MR_AutomationReadValue;
	mAutomationWrite: MR_AutomationWriteValue;
	mVUMeter: MR_VUMeterValue;
	mVUMeterMax: MR_VUMeterMaxValue;
	mVUMeterClip: MR_VUMeterClipValue;
	mVUMeterPeak: MR_VUMeterPeakValue;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_MixerBankZone
 * @augments MR_HostObject
 */
class MR_MixerBankZone extends MR_HostObject {
	mAction: MR_MixerBankZoneActions;
	constructor() {
		super()
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeAudioChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeInstrumentChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeSamplerChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeMIDIChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeFXChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeGroupChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeVCAChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeInputChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeOutputChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeWindowZoneLeftChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeWindowZoneRightChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeAudioChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeInstrumentChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeSamplerChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeMIDIChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeFXChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeGroupChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeVCAChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeInputChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeOutputChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeWindowZoneLeftChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeWindowZoneRightChannels (): MR_MixerBankZone
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @param {boolean} followVisibility
	 * @returns {MR_MixerBankZone}
	 */
	setFollowVisibility (followVisibility: boolean): MR_MixerBankZone
	{
		return this
	}
	
	/**
	 * @returns {MR_MixerBankChannel}
	 */
	makeMixerBankChannel (): MR_MixerBankChannel
	{
		return new MR_MixerBankChannel
	}
}

/**
 * @class MR_TrackSelection
 * @augments MR_HostObject
 */
class MR_TrackSelection extends MR_HostObject {
	mMixerChannel: MR_SelectedTrackChannel;
	mAction: MR_TrackSelectionActions;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 */
class MR_HostValue {
	
	constructor() {
	}
	
}

/**
 * @class MR_StartValue
 * Indicates if transport has been started.
 * @augments MR_HostValue
 */
class MR_StartValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_StopValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_StopValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_RecordValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_RecordValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_RewindValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_RewindValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_ForwardValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ForwardValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_CycleActiveValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_CycleActiveValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_MetronomeActiveValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_MetronomeActiveValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_MetronomeClickLevel
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_MetronomeClickLevel extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_VolumeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VolumeValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PanValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PanValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_MuteValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_MuteValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_SoloValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_SoloValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_MonitorEnableValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_MonitorEnableValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_RecordEnableValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_RecordEnableValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_EditorOpenValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EditorOpenValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_InstrumentOpenValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_InstrumentOpenValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_SelectedValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_SelectedValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_AutomationReadValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_AutomationReadValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_AutomationWriteValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_AutomationWriteValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_VUMeterValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VUMeterValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_VUMeterMaxValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VUMeterMaxValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_VUMeterClipValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VUMeterClipValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_VUMeterPeakValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VUMeterPeakValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_SendOn
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_SendOn extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_SendPrePost
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_SendPrePost extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_SendLevel
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_SendLevel extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_ControlRoomCueSendOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ControlRoomCueSendOnValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_ControlRoomCueSendPrePostValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ControlRoomCueSendPrePostValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_ControlRoomCueSendLevelValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ControlRoomCueSendLevelValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_ControlRoomCueSendPanValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ControlRoomCueSendPanValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_ControlRoomCueSendFolderBypassValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ControlRoomCueSendFolderBypassValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PluginOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PluginOnValue extends MR_HostValue {
	
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PluginBypassValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PluginBypassValue extends MR_HostValue {
	
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PluginEditValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PluginEditValue extends MR_HostValue {
	
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PreFilterBypassValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterBypassValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PreFilterGainValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterGainValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PreFilterPhaseSwitchValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterPhaseSwitchValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PreFilterHighCutFrequencyValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterHighCutFrequencyValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PreFilterHighCutOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterHighCutOnValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PreFilterHighCutSlopeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterHighCutSlopeValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PreFilterLowCutFrequencyValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterLowCutFrequencyValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PreFilterLowCutOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterLowCutOnValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_PreFilterLowCutSlopeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterLowCutSlopeValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_EQBandGainValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EQBandGainValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_EQBandFrequencyValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EQBandFrequencyValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_EQBandQualityValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EQBandQualityValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_EQBandOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EQBandOnValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_EQBandFilterTypeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EQBandFilterTypeValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_QuickControlValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_QuickControlValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_FocusedQuickControlsLockedStateValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_FocusedQuickControlsLockedStateValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostValueAtMouseCursor
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostValueAtMouseCursor extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostValueAtMouseCursorLockedState
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostValueAtMouseCursorLockedState extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostControlRoomValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostControlRoomValue extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostControlRoomSelectSourceCueValueByIndex
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostControlRoomSelectSourceCueValueByIndex extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostControlRoomSelectTargetMonitorValueByIndex
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostControlRoomSelectTargetMonitorValueByIndex extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostControlRoomSelectSourceExternalInputValueByIndex
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostControlRoomSelectSourceExternalInputValueByIndex extends MR_HostValue {
	mOnProcessValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number): void;
	mOnDisplayValueChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnTitleChange: function (MR_ActiveDevice, MR_ActiveMapping, string, string): void;
	mOnColorChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number, number, number, boolean): void;
	constructor() {
		super()
	}
	
}

/**
 * @callback HostValueOnProcessValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} value

/**
 * @callback HostValueOnDisplayValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} value
 * @param {string} units

/**
 * @callback HostValueOnTitleChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} objectTitle
 * @param {string} valueTitle

/**
 * @callback HostValueOnColorChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} isActive



/**
 * @class MR_MixerBankZoneActions
 */
class MR_MixerBankZoneActions {
	mPrevBank: MR_MixerBankZoneAction;
	mNextBank: MR_MixerBankZoneAction;
	mShiftLeft: MR_MixerBankZoneAction;
	mShiftRight: MR_MixerBankZoneAction;
	mResetBank: MR_MixerBankZoneAction;
	constructor() {
	}
	
}

/**
 * @class MR_TrackSelectionActions
 */
class MR_TrackSelectionActions {
	mPrevTrack: MR_TrackSelectionAction;
	mNextTrack: MR_TrackSelectionAction;
	constructor() {
	}
	
}

/**
 * @class MR_HostBinding
 */
class MR_HostBinding {
	
	constructor() {
	}
	
	/**
	 * @param {MR_SubPage} subPage
	 * @returns {MR_HostBinding}
	 */
	setSubPage (subPage: MR_SubPage): MR_HostBinding
	{
		return this
	}
	
	/**
	 * @param {number} filterValue
	 * @returns {MR_HostBinding}
	 */
	filterByValue (filterValue: number): MR_HostBinding
	{
		return null
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_HostBinding}
	 */
	filterByValueRange (from: number, to: number): MR_HostBinding
	{
		return null
	}
	
	/**
	 * @param {number} mapValue
	 * @returns {MR_HostBinding}
	 */
	mapToValue (mapValue: number): MR_HostBinding
	{
		return null
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_HostBinding}
	 */
	mapToValueRange (from: number, to: number): MR_HostBinding
	{
		return null
	}
}

/**
 * @class MR_ValueBinding
 * @augments MR_HostBinding
 */
class MR_ValueBinding extends MR_HostBinding {
	mOnValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number): void;
	constructor() {
		super()
	}
	
	/**
	 * @returns {MR_ValueBinding}
	 */
	setTypeDefault (): MR_ValueBinding
	{
		return this
	}
	
	/**
	 * @returns {MR_ValueBinding}
	 */
	setTypeToggle (): MR_ValueBinding
	{
		return this
	}
	
	/**
	 * @returns {MR_ValueBinding}
	 */
	setValueTakeOverModeJump (): MR_ValueBinding
	{
		return this
	}
	
	/**
	 * @returns {MR_ValueBinding}
	 */
	setValueTakeOverModePickup (): MR_ValueBinding
	{
		return this
	}
	
	/**
	 * @returns {MR_ValueBinding}
	 */
	setValueTakeOverModeScaled (): MR_ValueBinding
	{
		return this
	}
	
	/**
	 * @param {MR_SubPage} subPage
	 * @returns {MR_ValueBinding}
	 */
	setSubPage (subPage: MR_SubPage): MR_ValueBinding
	{
		return this
	}
	
	/**
	 * @param {number} filterValue
	 * @returns {MR_ValueBinding}
	 */
	filterByValue (filterValue: number): MR_ValueBinding
	{
		return new MR_ValueBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_ValueBinding}
	 */
	filterByValueRange (from: number, to: number): MR_ValueBinding
	{
		return new MR_ValueBinding
	}
	
	/**
	 * @param {number} mapValue
	 * @returns {MR_ValueBinding}
	 */
	mapToValue (mapValue: number): MR_ValueBinding
	{
		return new MR_ValueBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_ValueBinding}
	 */
	mapToValueRange (from: number, to: number): MR_ValueBinding
	{
		return new MR_ValueBinding
	}
}

/**
 * @class MR_CommandBinding
 * @augments MR_HostBinding
 */
class MR_CommandBinding extends MR_HostBinding {
	mOnValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number): void;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_SubPage} subPage
	 * @returns {MR_CommandBinding}
	 */
	setSubPage (subPage: MR_SubPage): MR_CommandBinding
	{
		return this
	}
	
	/**
	 * @param {number} filterValue
	 * @returns {MR_CommandBinding}
	 */
	filterByValue (filterValue: number): MR_CommandBinding
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_CommandBinding}
	 */
	filterByValueRange (from: number, to: number): MR_CommandBinding
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {number} mapValue
	 * @returns {MR_CommandBinding}
	 */
	mapToValue (mapValue: number): MR_CommandBinding
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_CommandBinding}
	 */
	mapToValueRange (from: number, to: number): MR_CommandBinding
	{
		return new MR_CommandBinding
	}
}

/**
 * @class MR_ActionBinding
 * @augments MR_HostBinding
 */
class MR_ActionBinding extends MR_HostBinding {
	mOnValueChange: function (MR_ActiveDevice, MR_ActiveMapping, number, number): void;
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_SubPage} subPage
	 * @returns {MR_ActionBinding}
	 */
	setSubPage (subPage: MR_SubPage): MR_ActionBinding
	{
		return this
	}
	
	/**
	 * @param {number} filterValue
	 * @returns {MR_ActionBinding}
	 */
	filterByValue (filterValue: number): MR_ActionBinding
	{
		return new MR_ActionBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_ActionBinding}
	 */
	filterByValueRange (from: number, to: number): MR_ActionBinding
	{
		return new MR_ActionBinding
	}
	
	/**
	 * @param {number} mapValue
	 * @returns {MR_ActionBinding}
	 */
	mapToValue (mapValue: number): MR_ActionBinding
	{
		return new MR_ActionBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_ActionBinding}
	 */
	mapToValueRange (from: number, to: number): MR_ActionBinding
	{
		return new MR_ActionBinding
	}
}

/**
 * @callback HostBindingOnValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} currValue
 * @param {number} valueDiff

/**
 * @class MR_SubPageArea
 */
class MR_SubPageArea {
	mAction: MR_SubPageAreaActions;
	constructor() {
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_SubPage}
	 */
	makeSubPage (name: string): MR_SubPage
	{
		return new MR_SubPage
	}
}

/**
 * @class MR_SubPageAreaActions
 */
class MR_SubPageAreaActions {
	mPrev: MR_SubPageAreaAction;
	mNext: MR_SubPageAreaAction;
	mReset: MR_SubPageAreaAction;
	constructor() {
	}
	
}

/**
 * @class MR_SubPage
 */
class MR_SubPage {
	mAction: MR_SubPageActions;
	mOnActivate: function (MR_ActiveDevice): void;
	constructor() {
	}
	
}

/**
 * @class MR_SubPageActions
 */
class MR_SubPageActions {
	mActivate: MR_SubPageActionActivate;
	constructor() {
	}
	
}


/**
 * @class MR_MappingPageActions
 */
class MR_MappingPageActions {
	mActivate: MR_MappingPageActionActivate;
	constructor() {
	}
	
}


/**
 * @class MR_DeviceDetectionUnit
 * Define device auto detection.
 * @example
 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
 *     .expectInputNameEquals('SimpleDevice IN')
 *     .expectOutputNameEquals('SimpleDevice OUT')
 *     
 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
 *     .expectInputNameEquals('SimpleDevice (MIDI IN)')
 *     .expectOutputNameEquals('SimpleDevice (MIDI OUT)')
 * 
 */
class MR_DeviceDetectionUnit {
	constructor() {
	}
	
	/**
	 * Define port naming pair.
	 * @example
	 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
	 *     .expectInputNameEquals('SimpleDevice IN')
	 *     .expectOutputNameEquals('SimpleDevice OUT')
	 *     
	 * @param {MR_DeviceMidiInput} inputPort
	 * @param {MR_DeviceMidiOutput} outputPort
	 * @returns {MR_DetectionPortPair}
	 */
	detectPortPair (inputPort: MR_DeviceMidiInput, outputPort: MR_DeviceMidiOutput): MR_DetectionPortPair
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {MR_DeviceMidiInput} inputPort
	 * @returns {MR_DetectionSingleInput}
	 */
	detectSingleInput (inputPort: MR_DeviceMidiInput): MR_DetectionSingleInput
	{
		return new MR_DetectionSingleInput
	}
	
	/**
	 * @param {MR_DeviceMidiOutput} outputPort
	 * @returns {MR_DetectionSingleOutput}
	 */
	detectSingleOutput (outputPort: MR_DeviceMidiOutput): MR_DetectionSingleOutput
	{
		return new MR_DetectionSingleOutput
	}
}

/**
 * @class MR_DetectionEntry
 */
class MR_DetectionEntry {
	constructor() {
	}
	
}

/**
 * @class MR_DetectionPortPair
 * Define port naming pair.
 * @example
 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
 *     .expectInputNameEquals('SimpleDevice IN')
 *     .expectOutputNameEquals('SimpleDevice OUT')
 *     
 * @augments MR_DetectionEntry
 */
class MR_DetectionPortPair extends MR_DetectionEntry {
	constructor() {
		super()
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectInputNameContains (filterValue: string): MR_DetectionPortPair
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectInputNameEquals (filterValue: string): MR_DetectionPortPair
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectInputNameStartsWith (filterValue: string): MR_DetectionPortPair
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectInputNameEndsWith (filterValue: string): MR_DetectionPortPair
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectOutputNameContains (filterValue: string): MR_DetectionPortPair
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectOutputNameEquals (filterValue: string): MR_DetectionPortPair
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectOutputNameStartsWith (filterValue: string): MR_DetectionPortPair
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectOutputNameEndsWith (filterValue: string): MR_DetectionPortPair
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} manufacturerID
	 * @param {string} deviceFamily
	 * @param {string} modelNumber
	 * @returns {MR_DetectionPortPair}
	 */
	expectSysexIdentityResponse (manufacturerID: string, deviceFamily: string, modelNumber: string): MR_DetectionPortPair
	{
		return new MR_DetectionPortPair
	}
}

/**
 * @class MR_DetectionSingleInput
 * @augments MR_DetectionEntry
 */
class MR_DetectionSingleInput extends MR_DetectionEntry {
	constructor() {
		super()
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleInput}
	 */
	expectInputNameContains (filterValue: string): MR_DetectionSingleInput
	{
		return new MR_DetectionSingleInput
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleInput}
	 */
	expectInputNameEquals (filterValue: string): MR_DetectionSingleInput
	{
		return new MR_DetectionSingleInput
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleInput}
	 */
	expectInputNameStartsWith (filterValue: string): MR_DetectionSingleInput
	{
		return new MR_DetectionSingleInput
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleInput}
	 */
	expectInputNameEndsWith (filterValue: string): MR_DetectionSingleInput
	{
		return new MR_DetectionSingleInput
	}
}

/**
 * @class MR_DetectionSingleOutput
 * @augments MR_DetectionEntry
 */
class MR_DetectionSingleOutput extends MR_DetectionEntry {
	constructor() {
		super()
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleOutput}
	 */
	expectOutputNameContains (filterValue: string): MR_DetectionSingleOutput
	{
		return new MR_DetectionSingleOutput
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleOutput}
	 */
	expectOutputNameEquals (filterValue: string): MR_DetectionSingleOutput
	{
		return new MR_DetectionSingleOutput
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleOutput}
	 */
	expectOutputNameStartsWith (filterValue: string): MR_DetectionSingleOutput
	{
		return new MR_DetectionSingleOutput
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleOutput}
	 */
	expectOutputNameEndsWith (filterValue: string): MR_DetectionSingleOutput
	{
		return new MR_DetectionSingleOutput
	}
}

/**
 * @class MR_DeviceDriverActions
 */
class MR_DeviceDriverActions {
	mPrevPage: MR_DeviceDriverAction;
	mNextPage: MR_DeviceDriverAction;
	mResetPage: MR_DeviceDriverAction;
	constructor() {
	}
	
}

/**
 * @class MR_InitialSysexFile
 */
class MR_InitialSysexFile {
	constructor() {
	}
	
}

/**
 * @class MR_UserGuide
 */
class MR_UserGuide {
	constructor() {
	}
	
}

/**
 * @typedef __primitive_void
 * @type {undefined}
 */


const module_object = new MR_MidiRemoteAPI;

declare module 'midiremote_api_v1' {
	const makeDeviceDriver = module_object.makeDeviceDriver
	const mDefaults = new MR_HostDefaults
}

declare class console {
	static log (msg: string): void { }
	static error (msg: string): void { }
}

