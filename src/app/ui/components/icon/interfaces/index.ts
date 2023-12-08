/**
 * Base types
 */
type IconColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
type IconSizes = 'small' | 'normal' | 'large'


/**
 * Icon context
 */

interface IIconContext {
    color?: IconColors
    size?: IconSizes
}

/**
 * Create icon function
 */

type IIconCreateFunctionOptions = Record<string, any>

interface IIconClassnameCreateFunctionPayload {
    fill?: boolean
    stroke?: boolean
}

type IconClassnameCreateFunction = (options: IIconClassnameCreateFunctionPayload) => string | undefined

interface IIconCreateFunctionPayload {
    id?: string
    options?: IIconCreateFunctionOptions
    className: IconClassnameCreateFunction,
}

type IconCreateFunction = (payload: IIconCreateFunctionPayload) => JSX.Element

/**
 * Icon component props
 */

type IHTMLIconProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'content'>

interface IIconProps extends IHTMLIconProps {
    color?: IconColors
    size?: IconSizes
    options?: IIconCreateFunctionOptions
    content: IconCreateFunction
}

type IExtenalIconProps = Omit<IIconProps, 'content'>

export type { 
    IIconProps,
    IIconContext,
    IconColors,
    IconSizes,
    IExtenalIconProps,
    IIconCreateFunctionPayload,
    IconCreateFunction,
    IIconClassnameCreateFunctionPayload,
    IconClassnameCreateFunction,
}