import * as R from 'ramda'
import {Field as FormikField, useField} from 'formik'
import {ChangeEvent} from 'react'
import {Field} from '../common/Field'

export function Select(props: {
  caption?: string
  captionClassName?: string
  className?: string
  isDisabled?: boolean
  isErrorMessageHidden?: boolean
  labelClassName?: string
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  options: {value: string, label: string}[]
  placeholder?: string
  selectBoxClassName?: string
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
    <FormikField as="select" className={props.selectBoxClassName} {...field}>
      {R.map(option => <option key={option.value} value={option.value}>{option.label}</option>, props.options)}
    </FormikField>
  </Field>
}
