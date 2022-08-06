module TcHmi {
    export module Functions {
        export module TcMonkeys_TwinCAT_HMI_jQueryUI {
            export function Draggable(control: TcHmi.Controls.System.TcHmiControl, parent:TcHmi.Controls.System.TcHmiContainerControl) {
                const controlElement = control.getElement();
                const parentElement = parent.getElement();

                controlElement.draggable({ containment: parentElement, scroll: false });
            }
        }
        registerFunctionEx('Draggable', 'TcHmi.Functions.TcMonkeys_TwinCAT_HMI_jQueryUI', TcMonkeys_TwinCAT_HMI_jQueryUI.Draggable);
    }
}