import {createTheme} from "@mui/material";
import {globalParams} from "./Parameters";

export const plantTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: globalParams.colorPalette.primary,
        },
        secondary: {
            main: globalParams.colorPalette.secondary
        }

    },
    typography: {
        fontFamily: 'poppins',
        h1: {color: globalParams.colorPalette.secondary},
        h2: {color: globalParams.colorPalette.secondary},
        h3: {color: globalParams.colorPalette.secondary},
        h4: {color: globalParams.colorPalette.secondary},
        h5: {color: globalParams.colorPalette.secondary},
        h6: {color: globalParams.colorPalette.secondary},
        subtitle1: {color: globalParams.colorPalette.secondary},
        subtitle2: {color: globalParams.colorPalette.secondary},

    },
})
