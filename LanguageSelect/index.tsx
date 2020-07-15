import React, {memo} from 'react'
import {languageOptions} from './language-options'
import {Select} from '../Select'
export {languageOptions}

export const LanguageSelect = memo(function LanguageSelect(props: {
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
        options={languageOptions}
        selectBoxClassName={props.selectBoxClassName}
    />
})
