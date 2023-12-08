import { IUIButtonsColors } from "./buttons"
import { IUIIconsColors } from "./icons"
import { IUIInputColors } from "./input"
import { IUIAlertsColors } from "./alerts"
import { IUIChipsColors } from "./chips"
import { ICommonColors } from "./common"

interface IUIColors {
    buttons: IUIButtonsColors
    icons: IUIIconsColors
    input: IUIInputColors
    alerts: IUIAlertsColors
    chips: IUIChipsColors
    common: ICommonColors
}

export type { IUIColors }