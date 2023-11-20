import React, {useEffect, useState} from 'react';
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
    const [parameters, setParameters] = useState(() => {
        const storedParams = localStorage.getItem('parameters');
        return storedParams ? JSON.parse(storedParams) : globalParams;
    });

    useEffect(() => {
        localStorage.setItem('parameters', JSON.stringify(parameters));
    }, [parameters]);

    return (
        <>
            <ThemeProvider theme={plantTheme}>
                <NavBar parameters={parameters}/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home"/>}/>
                        <Route path="/home" element={<HomePage parameters={parameters}/>}/>
                        <Route path="/about" element={<About parameters={parameters}/>}/>
                        <Route path="/work" element={<Work parameters={parameters}/>}/>
                        <Route path="/contact" element={<Contact parameters={parameters}/>}/>
                        <Route path="/portal"
                               element={<Portal parameters={parameters} setParameters={setParameters}/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer parameters={parameters}/>
            </ThemeProvider>
        </>
    );
}

export default App;
