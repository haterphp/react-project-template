import { IUIColors } from "../../interfaces";

const CHIPS_PALETTE: IUIColors['chips'] = {
    primary: {
        default: "#367BF5",
        hovered: "#295DBA",
        pressed: "#1C407F",
        focused: "#A1C3FF",
    },
    secondary: {
        default: "#8334eb",
        hovered: "#6826bf",
        pressed: "#49178a",
        focused: "#9e59f7",
    },
    success: {
        default: "#41B15A",
        hovered: "#2a8c40",
        pressed: "#135722",
        focused: "#328f48",
    },
    warning: {
        default: "#EBAC0C",
        hovered: "#d1990a",
        pressed: "#b08109",
        focused: "#fcde90",
    },
    error: {
        default: "#EA2929",
        hovered: "#c22121",
        pressed: "#a31a1a",
        focused: "#fca9a9",
    },
    disabled: '#B0B5BB'
}

export { CHIPS_PALETTE }
