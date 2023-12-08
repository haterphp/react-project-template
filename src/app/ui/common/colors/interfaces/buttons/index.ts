type ButtonColorVariants = 'default' | 'hovered' | 'pressed' | 'focused'
type ButtonColorList = Record<ButtonColorVariants, string>

export interface IUIButtonsColors {
    primary: ButtonColorList,
    secondary: ButtonColorList,
    success: ButtonColorList,
    warning: ButtonColorList,
    error: ButtonColorList,
    disabled: string
}