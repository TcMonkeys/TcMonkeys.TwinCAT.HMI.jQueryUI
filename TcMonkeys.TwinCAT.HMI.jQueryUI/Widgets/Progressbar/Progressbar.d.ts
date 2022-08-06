declare module TcHmi {
    module Controls {
        module TcMonkeys_TwinCAT_HMI_jQueryUI {
            class Progressbar extends TcHmi.Controls.System.TcHmiControl {
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __elementSlider: JQuery;
                protected __elementSliderHandle1: JQuery;
                protected __elementSliderHandle2: JQuery;
                protected __sliderOptions: JQueryUI.SliderOptions;
                protected __slider1Value: number;
                protected __slider2Value: number;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                protected __onChange: (event: Event, ui: JQueryUI.SliderUIParams) => void;
                protected __onStart: (event: Event, ui: JQueryUI.SliderUIParams) => void;
                protected __onStop: (event: Event, ui: JQueryUI.SliderUIParams) => void;
                protected __onSlide: (event: Event, ui: JQueryUI.SliderUIParams) => void;
                protected __addValueInHandle(): void;
                /**
                * -------------------------------------------------- Getter and setter --------------------------------------------------
                */
                setSliderValue(newValue: number | null): void;
                getSliderValue(): number | null;
            }
        }
    }
}
