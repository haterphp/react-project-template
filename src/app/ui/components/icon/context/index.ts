import { createContext, useContext } from "react";
import { IIconContext, IconColors, IconSizes } from "../interfaces";

const IconContext = createContext<IIconContext>({})

const useIconContext = (): IIconContext => useContext(IconContext)

const createIconContextPayload = (color?: IconColors, size?: IconSizes) => {
    return { color, size }
}

export { IconContext, useIconContext, createIconContextPayload }