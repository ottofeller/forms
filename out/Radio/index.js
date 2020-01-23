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
var react_1 = require("react");
var formik_1 = require("formik");
var Field_1 = require("../common/Field");
var react_2 = require("react");
function Radio(props) {
    var _a = formik_1.useField(props.name), field = _a[0], meta = _a[1];
    var isInvalid = meta.error && meta.touched;
    var change = react_1.useCallback(function (event) {
        field.onChange(event);
        if (typeof props.onChange === 'function')
            props.onChange(event);
    }, [field, props]);
    return react_2.default.createElement(Field_1.Field, { className: props.className, isDisabled: props.isDisabled, errorMessage: meta.error, isErrorMessageHidden: props.isErrorMessageHidden, isInvalid: isInvalid, label: props.label, labelClassName: props.labelClassName },
        react_2.default.createElement(formik_1.Field, __assign({}, field, { className: props.radioClassName, disabled: props.isDisabled, onChange: change, type: "radio", name: props.name, value: props.value })),
        react_2.default.createElement("span", { className: props.captionClassName }, props.caption));
}
exports.Radio = Radio;
