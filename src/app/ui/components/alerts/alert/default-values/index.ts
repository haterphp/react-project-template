import { deepmerge } from "deepmerge-ts"
import { IAlertProps, ISpecialAlertProps } from "../interfaces"

type SpecialAlertProps = Required<Pick<ISpecialAlertProps, 'variant' | 'color'>>
type RequiredMergedButtonProps = IAlertProps & SpecialAlertProps

const DEFAULT_ALERT_PROPS: SpecialAlertProps = {
    variant: 'standart',
    color: 'primary',
}

const mergeAlertProps = (props: IAlertProps): RequiredMergedButtonProps => {
    return deepmerge<[SpecialAlertProps, IAlertProps]>(DEFAULT_ALERT_PROPS, props) as RequiredMergedButtonProps
}

export { mergeAlertProps }