import {navOptions, textColor} from "../../global-parameters/Parameters";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Link, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {centerVertHoriz} from "../../global-parameters/Styles";

export default function Footer() {

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Stack>
                        {navOptions.map((option: string, index: number) => (
                            <Typography variant='h6' component="div" sx={{flexGrow: 1}} key={index}>
                                <Link href={`${option}`}
                                      sx={{color: textColor}}>
                                    {option.toUpperCase()}
                                </Link>
                            </Typography>
                        ))}
                    </Stack>
                    <Stack>
                        <Typography sx={{...centerVertHoriz}}>Copyright Hofffman's
                            Harvest {new Date().getFullYear()}</Typography>
                        <Typography sx={{...centerVertHoriz}}>All Rights Reserved</Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}
