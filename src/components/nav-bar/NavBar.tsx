import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export default function NavBar(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Hoffman's Harvest
                    </Typography>
                    <Button color="inherit">
                        <Link href={'/home'}>
                            <Typography variant="h6">Home</Typography>
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href={'/about'}>
                            <Typography variant="h6">About</Typography>
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href={'/work'}>
                            <Typography variant="h6">My Work</Typography>
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href={'/contact'}>
                            <Typography variant="h6">Contact</Typography>
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

