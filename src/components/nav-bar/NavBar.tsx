import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link, Menu, MenuItem, useMediaQuery} from "@mui/material";
import Box from "@mui/material/Box";
import React, {useState} from "react";
import {plantTheme} from "../../Theme";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
    const smallScreen = !useMediaQuery(plantTheme.breakpoints.up('sm'));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {smallScreen ?
                <>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}

                    >
                        <MenuIcon fontSize="small"
                                  sx={{
                                      color: 'green',
                                      fontSize: '3rem',
                                  }}>

                        </MenuIcon>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}

                    >
                        <MenuItem onClick={handleClose}>
                            <Link href={`/home`} sx={{textDecoration: 'none'}}>
                                <Typography variant="h6" color={'red'} component="div"
                                            sx={{flexGrow: 1}}>
                                    Home
                                </Typography>
                            </Link>
                        </MenuItem>
                    </Menu>
                </> :


                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static">
                        <Toolbar>

                            <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
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
            }

        </>
    )
}

