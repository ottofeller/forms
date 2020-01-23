import { useCallback } from 'react';
import { Field as FormikField, useField } from 'formik';
import { Field } from '../common/Field';
import React from 'react';
export function Radio(props) {
    const [field, meta] = useField(props.name);
    const isInvalid = meta.error && meta.touched;
    const change = useCallback((event) => {
        field.onChange(event);
        if (typeof props.onChange === 'function')
            props.onChange(event);
    }, [field, props]);
    return React.createElement(Field, { className: props.className, isDisabled: props.isDisabled, errorMessage: meta.error, isErrorMessageHidden: props.isErrorMessageHidden, isInvalid: isInvalid, label: props.label, labelClassName: props.labelClassName },
        React.createElement(FormikField, Object.assign({}, field, { className: props.radioClassName, disabled: props.isDisabled, onChange: change, type: "radio", name: props.name, value: props.value })),
        React.createElement("span", { className: props.captionClassName }, props.caption));
}
