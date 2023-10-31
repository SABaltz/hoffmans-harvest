import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Box, Link, Menu, MenuItem, useMediaQuery} from "@mui/material";
import React, {useState} from "react";
import {plantTheme} from "../../Theme";
import MenuIcon from "@mui/icons-material/Menu";
import {navOptions, websiteName} from "../../GlobalParams";

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
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}>
                            {navOptions.map((option, index) => {
                                return (
                                    <MenuItem key={index} onClick={handleClose}>
                                        <Link href={`/${option}`} sx={{textDecoration: 'none'}}>
                                            <Typography variant="h6" color={'black'} component="div"
                                                        sx={{flexGrow: 1}}>
                                                {option.toUpperCase()}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                )
                            })}
                        </Menu>


                    </Button>
                </>
                :

                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static">
                        <Toolbar>

                            <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                                {websiteName}
                            </Typography>

                            {navOptions.map((option, index) => {
                                return (
                                    <Button key={index} color="inherit">
                                        <Link href={`/${option}`}>
                                            <Typography variant="h6">{option}</Typography>
                                        </Link>
                                    </Button>
                                )
                            })}
                        </Toolbar>
                    </AppBar>
                </Box>
            }

        </>
    )
}

