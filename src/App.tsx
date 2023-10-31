import React from 'react';
import './App.css';
import HomePage from "./components/home-page/HomePage";
import {ThemeProvider} from "@mui/material";
import {plantTheme} from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import NavBar from "./components/nav-bar/NavBar";
function App() {
    return (
        <ThemeProvider theme={plantTheme}>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<><HomePage/></>}></Route>
                    <Route path="/home" element={<><HomePage/></>}></Route>
                    <Route path="/about" element={<><About/></>}></Route>
                    <Route path="/work" element={<><Work/></>}></Route>
                    <Route path="/contact" element={<><Contact/></>}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
