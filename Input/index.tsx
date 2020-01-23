import {Field as FormikField, useField} from 'formik'
import {ChangeEvent} from 'react'
import {Field} from '../common/Field'
import {useField} from 'formik'

export function Input(props: {
  caption?: string
  captionClassName?: string
  className?: string
  inputClassName?: string
  isDisabled?: boolean
  isErrorMessageHidden?: boolean
  labelClassName?: string
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type: string
}) {
  const [field, meta] = useField(props.name)
  const isInvalid = meta.error && meta.touched

  return <Field
    caption={props.caption}
    captionClassName={props.captionClassName}
    className={props.className}
    disabled={props.isDisabled}
    errorMessage={meta.error}
    isErrorMessageHidden={props.isErrorMessageHidden}
    isInvalid={isInvalid}
  >
    <FormikField
      {...field}
      className={props.inputClassName}
      disabled={props.isDisabled}
      labelClassName={props.labelClassName}
      onChange={props.onChange}
      type="input"
      name={props.name}
    />
  </Field>
}