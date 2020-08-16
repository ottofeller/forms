import {ChangeEvent, ReactNode, useCallback} from 'react'
import {Field as FormikField, useField} from 'formik'
import {Field} from '../common/Field'
import React from 'react'
import {useOnChangeWithInstantValidation} from '../common/hooks'

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
  const [field, meta, form] = useField(props.name)
  const isInvalid = meta.error && meta.touched
  const onChange = useOnChangeWithInstantValidation({field, form, onChange: props.onChange})

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
      onChange={onChange}
      type="radio"
      name={props.name}
      value={props.value}
    />

    <span className={props.captionClassName}>{props.caption}</span>
  </Field>
}
