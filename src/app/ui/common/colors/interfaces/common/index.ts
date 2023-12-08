interface ITextColors {
    white: string
    dark: Record<'main' | 'secondary', string> 
}

interface ICommonColors {
    text: ITextColors
}

export type { ITextColors, ICommonColors }