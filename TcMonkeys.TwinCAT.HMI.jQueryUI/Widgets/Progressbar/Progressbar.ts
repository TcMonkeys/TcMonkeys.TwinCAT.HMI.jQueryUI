/*
 * Generated 5/13/2022 9:43:09 PM
 * Copyright (C) 2022
 */
module TcHmi {
    export module Controls {
        export module TcMonkeys_TwinCAT_HMI_jQueryUI {
			export class Progressbar extends TcHmi.Controls.System.TcHmiControl {

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
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot!: JQuery;
                protected __elementProgressbar!: JQuery;
               
                protected __progressbarOptions!: JQueryUI.ProgressbarOptions;

                protected __slider1Value!: number;
                protected __slider2Value!: number;

				/**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TcMonkeys_TwinCAT_HMI_jQueryUI_Progressbar-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html > root element');
                    }

                    // Fetch slider element
                    this.__elementProgressbar = this.__elementTemplateRoot.find('.ui-progressbar');
                    if (this.__elementProgressbar.length === 0) {
                        throw new Error('Invalid Template.html > progressbar element');
                    }

                    this.__progressbarOptions = {
                        create: this.__onCreate,
                        complete: this.__onComplete,
                    }

                    this.__elementProgressbar.progressbar(this.__progressbarOptions);


                    // Call __previnit of base class
                    super.__previnit();
                }
                /** 
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();                    

                }

                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }

                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
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
                public destroy() {
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

                protected __onCreate = (event: Event, ui: JQueryUI.ProgressbarUIParams) => {                    
                    TcHmi.EventProvider.raise(this.getId() + '.onCreate');
                }

                protected __onComplete = (event: Event, ui: JQueryUI.ProgressbarUIParams) => {
                    TcHmi.EventProvider.raise(this.getId() + '.onComplete');
                }

                /**
                * -------------------------------------------------- Getter and setter -------------------------------------------------- 
                */
                public setSliderValue(newValue: number | null){
                    let convertedValue: number | null = TcHmi.ValueConverter.toNumber(newValue);
                    if (convertedValue === null) return;
                    if (convertedValue === this.__slider1Value) return;
                    this.__slider1Value = convertedValue;
                    this.__elementProgressbar.progressbar( "value", this.__slider1Value );
                    TcHmi.EventProvider.raise(this.getId() + '.onPropertyChanged', {'propertyName':'SliderValue'});
                }

                public getSliderValue(): number | null{
                    return this.__slider1Value;
                }

            }
        }
    }
}

/**
* Register Control
*/
TcHmi.Controls.registerEx('Progressbar', 'TcHmi.Controls.TcMonkeys_TwinCAT_HMI_jQueryUI', TcHmi.Controls.TcMonkeys_TwinCAT_HMI_jQueryUI.Progressbar);
