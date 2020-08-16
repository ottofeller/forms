import * as R from 'ramda'
import {Field as FormikField, useField} from 'formik'
import React, {ChangeEvent, useCallback} from 'react'
import {Field} from '../common/Field'
import {useOnChangeWithInstantValidation} from '../common/hooks'

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
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  options: {value: string, label: string}[]
  selectBoxClassName?: string
}) {
  const [field, meta, form] = useField(props.name)
  const isInvalid = meta.error && meta.touched
  const onChange = useOnChangeWithInstantValidation({field, form, onChange: props.onChange})

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
    <FormikField
      as="select"
      className={props.selectBoxClassName}
      {...field}
      onChange={onChange}
    >
      {R.map(option => <option key={option.value} value={option.value}>{option.label}</option>, props.options)}
    </FormikField>
  </Field>
}
