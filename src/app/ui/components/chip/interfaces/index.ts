import { MouseEventHandler } from "react"

type ChipVariants = 'smooth' | 'outlined'
type ChipSizes = 'large' | 'medium' | 'small'
type ChipColors = 'primary' | 'secondary' | 'success' | 'warning' | 'error'
type ChipIconPosition = 'start' | 'end'

interface ISpecialChipProps {
    label: string
    
    variant?: ChipVariants
    size?: ChipSizes
    color?: ChipColors
    
    isRounded?: boolean

    iconPosition?: ChipIconPosition
    icon?: JSX.Element

    onIconClick?: MouseEventHandler
}

type IHTMLChipProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'content' | 'children' | 'color'>

interface IChipProps extends IHTMLChipProps, ISpecialChipProps {}

export type { 
    IChipProps, 
    ISpecialChipProps,
    ChipVariants,
    ChipSizes,
    ChipColors,
    ChipIconPosition
}