import { ChipColors, ChipSizes, ChipVariants } from "../interfaces"

const DEFAULT_CHIP_CLASSNAME = 'chip'
const ROUNDED_CHIP_CLASSNAME = 'chip--rounded'
const HOVERED_CHIP_CLASSNAME = 'chip--hovered'

const CHIP_VARIANTS_CLASSNAMES: Record<ChipVariants, string> = {
    smooth: 'chip--smooth',
    outlined: 'chip--outlined',
}

const CHIP_SIZES_CLASSNAMES: Record<ChipSizes, string> = {
    small: 'chip--small',
    medium: 'chip--medium',
    large: 'chip--large',
}

const CHIP_COLORS_CLASSNAMES: Record<ChipColors, string> = {
    primary: 'chip--primary',
    secondary: 'chip--secondary',
    warning: 'chip--warning',
    error: 'chip--error',
    success: 'chip--success',
}

interface IChipClassnameProps {
    variant: ChipVariants,
    size: ChipSizes,
    color: ChipColors,
    isRounded: boolean
    isHovered: boolean
}

const makeChipClassname = (props: IChipClassnameProps): (string | boolean)[] => {
    const { variant, color, size, isHovered, isRounded } = props
    return [
        DEFAULT_CHIP_CLASSNAME, 
        isRounded && ROUNDED_CHIP_CLASSNAME,
        isHovered && HOVERED_CHIP_CLASSNAME,
        CHIP_VARIANTS_CLASSNAMES[variant], 
        CHIP_SIZES_CLASSNAMES[size],
        CHIP_COLORS_CLASSNAMES[color],
    ]
}

export { makeChipClassname }