import { deepmerge } from "deepmerge-ts";
import { DeepPartial } from "../../interfaces";

import type { IUIColors } from "../interfaces";
import type { ICommonColors } from "../interfaces/common";

import { BUTTONS_PALETTE } from "./buttons";
import { ICONS_PALETTE } from "./icons";
import { INPUT_PALETTE } from "./inputs";
import { ALERTS_PALETTE } from "./alerts";
import { CHIPS_PALETTE } from "./chips";

import { TEXT_PALETTE } from './text'

const COMMON_PALETTE: ICommonColors = {
    text: TEXT_PALETTE
}

const MAIN_UI_PALETTE: IUIColors = {
    buttons: BUTTONS_PALETTE,
    icons: ICONS_PALETTE,
    input: INPUT_PALETTE,
    alerts: ALERTS_PALETTE,
    common: COMMON_PALETTE,
    chips: CHIPS_PALETTE
}

const makeProjectColors = (colors: DeepPartial<IUIColors> = {}): IUIColors => {
    return deepmerge(MAIN_UI_PALETTE, colors) as IUIColors
}

export { MAIN_UI_PALETTE, makeProjectColors }