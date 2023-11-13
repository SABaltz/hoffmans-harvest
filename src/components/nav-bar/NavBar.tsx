import React, {useState} from 'react';
import {AppBar, Box, Button, Grid, Link, Menu, MenuItem, Toolbar, Typography, useMediaQuery,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {plantTheme} from '../../global-parameters/Theme';
import {
    navOptions,
    secondaryColor,
    textColor,
    textContrastColor,
    websiteName,
} from '../../global-parameters/Parameters';

function NavBar() {
    const smallScreen = !useMediaQuery(plantTheme.breakpoints.up('sm'));
    const currentPage = window.location.href.toString().split('/')[3].toUpperCase();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {smallScreen ? (
                // Small Screen ------------------------------------------------------------------------------
                <Box sx={{backgroundColor: '#041f02'}}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Button
                                id="demo-positioned-button"
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon
                                    fontSize="small"
                                    sx={{
                                        color: 'green',
                                        fontSize: '3rem',
                                    }}
                                />
                            </Button>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                {navOptions.map((option, index) => (
                                    <MenuItem
                                        sx={{
                                            backgroundColor: secondaryColor,
                                            '&:active': {
                                                backgroundColor: 'grey',
                                            }
                                        }}
                                        key={index}
                                        onClick={handleMenuClose}
                                    >
                                        <Link href={`/${option}`} sx={{textDecoration: 'none'}}>
                                            <Typography
                                                color={textContrastColor}
                                                variant="h6"
                                                component="div"
                                                sx={{
                                                    flexGrow: 1,
                                                    textDecoration:
                                                        currentPage === option.toUpperCase()
                                                            ? 'underline'
                                                            : currentPage === '' && option === 'home'
                                                                ? 'underline'
                                                                : '',
                                                }}
                                            >
                                                {option.toUpperCase()}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography sx={{marginTop: '.8rem'}} variant="h5">
                                {websiteName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            ) : (
                // Large Screen ------------------------------------------------------------------------------
                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                                <Link href={"/home"} sx={{color: textColor, textDecoration: 'none'}}>
                                    {websiteName}
                                </Link>
                            </Typography>
                            {navOptions.map((option, index) => (
                                <Button key={index} color="inherit">
                                    <Link href={`/${option}`}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: currentPage === option.toUpperCase() ? secondaryColor : textColor,
                                                borderBottom:
                                                    currentPage === option.toUpperCase()
                                                        ? `.1rem solid ${secondaryColor}`
                                                        : currentPage === '' && option === 'home'
                                                            ? `.1rem solid ${textColor}`
                                                            : '',
                                                '&:hover': {
                                                    color: secondaryColor,
                                                },
                                            }}
                                        >
                                            {option}
                                        </Typography>
                                    </Link>
                                </Button>
                            ))}
                        </Toolbar>
                    </AppBar>
                </Box>
            )}
        </>
    );
}

export default NavBar;
