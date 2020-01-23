import { Field as FormikField, useField } from 'formik';
import { Field } from '../common/Field';
import React from 'react';
export function Input(props) {
    const [field, meta] = useField(props.name);
    const isInvalid = meta.error && meta.touched;
    return React.createElement(Field, { caption: props.caption, captionClassName: props.captionClassName, className: props.className, isDisabled: props.isDisabled, errorMessage: meta.error, label: props.label, labelClassName: props.labelClassName, isErrorMessageHidden: props.isErrorMessageHidden, isInvalid: isInvalid },
        React.createElement(FormikField, Object.assign({}, field, { className: props.inputClassName, disabled: props.isDisabled, labelClassName: props.labelClassName, onChange: props.onChange, type: props.type || 'input', name: props.name })));
}
