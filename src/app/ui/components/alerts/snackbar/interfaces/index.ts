import type { PropsWithChildren } from "react";

import type { AlertColors, AlertVariants } from "../../alert";

/**
 * Snackbar common types
 */

type SnackbarId = string

interface ISnackbarOptions {
    variant: AlertVariants
    color: AlertColors
    duration: number
}

interface ISnackbarMessage {
    id: SnackbarId
    message: string
    options: ISnackbarOptions
    onCloseCallback(): void
}

/**
 * Snackbar functions
 */

interface IEnqueueSnackbarPayload {
    message: string
    options?: Partial<ISnackbarOptions>
}

type EnqueueSnackbarFunction = (payload: IEnqueueSnackbarPayload) => SnackbarId
type DequeueSnackbarFunction = (id: SnackbarId) => void

/**
 * Snackbar context
 */

interface ISnackbarContext {
    enqueueSnackbar: EnqueueSnackbarFunction
    dequeueSnackbar: DequeueSnackbarFunction
}

/**
 * Snackbar props
 */

interface ISnackbarProps extends PropsWithChildren, Partial<ISnackbarOptions> {}

export type { 
    ISnackbarProps, 
    ISnackbarContext,
    EnqueueSnackbarFunction,
    DequeueSnackbarFunction,
    SnackbarId,
    IEnqueueSnackbarPayload,
    ISnackbarOptions,
    ISnackbarMessage
}