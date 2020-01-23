import { useField, useFormikContext } from 'formik';
import { Field } from '../common/Field';
import React from 'react';
import Select from 'react-select';
import { useCallback } from 'react';
export function Autocomplete(props) {
    const onChange = props.onChange;
    const [field, meta] = useField(props.name);
    const { setFieldValue } = useFormikContext();
    const setValue = useCallback(obj => {
        setFieldValue(props.name, obj.value);
        if (typeof onChange === 'function')
            onChange(obj.value);
    }, [onChange, props.name, setFieldValue]);
    return React.createElement(Field, { isInvalid: meta.error && meta.touched, errorMessage: meta.error, className: props.className, isDisabled: props.isDisabled },
        React.createElement(Select, { className: props.selectBoxClassName, classNamePrefix: "autocomplete", id: `select-${field.name}`, inputId: `input-${field.name}`, isDisabled: props.isDisabled, onChange: setValue, options: props.options, value: props.value }));
}