import * as R from 'ramda';
import { Field as FormikField, useField } from 'formik';
import { Field } from '../common/Field';
import React from 'react';
export function Select(props) {
    const [field, meta] = useField(props.name);
    const isInvalid = meta.error && meta.touched;
    return React.createElement(Field, { caption: props.caption, captionClassName: props.captionClassName, className: props.className, isDisabled: props.isDisabled, errorMessage: meta.error, isErrorMessageHidden: props.isErrorMessageHidden, isInvalid: isInvalid, label: props.label, labelClassName: props.labelClassName },
        React.createElement(FormikField, Object.assign({ as: "select", className: props.selectBoxClassName }, field), R.map(option => React.createElement("option", { key: option.value, value: option.value }, option.label), props.options)));
}
