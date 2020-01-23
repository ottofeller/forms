"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formik_1 = require("formik");
var Field_1 = require("../common/Field");
var react_1 = require("react");
var react_select_1 = require("react-select");
var react_2 = require("react");
function Autocomplete(props) {
    var onChange = props.onChange;
    var _a = formik_1.useField(props.name), field = _a[0], meta = _a[1];
    var setFieldValue = formik_1.useFormikContext().setFieldValue;
    var setValue = react_2.useCallback(function (obj) {
        setFieldValue(props.name, obj.value);
        if (typeof onChange === 'function')
            onChange(obj.value);
    }, [onChange, props.name, setFieldValue]);
    return react_1.default.createElement(Field_1.Field, { isInvalid: meta.error && meta.touched, errorMessage: meta.error, className: props.className, isDisabled: props.isDisabled },
        react_1.default.createElement(react_select_1.default, { className: props.selectBoxClassName, classNamePrefix: "autocomplete", id: "select-" + field.name, inputId: "input-" + field.name, isDisabled: props.isDisabled, onChange: setValue, options: props.options, value: props.value }));
}
exports.Autocomplete = Autocomplete;
