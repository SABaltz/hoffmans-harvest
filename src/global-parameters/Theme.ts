import {createTheme} from "@mui/material";
import {colorPalette} from "./Parameters";

export const plantTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: colorPalette.primary,
        },
        secondary: {
            main: colorPalette.secondary
        }

    },
    typography: {
        fontFamily: 'poppins',
        h1: {color: colorPalette.secondary},
        h2: {color: colorPalette.secondary},
        h3: {color: colorPalette.secondary},
        h4: {color: colorPalette.secondary},
        h5: {color: colorPalette.secondary},
        h6: {color: colorPalette.secondary},
        subtitle1: {color: colorPalette.secondary},
        subtitle2: {color: colorPalette.secondary},

    },
})
