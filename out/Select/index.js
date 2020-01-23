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
var R = require("ramda");
var formik_1 = require("formik");
var Field_1 = require("../common/Field");
var react_1 = require("react");
function Select(props) {
    var _a = formik_1.useField(props.name), field = _a[0], meta = _a[1];
    var isInvalid = meta.error && meta.touched;
    return react_1.default.createElement(Field_1.Field, { caption: props.caption, captionClassName: props.captionClassName, className: props.className, isDisabled: props.isDisabled, errorMessage: meta.error, isErrorMessageHidden: props.isErrorMessageHidden, isInvalid: isInvalid, label: props.label, labelClassName: props.labelClassName },
        react_1.default.createElement(formik_1.Field, __assign({ as: "select", className: props.selectBoxClassName }, field), R.map(function (option) { return react_1.default.createElement("option", { key: option.value, value: option.value }, option.label); }, props.options)));
}
exports.Select = Select;
