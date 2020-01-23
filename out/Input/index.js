"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var formik_1 = require("formik");
var Field_1 = require("../common/Field");
var react_1 = require("react");
function Input(props) {
    var _a = formik_1.useField(props.name), field = _a[0], meta = _a[1];
    var isInvalid = meta.error && meta.touched;
    return react_1.default.createElement(Field_1.Field, { caption: props.caption, captionClassName: props.captionClassName, className: props.className, isDisabled: props.isDisabled, errorMessage: meta.error, label: props.label, labelClassName: props.labelClassName, isErrorMessageHidden: props.isErrorMessageHidden, isInvalid: isInvalid },
        react_1.default.createElement(formik_1.Field, __assign({}, field, { className: props.inputClassName, disabled: props.isDisabled, labelClassName: props.labelClassName, onChange: props.onChange, type: props.type || 'input', name: props.name })));
}
exports.Input = Input;
