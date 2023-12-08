/**
 * Base types
 */
type AlertVariants = 'standart' | 'filled' | 'rounded'
type AlertColors = 'primary' | 'success' | 'warning' | 'error'


/**
 * Alert component props
 */

interface ISpecialAlertProps {
    title: string
    description?: string
    variant?: AlertVariants
    color?: AlertColors
    RightContent?: JSX.Element
}

type IHTMLAlertProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type IAlertProps = ISpecialAlertProps & IHTMLAlertProps

export type { 
    IAlertProps, 
    IHTMLAlertProps, 
    ISpecialAlertProps, 
    AlertColors, 
    AlertVariants
}