"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = require("classnames");
var react_1 = require("react");
function Field(props) {
    return react_1.default.createElement("div", { className: classnames_1.default(props.className, { 'is-disabled': props.isDisabled, 'is-invalid': props.isInvalid }) },
        props.label && react_1.default.createElement("label", { className: props.labelClassName }, props.label),
        props.children,
        props.caption && react_1.default.createElement("span", { className: props.captionClassName }, props.caption),
        props.isInvalid && props.errorMessage && !props.isErrorMessageHidden && react_1.default.createElement("div", { className: "error-message" }, props.errorMessage));
}
exports.Field = Field;
