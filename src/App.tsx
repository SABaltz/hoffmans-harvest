import React, {createContext, useContext} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from '@mui/material';
import {plantTheme} from './global-parameters/Theme';
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';
import HomePage from './components/home-page/HomePage';
import About from './components/about/About';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Portal from "./components/portal/Portal";
import {colorPalette} from "./global-parameters/Parameters";

export const ThemeContext = createContext('light');

function App() {

    return (
        <ThemeProvider theme={plantTheme}>
            <ThemeContext.Provider value="dark">
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
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export default App;
