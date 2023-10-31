import {createTheme} from "@mui/material";

let textColor = '#dcdcdc'
export const plantTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#103f03',
        },
        secondary: {
            main: '#7a7a7a'
        }

    },
    typography: {
        fontFamily: 'poppins',
        h1: {color: textColor},
        h2: {color: textColor},
        h3: {color: textColor},
        h4: {color: textColor},
        h5: {color: textColor},
        h6: {color: textColor}
    },
})
