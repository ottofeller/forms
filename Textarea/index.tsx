import {Field as FormikField, useField} from 'formik'
import {Field} from '../common/Field'
import React from 'react'
import {useOnChangeWithInstantValidation} from '../common/hooks'

export const Textarea = React.memo(function (props: {
  caption?: string
  captionClassName?: string
  className?: string
  controlClassName?: string
  errorMessageClassName?: string
  isDisabled?: boolean
  isErrorMessageHidden?: boolean
  label?: string
  labelClassName?: string
  name: string
  placeholder?: string
}) {
  const [field, meta, form] = useField(props.name)
  const isInvalid = Boolean(meta.error && meta.touched)
  const onChange = useOnChangeWithInstantValidation({field, form})

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
      as="textarea"
      className={props.controlClassName}
      disabled={props.isDisabled}
      placeholder={props.placeholder}
      name={props.name}
      onChange={onChange}
    />
  </Field>
})
