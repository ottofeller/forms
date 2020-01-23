import cn from 'classnames';
import React from 'react';
export function Field(props) {
    return React.createElement("div", { className: cn(props.className, { 'is-disabled': props.isDisabled, 'is-invalid': props.isInvalid }) },
        props.label && React.createElement("label", { className: props.labelClassName }, props.label),
        props.children,
        props.caption && React.createElement("span", { className: props.captionClassName }, props.caption),
        props.isInvalid && props.errorMessage && !props.isErrorMessageHidden && React.createElement("div", { className: "error-message" }, props.errorMessage));
}
