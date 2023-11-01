import {navOptions, textColor} from "../../global-parameters/Parameters";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Grid, Link} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        {navOptions.map((option: string, index: number) => (
                            <Grid item xs={4} md={2} key={index}>
                                <Typography variant='h6' component="div" sx={{flexGrow: 1}}>
                                    <Link href={`${option}`}
                                          sx={{color: textColor}}>
                                        {option.toUpperCase()}
                                    </Link>
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
