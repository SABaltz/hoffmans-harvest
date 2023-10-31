import React from 'react';
import './App.css';
import HomePage from "./components/home-page/HomePage";
import {ThemeProvider} from "@mui/material";
import {plantTheme} from "./theme";

function App() {
    return (
        <ThemeProvider theme={plantTheme}>
            <HomePage/>
        </ThemeProvider>
    );
}

export default App;
