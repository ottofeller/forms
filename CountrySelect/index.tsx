import * as R from 'ramda'
import React, {memo} from 'react'
import {countryOptions} from './country-options'
import {Select} from '../Select'
export {countryOptions}

export const CountrySelect = memo(function CountrySelect(props: {
  caption?: string
  captionClassName?: string
  className?: string
  errorMessageClassName?: string
  isDisabled?: boolean
  isErrorMessageHidden?: boolean
  label?: string
  labelClassName?: string
  name: string
  selectBoxClassName?: string
}) {
  return <Select
    caption={props.caption}
    captionClassName={props.captionClassName}
    className={props.className}
    errorMessageClassName={props.errorMessageClassName}
    isDisabled={props.isDisabled}
    isErrorMessageHidden={props.isErrorMessageHidden}
    label={props.label}
    labelClassName={props.labelClassName}
    name={props.name}
    options={R.concat([{label: '', value: ''}], countryOptions)}
    selectBoxClassName={props.selectBoxClassName}
  />
})
