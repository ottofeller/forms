import * as R from 'ramda';
import { Field as FormikField, useField } from 'formik';
import { Field } from '../common/Field';
export function Select(props) {
    const [field, meta] = useField(props.name);
    const isInvalid = meta.error && meta.touched;
    return <Field caption={props.caption} captionClassName={props.captionClassName} className={props.className} isDisabled={props.isDisabled} errorMessage={meta.error} isErrorMessageHidden={props.isErrorMessageHidden} isInvalid={isInvalid} label={props.label} labelClassName={props.labelClassName}>
    <FormikField as="select" className={props.selectBoxClassName} {...field}>
      {R.map(option => <option key={option.value} value={option.value}>{option.label}</option>, props.options)}
    </FormikField>
  </Field>;
}
