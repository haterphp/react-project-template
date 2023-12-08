import { InputVariant } from ".."

const INPUT_GROUP_CLASSNAME = 'input-group'
const INPUT_GROUP_FAILED_CLASSNAME = 'input-group--failed'
const INPUT_GROUP_FOCUSED_CLASSNAME = 'input-group--focused'

const INPUT_LABEL_CLASSNAME = 'input-label'
const INPUT_FEEDBACK_CLASSNAME = 'input-feedback'

const INNER_INPUT_CLASSNAME = 'input-inner'
const DEFAULT_INPUT_CLASSNAME = 'input'
const INPUT_VARIANTS: Record<InputVariant, string> = {
    outlined: 'input-outlined',
    standard: 'input-standard',
} 

const INPUT_ICON_CLASSNAME = 'input-icon'

const makeInputClassname = (variant: InputVariant) => {
    return [DEFAULT_INPUT_CLASSNAME, INPUT_VARIANTS[variant]]
}

const makeInputIconClassname = (position: 'start' | 'end') => {
    return [INPUT_ICON_CLASSNAME, `${INPUT_ICON_CLASSNAME}--${position}`]
}

export { 
    INPUT_GROUP_CLASSNAME,
    INPUT_LABEL_CLASSNAME,
    INPUT_FEEDBACK_CLASSNAME,
    INPUT_GROUP_FAILED_CLASSNAME,
    INPUT_GROUP_FOCUSED_CLASSNAME,
    INNER_INPUT_CLASSNAME,
    makeInputClassname,
    makeInputIconClassname
}