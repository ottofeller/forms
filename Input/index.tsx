import {Field as FormikField, useField} from 'formik'
import React, {ChangeEvent} from 'react'
import {Field} from '../common/Field'
import {useOnChangeWithInstantValidation} from '../common/hooks'

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
  const [field, meta, form] = useField(props.name)
  const isInvalid = Boolean(meta.error && meta.touched)
  const onChange = useOnChangeWithInstantValidation({field, form, onChange: props.onChange})

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
      onChange={onChange}
    />
  </Field>
}
