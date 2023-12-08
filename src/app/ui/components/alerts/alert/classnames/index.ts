import { AlertColors, AlertVariants } from "../interfaces"

/**
 * Alert classnames
 */

const DEFAULT_ALERT_CLASSNAME = 'alert'
const VARIANTS_ALERT_CLASSNAMES: Record<AlertVariants, string> = {
    standart: 'alert--standart',
    filled: 'alert--filled',
    rounded: 'alert--rounded',
}
const COLORS_ALERT_CLASSNAMES: Record<AlertColors, string>  = {
    primary: 'alert--primary',
    error: 'alert--error',
    success: 'alert--success',
    warning: 'alert--warning',
}

const makeAlertClassname = (variant: AlertVariants, color: AlertColors): string[] => {
    return [
        DEFAULT_ALERT_CLASSNAME, 
        VARIANTS_ALERT_CLASSNAMES[variant], 
        COLORS_ALERT_CLASSNAMES[color]
    ]
}

/**
 * Title & Description classnames
 */

const ALERT_TITLE_CLASSNAME = 'alert-title'
const DESCRIPTION_TITLE_CLASSNAME = 'alert-description'

export { 
    makeAlertClassname,
    ALERT_TITLE_CLASSNAME,
    DESCRIPTION_TITLE_CLASSNAME
}