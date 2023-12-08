import { deepmerge } from "deepmerge-ts"
import { ISnackbarOptions } from "../interfaces"

const DEFAULT_SNACKBAR_OPTIONS: ISnackbarOptions = {
    variant: 'standart',
    color: 'primary',
    duration: 2000
}

const mergeSnackbarOptions = (options: Partial<ISnackbarOptions>, defaultOptions: ISnackbarOptions = DEFAULT_SNACKBAR_OPTIONS): ISnackbarOptions => {
    return deepmerge(defaultOptions, options) as ISnackbarOptions
}

export { mergeSnackbarOptions }