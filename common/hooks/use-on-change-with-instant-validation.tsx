import {ChangeEvent, useCallback} from 'react'
import {FieldHelperProps, FieldInputProps} from 'formik'

export const useOnChangeWithInstantValidation = (params: {
  field: FieldInputProps<any>
  form: FieldHelperProps<any>
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
}) => {
  const {field, form, onChange} = params

  return useCallback((event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    // Make sure that error message appears instantly (not waiting for blur) as user types in
    form.setTouched(true)

    field.onChange(event)

    if(typeof onChange === 'function') {
      onChange(event)
    }
  }, [form, field, onChange])
}
