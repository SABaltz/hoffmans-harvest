import {createTheme} from "@mui/material";
import {primaryColor, secondaryColor, textColor} from "./Parameters";

export const plantTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor
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
