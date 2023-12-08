import { IconColors, IconSizes, IIconClassnameCreateFunctionPayload } from "../interfaces"

const BASE_ICON_CLASSNAME = 'icon'
const INNER_ICON_CLASSNAME = 'icon-inner'

const INNER_ICON_FILL ='icon-inner--fill'
const INNER_ICON_STROKE ='icon-inner--stroke'

const ICON_COLORS: Record<IconColors, string> = {
    default: 'icon-inner--default',
    primary: 'icon-inner--primary',
    secondary: 'icon-inner--secondary',
    success: 'icon-inner--success',
    warning: 'icon-inner--warning',
    error: 'icon-inner--error',
}

const ICON_SIZES: Record<IconSizes, string | undefined> = {
    small: 'icon--small',
    normal: undefined,
    large: 'icon--large',
}

const makeInnerIconClassname = (
    color: IconColors,
    options: IIconClassnameCreateFunctionPayload
): (string | boolean | undefined)[] => {
    return [
        INNER_ICON_CLASSNAME, 
        options.fill && INNER_ICON_FILL,
        options.stroke && INNER_ICON_STROKE,
        ICON_COLORS[color]
    ]
}

const makeIconClassname = (size: IconSizes): (string | boolean | undefined)[] => {
    return [BASE_ICON_CLASSNAME, ICON_SIZES[size]]
}

export {
    makeIconClassname,
    makeInnerIconClassname
}