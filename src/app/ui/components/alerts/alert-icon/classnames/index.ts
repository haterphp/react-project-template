import { AlertColors, AlertVariants } from "../../alert"

const ALERT_ICON_CONTAINER = 'alert-icon'
const ALERT_ICON_CONTAINER_VARIANTS: Record<AlertVariants, string> = {
    standart: 'alert-icon--standart',
    filled: 'alert-icon--filled',
    rounded: 'alert-icon--rounded',
}
const ALERT_ICON_CONTAINER_COLORS: Record<AlertColors, string> = {
    primary: 'alert-icon--primary',
    success: 'alert-icon--success',
    warning: 'alert-icon--warning',
    error: 'alert-icon--error',
}

const makeAlertIconClassname = (variant: AlertVariants, color: AlertColors): string[] => {
    return [
        ALERT_ICON_CONTAINER, 
        ALERT_ICON_CONTAINER_COLORS[color],
        ALERT_ICON_CONTAINER_VARIANTS[variant],
    ]
}

export { makeAlertIconClassname }