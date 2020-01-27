
import {Field as FormikField, useField} from 'formik'
import {ChangeEvent} from 'react'
import {Field} from '../common/Field'
import React from 'react'

export function Input(props: {
  caption?: string
  captionClassName?: string
  className?: string
  errorMessageClassName?: string
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
    errorMessageClassName={props.errorMessageClassName}
    isDisabled={props.isDisabled}
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
      placeholder={props.placeholder}
      type={props.type || 'input'}
      name={props.name}
    />
  </Field>
}
