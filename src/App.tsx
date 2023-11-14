import React, {createContext} from 'react';
import {ThemeProvider} from '@mui/material';
import {plantTheme} from './global-parameters/Theme';
import NavBar from './components/nav-bar/NavBar';
import {globalParams} from "./global-parameters/Parameters";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portal from "./components/portal/Portal";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";

export const ParameterContext = createContext(globalParams);

function App() {

    return (
        <ThemeProvider theme={plantTheme}>
            <ParameterContext.Provider value={globalParams}>
                <NavBar/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home"/>}/>
                        <Route path="/home" element={<HomePage/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/work" element={<Work/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/portal" element={<Portal/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </ParameterContext.Provider>
        </ThemeProvider>
    );
}

export default App;
