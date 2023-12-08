import { ButtonColors, ButtonSizes, ButtonVariants, ISpecialButtonProps } from "../interfaces";

type ButtonClassnameProps = Required<Pick<ISpecialButtonProps, 'variant' | 'color' | 'isIcon' | 'size'>>

const BUTTON_VARIANTS: Record<ButtonVariants, string> = {
    filled: 'btn--filled',
    outlined: 'btn--outlined',
    smooth: 'btn--smooth',
    text: 'btn--text',
}

const BUTTON_SIZES: Record<Exclude<ButtonSizes, 'medium'>, string> = {
    small: 'btn--small',
    large: 'btn--large',
}

const BUTTON_COLORS: Record<ButtonColors, string> = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    success: 'btn--success',
    warning: 'btn--warning',
    error: 'btn--error',
}

const IS_ICON_BUTTON = 'btn-icon'

const BUTTON_CONTENT_CLASSNAME = 'btn-content'

function makeButtonClassname(props: ButtonClassnameProps): string[] {

    const { variant, color, size, isIcon } = props

    const classNames = [
        BUTTON_VARIANTS[variant],
        BUTTON_COLORS[color],
    ]

    if (size !== 'medium') classNames.push(BUTTON_SIZES[size])
    if (isIcon) classNames.push(IS_ICON_BUTTON)

    return classNames
}

export { makeButtonClassname, BUTTON_CONTENT_CLASSNAME }