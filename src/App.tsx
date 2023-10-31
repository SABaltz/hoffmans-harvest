import React from 'react';
import './App.css';
import HomePage from "./components/home-page/HomePage";
import {ThemeProvider} from "@mui/material";
import {plantTheme} from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
    return (
        <ThemeProvider theme={plantTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<><HomePage/></>}></Route>
                    <Route path="/home" element={<><HomePage/></>}></Route>
                    {/*<Route path="/about" element={<><About/></>}></Route>*/}
                    {/*<Route path="/code" element={<><Code/></>}></Route>*/}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
