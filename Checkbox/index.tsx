import React, {ChangeEvent} from 'react'
import {Field} from '../common/Field'
import {useField} from 'formik'
import {useOnChangeWithInstantValidation} from '../common/hooks'

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
  const [field, meta, form] = useField(props.name)
  const isInvalid = Boolean(meta.error && meta.touched)
  const onChange = useOnChangeWithInstantValidation({field, form, onChange: props.onChange})

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
    <input
      checked={Boolean(field.value)}
      className={props.checkboxClassName}
      type="checkbox"
      {...field}
      onChange={onChange}
    />
  </Field>
}
