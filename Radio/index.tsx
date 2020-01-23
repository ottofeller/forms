import {ChangeEvent, ReactNode, useCallback} from 'react'
import {Field as FormikField, useField} from 'formik'
import {Field} from '../common/Field'
import React from 'react'

export function Radio(props: {
  captionClassName?: string
  className?: string
  isDisabled?: boolean
  isErrorMessageHidden?: boolean
  label?: string
  labelClassName?: string
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  radioClassName?: string
  caption: string | ReactNode
  value?: any
}) {
  const [field, meta] = useField(props.name)
  const isInvalid = meta.error && meta.touched

  const change = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    field.onChange(event)

    if(typeof props.onChange === 'function')
      props.onChange(event)
  }, [field, props])

  return <Field
    className={props.className}
    isDisabled={props.isDisabled}
    errorMessage={meta.error}
    isErrorMessageHidden={props.isErrorMessageHidden}
    isInvalid={isInvalid}
    label={props.label}
    labelClassName={props.labelClassName}
  >
    <FormikField
      {...field}
      className={props.radioClassName}
      disabled={props.isDisabled}
      onChange={change}
      type="radio"
      name={props.name}
      value={props.value}
    />

    <span className={props.captionClassName}>{props.caption}</span>
  </Field>
}
