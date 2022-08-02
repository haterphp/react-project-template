import {useAuthConfirmFn} from "@core/auth";
import {useState} from "react";

export const useAuthConfirm: useAuthConfirmFn = (setAuthData) => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 1500)
    return { isLoading: loading, Loader: ({ visible }) => <>{visible && "Loading..." }</> }
}
