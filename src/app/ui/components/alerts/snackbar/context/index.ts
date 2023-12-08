import { createContext, useContext } from "react";

import { ISnackbarContext } from "../interfaces";

const DEFAULT_CONTEXT_VALUES: ISnackbarContext = {
    enqueueSnackbar: () => {
        return ''
    },
    dequeueSnackbar: () => {
        //
    }
}

const SnackbarContext = createContext<ISnackbarContext>(DEFAULT_CONTEXT_VALUES)
const useSnackbar = (): ISnackbarContext => useContext(SnackbarContext)

export { SnackbarContext, useSnackbar }