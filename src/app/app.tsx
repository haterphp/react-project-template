import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";

import RouterProvider from "@core/router";
import AuthProvider from "@core/auth";

import theme from "./theme";
import {useAuthConfirm} from "./auth";
import router from "./router";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AuthProvider useAuthConfirm={useAuthConfirm}>
                <RouterProvider routes={router}/>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
