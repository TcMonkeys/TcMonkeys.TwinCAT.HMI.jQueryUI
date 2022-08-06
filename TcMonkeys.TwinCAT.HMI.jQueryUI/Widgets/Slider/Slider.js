/*
 * Generated 5/13/2022 9:43:32 PM
 * Copyright (C) 2022
 */
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let TcMonkeys_TwinCAT_HMI_jQueryUI;
        (function (TcMonkeys_TwinCAT_HMI_jQueryUI) {
            class Slider extends TcHmi.Controls.System.TcHmiControl {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                    this.__onChange = (event, ui) => {
                        TcHmi.EventProvider.raise(this.getId() + '.onValueChanged');
                    };
                    this.__onStart = (event, ui) => {
                        TcHmi.EventProvider.raise(this.getId() + '.onSlideStart');
                    };
                    this.__onStop = (event, ui) => {
                        TcHmi.EventProvider.raise(this.getId() + '.onSlideStop');
                    };
                    this.__onSlide = (event, ui) => {
                        this.__slider1Value = ui.value;
                        TcHmi.EventProvider.raise(this.getId() + '.onSlide');
                        TcHmi.EventProvider.raise(this.getId() + '.onPropertyChanged', { 'propertyName': 'SliderValue' });
                    };
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TcMonkeys_TwinCAT_HMI_jQueryUI_Slider-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html > root element');
                    }
                    // Fetch slider element
                    this.__elementSlider = this.__elementTemplateRoot.find('.ui-slider');
                    if (this.__elementSlider.length === 0) {
                        throw new Error('Invalid Template.html > slider element');
                    }
                    // Fetch slider element
                    this.__elementSliderHandle1 = this.__elementSlider.find('.ui-slider-handle');
                    if (this.__elementSliderHandle1.length === 0) {
                        throw new Error('Invalid Template.html > slider handle 1 element');
                    }
                    this.__sliderOptions = {
                        slide: this.__onSlide,
                        start: this.__onStart,
                        stop: this.__onStop,
                        change: this.__onChange
                    };
                    this.__elementSlider.slider(this.__sliderOptions);
                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
                    super.__detach();
                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                    * Free resources like child controls etc.
                    */
                }
                __addValueInHandle() {
                }
                /**
                * -------------------------------------------------- Getter and setter --------------------------------------------------
                */
                setSliderValue(newValue) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(newValue);
                    if (convertedValue === null)
                        return;
                    if (convertedValue === this.__slider1Value)
                        return;
                    this.__slider1Value = convertedValue;
                    this.__elementSlider.slider("value", this.__slider1Value);
                    TcHmi.EventProvider.raise(this.getId() + '.onPropertyChanged', { 'propertyName': 'SliderValue' });
                }
                getSliderValue() {
                    return this.__slider1Value;
                }
            }
            TcMonkeys_TwinCAT_HMI_jQueryUI.Slider = Slider;
        })(TcMonkeys_TwinCAT_HMI_jQueryUI = Controls.TcMonkeys_TwinCAT_HMI_jQueryUI || (Controls.TcMonkeys_TwinCAT_HMI_jQueryUI = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('Slider', 'TcHmi.Controls.TcMonkeys_TwinCAT_HMI_jQueryUI', TcHmi.Controls.TcMonkeys_TwinCAT_HMI_jQueryUI.Slider);
//# sourceMappingURL=Slider.js.map