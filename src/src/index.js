import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.css";
import { AuthProvider } from "./lib/auth";
import { ThemeProvider } from "@material-ui/styles";
import customTheme from "./styles/theme";

ReactDOM.render(
    <ThemeProvider theme={customTheme}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </ThemeProvider>
    ,
    document.getElementById("root")
);
