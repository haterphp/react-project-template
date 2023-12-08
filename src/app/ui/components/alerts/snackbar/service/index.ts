import { useState } from "react"

import { v4 as uuid } from 'uuid'

import { mergeSnackbarOptions } from "../default-values"

import type { 
    DequeueSnackbarFunction, 
    EnqueueSnackbarFunction,
    ISnackbarContext, 
    ISnackbarMessage, 
    ISnackbarOptions, 
    SnackbarId
} from "../interfaces"

interface ISnackbarService extends ISnackbarContext {
    renderData: ISnackbarMessage[]
}

const useSnackbarService = (defaultOptions: ISnackbarOptions): ISnackbarService => {
    const [queue, setQueue] = useState<ISnackbarMessage[]>([])

    const enqueueSnackbar: EnqueueSnackbarFunction = (payload): SnackbarId => {
        const options = mergeSnackbarOptions(payload.options ?? {}, defaultOptions)
        const id = uuid()
        
        setQueue((prev) => [...prev, { 
            id, 
            message: payload.message, 
            options,
            onCloseCallback: () => {
                dequeueSnackbar(id)
            }
        }])
        return id
    }

    const dequeueSnackbar: DequeueSnackbarFunction = (id: SnackbarId): void => {
        setQueue((prev) => {
            const idx = prev.findIndex((item) => item.id === id)
            
            if (idx === -1) return prev
            return [
                ...prev.slice(0, idx),
                ...prev.slice(idx + 1)
            ]   
        })
    }

    return {
        renderData: queue,
        enqueueSnackbar,
        dequeueSnackbar, 
    }
}

export { useSnackbarService }