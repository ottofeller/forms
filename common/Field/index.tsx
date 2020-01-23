import cn from 'classnames'
import {ReactNode} from 'react'

export function Field(props: {
  caption?: string
  captionClassName?: string
  children?: ReactNode
  className?: string
  errorMessage?: string
  isDisabled?: boolean
  isErrorMessageHidden?: boolean
  isInvalid?: boolean
  label?: string
  labelClassName?: string
}) {
  return <div
    className={cn(props.className, {'is-disabled': props.isDisabled, 'is-invalid': props.isInvalid})}
  >
    {props.label && <label className={props.labelClassName}>{props.label}</label>}
    {props.children}
    {props.caption && <span className={props.captionClassName}>{props.caption}</span>}

    {props.isInvalid && props.errorMessage && !props.isErrorMessageHidden && <div className="error-message">
      {props.errorMessage}
    </div>}
  </div>
}
