import { PropsWithChildren } from "react"
import { PartialRecord } from "../../../common"

/**
 * Union button types
 */

type ButtonVariants = 'filled' | 'outlined' | 'smooth' | 'text'
type ButtonColors = 'primary' | 'secondary' | 'success' | 'warning' | 'error'
type ButtonSizes = 'small' | 'medium' | 'large'
type ButtonIcons = PartialRecord<'start' | 'end', JSX.Element>

/**
 * Base html button props
 */

type HTMLButtonProps = Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'color'>;

interface IHTMLButtonProps extends HTMLButtonProps {
    type: Required<Exclude<HTMLButtonProps['type'], undefined>>
}

/**
 * Asseble button props
 */

interface ISpecialButtonProps {
    variant?: ButtonVariants
    color?: ButtonColors
    size?: ButtonSizes
    icons?: ButtonIcons
    isIcon?: boolean
}

interface IButtonProps extends IHTMLButtonProps, PropsWithChildren, ISpecialButtonProps {}

export type { 
    IButtonProps, 
    ISpecialButtonProps,
    ButtonColors, 
    ButtonSizes, 
    ButtonVariants
}