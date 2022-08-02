import {ConnectionData} from "@core/service";
import {TOKEN_KEY_NAME} from "@core/auth";

/**
 * URL`s
 */
const baseURL = process.env.REACT_APP_API_HOST;

export default [
    // {
    //     baseURL,
    //     label: "app",
    //     defaultHeaders: { 'Content-Type': 'application/json' },
    //     options: {
    //         interceptors: { request: true },
    //         getTokenStrategy: () => window.localStorage.getItem(TOKEN_KEY_NAME)
    //     },
    // }
] as ConnectionData[]
