import { deepmerge } from "deepmerge-ts"
import { IChipProps, ISpecialChipProps } from "../interfaces"
type OmittedSpecialCuipProps = Required<Omit<ISpecialChipProps, 'icon' | 'onIconClick'>>
type RequiredMergedChipProps = IChipProps & OmittedSpecialCuipProps

const DEFAULT_CHIP_PROPS: OmittedSpecialCuipProps = {
    label: '',
    variant: 'smooth',
    size: 'medium',
    color: 'primary',
    isRounded: false,
    iconPosition: "start",
}

const mergeChipProps = (props: IChipProps): RequiredMergedChipProps => {
    return deepmerge<[OmittedSpecialCuipProps, IChipProps]>(DEFAULT_CHIP_PROPS, props) as RequiredMergedChipProps
}

export { mergeChipProps }