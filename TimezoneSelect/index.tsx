import * as R from 'ramda'
import React, {memo} from 'react'
import {Select} from '../Select'
import {timeZoneOptions} from './timezone-options'
export {timeZoneOptions}

export const TimezoneSelect = memo(function TimezoneSelect(props: {
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
    options={R.concat([{label: '', value: ''}], timeZoneOptions)}
    selectBoxClassName={props.selectBoxClassName}
  />
})
