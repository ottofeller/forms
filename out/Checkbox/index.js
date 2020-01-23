import { useField } from 'formik';
import { Field } from '../common/Field';
import React from 'react';
export function Checkbox(props) {
    const [field, meta] = useField(props.name);
    const isInvalid = meta.error && meta.touched;
    return React.createElement(Field, { caption: props.caption, captionClassName: props.captionClassName, className: props.className, isDisabled: props.isDisabled, errorMessage: meta.error, isErrorMessageHidden: props.isErrorMessageHidden, isInvalid: isInvalid, label: props.label, labelClassName: props.labelClassName },
        React.createElement("input", Object.assign({ checked: Boolean(field.value), className: props.checkboxClassName, type: "checkbox" }, field)));
}
