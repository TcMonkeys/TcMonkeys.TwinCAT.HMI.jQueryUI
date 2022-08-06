var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let TcMonkeys_TwinCAT_HMI_jQueryUI;
        (function (TcMonkeys_TwinCAT_HMI_jQueryUI) {
            function Draggable(control, parent) {
                const controlElement = control.getElement();
                const parentElement = parent.getElement();
                controlElement.draggable({ containment: parentElement, scroll: false });
            }
            TcMonkeys_TwinCAT_HMI_jQueryUI.Draggable = Draggable;
        })(TcMonkeys_TwinCAT_HMI_jQueryUI = Functions.TcMonkeys_TwinCAT_HMI_jQueryUI || (Functions.TcMonkeys_TwinCAT_HMI_jQueryUI = {}));
        Functions.registerFunctionEx('Draggable', 'TcHmi.Functions.TcMonkeys_TwinCAT_HMI_jQueryUI', TcMonkeys_TwinCAT_HMI_jQueryUI.Draggable);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=Draggable.js.map