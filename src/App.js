import React from 'react';
import {ThemeProvider} from '@mui/material';
import {plantTheme} from './global-parameters/Theme';
import NavBar from './components/nav-bar/NavBar';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portal from "./components/portal/Portal";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";
import {globalParams} from "./global-parameters/Parameters";


function App() {
    return (
        <ThemeProvider theme={plantTheme}>
            <NavBar parameters={globalParams}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<HomePage parameters={globalParams}/>}/>
                    <Route path="/about" element={<About parameters={globalParams}/>}/>
                    <Route path="/work" element={<Work parameters={globalParams}/>}/>
                    <Route path="/contact" element={<Contact parameters={globalParams}/>}/>
                    <Route path="/portal" element={<Portal parameters={globalParams}/>}/>
                </Routes>
            </BrowserRouter>
            <Footer parameters={globalParams}/>
        </ThemeProvider>
    );
}

export default App;
