import {createContext, FC, PropsWithChildren, useContext, useState} from "react";

/**
 * Auth Context
 */

export const TOKEN_KEY_NAME = 'token'

type RouterContextProps = {
    isAuth: boolean;
    user: null | { role: string, user: any };
    setAuthData: <TUser, >(auth: RouterContextProps['isAuth'], user: RouterContextProps['user']) => void;
}

const defaultContextValue = {
    isAuth: false, user: null, setAuthData: () => {}
};
const AuthContext = createContext<RouterContextProps>(defaultContextValue);

export const useAuthContext = () => useContext(AuthContext);

export type useAuthConfirmFn = (setAuthData: RouterContextProps['setAuthData']) =>
    { isLoading: boolean, Loader: FC<{ visible: boolean }> };
type AuthProviderProps = {
    useAuthConfirm: useAuthConfirmFn
}

const AuthProvider = ({children, useAuthConfirm}: PropsWithChildren<AuthProviderProps>): JSX.Element | null => {
    const [isAuth, setIsAuth] = useState(defaultContextValue.isAuth);
    const [user, setUser] = useState<RouterContextProps['user']>(defaultContextValue.user);

    const setAuthData = (auth: RouterContextProps['isAuth'], user: RouterContextProps['user']) => {
        setIsAuth(auth);
        setUser(user);
    }

    const {Loader, isLoading} = useAuthConfirm(setAuthData)

    const newContext = {
        isAuth,
        user,
        setAuthData,
    }

    return (
        <AuthContext.Provider value={newContext}>
            <Loader visible={isLoading} />
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
