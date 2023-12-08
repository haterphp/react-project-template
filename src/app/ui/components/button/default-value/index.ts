import { deepmerge } from "deepmerge-ts"
import { IButtonProps, ISpecialButtonProps } from ".."

type RequiredMergedButtonProps = IButtonProps & Required<ISpecialButtonProps>

const DEFAULT_BUTTON_PROPS: Required<ISpecialButtonProps> = {
    variant: 'filled',
    color: 'primary',
    size: 'medium',
    isIcon: false,
    icons: {},
}

const mergeButtonProps = (props: IButtonProps): RequiredMergedButtonProps => {
    return deepmerge<[Required<ISpecialButtonProps>, IButtonProps]>(DEFAULT_BUTTON_PROPS, props) as RequiredMergedButtonProps
}

export { mergeButtonProps }