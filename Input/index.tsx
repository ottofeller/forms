import {Field as FormikField, useField} from 'formik'
import {ChangeEvent} from 'react'
import {Field} from '../common/Field'

export function Input(props: {
  caption?: string
  captionClassName?: string
  className?: string
  inputClassName?: string
  isDisabled?: boolean
  isErrorMessageHidden?: boolean
  label?: string
  labelClassName?: string
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
}) {
  const [field, meta] = useField(props.name)
  const isInvalid = meta.error && meta.touched

  return <Field
    caption={props.caption}
    captionClassName={props.captionClassName}
    className={props.className}
    disabled={props.isDisabled}
    errorMessage={meta.error}
    label={props.label}
    labelClassName={props.labelClassName}
    isErrorMessageHidden={props.isErrorMessageHidden}
    isInvalid={isInvalid}
  >
    <FormikField
      {...field}
      className={props.inputClassName}
      disabled={props.isDisabled}
      labelClassName={props.labelClassName}
      onChange={props.onChange}
      type={props.type || 'input'}
      name={props.name}
    />
  </Field>
}
