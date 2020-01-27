import * as R from 'ramda'
import {Field as FormikField, useField} from 'formik'
import {Field} from '../common/Field'
import React from 'react'

export function Select(props: {
  caption?: string
  captionClassName?: string
  className?: string
  errorMessageClassName?: string
  isDisabled?: boolean
  isErrorMessageHidden?: boolean
  label?: string
  labelClassName?: string
  name: string
  options: {value: string, label: string}[]
  selectBoxClassName?: string
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
    isErrorMessageHidden={props.isErrorMessageHidden}
    isInvalid={isInvalid}
    label={props.label}
    labelClassName={props.labelClassName}
  >
    <FormikField as="select" className={props.selectBoxClassName} {...field}>
      {R.map(option => <option key={option.value} value={option.value}>{option.label}</option>, props.options)}
    </FormikField>
  </Field>
}
