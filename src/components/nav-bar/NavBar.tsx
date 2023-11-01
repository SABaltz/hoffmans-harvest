import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Box, Grid, Link, Menu, MenuItem, useMediaQuery} from "@mui/material";
import React, {useState} from "react";
import {plantTheme} from "../../global-parameters/Theme";
import MenuIcon from "@mui/icons-material/Menu";
import {navOptions, secondaryColor, textColor, websiteName} from "../../global-parameters/Parameters";

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
                // ------------------------------------------Small Screen-----------------------------------------
                <>
                    <Box sx={{backgroundColor: '#041f02'}}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={anchorEl === null ? handleClick : handleClose}

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
                                        onClose={() => handleClose()}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}>
                                        {navOptions.map((option: string, index: number) => {
                                            return (
                                                <MenuItem
                                                    sx={{backgroundColor: secondaryColor}}
                                                    key={index} onClick={handleClose}>
                                                    <Link href={`/${option}`} sx={{textDecoration: 'none'}}>
                                                        <Typography variant="h6" component="div"
                                                                    sx={{flexGrow: 1}}>
                                                            {option.toUpperCase()}
                                                        </Typography>
                                                    </Link>
                                                </MenuItem>
                                            )
                                        })}
                                    </Menu>
                                </Button>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography sx={{marginTop: '.8rem'}} variant={'h5'}>{websiteName}</Typography>
                            </Grid>
                        </Grid>


                    </Box>
                </>
                :
                // ------------------------------------------Large Screen-----------------------------------------

                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static">
                        <Toolbar>

                            <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                                <Link href={'/home'} sx={{color: textColor, textDecoration: 'none'}}>
                                    {websiteName}
                                </Link>
                            </Typography>

                            {navOptions.map((option: string, index: number) => {
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

