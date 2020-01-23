import {Field as FormikField, useField} from 'formik'
import {ChangeEvent} from 'react'
import {Field} from '../common/Field'

export function Checkbox(props: {
  caption?: string
  captionClassName?: string
  className?: string
  checkboxClassName?: string
  isDisabled?: boolean
  isErrorMessageHidden?: boolean
  label?: string
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
    isDisabled={props.isDisabled}
    errorMessage={meta.error}
    isErrorMessageHidden={props.isErrorMessageHidden}
    isInvalid={isInvalid}
    label={props.label}
    labelClassName={props.labelClassName}
  >
    <input checked={Boolean(field.value)} className={props.checkboxClassName} type="checkbox" {...field} />
  </Field>
}
