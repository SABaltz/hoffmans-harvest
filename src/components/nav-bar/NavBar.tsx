import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Grid,
    Link,
    Menu,
    MenuItem,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { plantTheme } from '../../global-parameters/Theme';
import {
    navOptions,
    primaryColor,
    secondaryColor,
    textColor,
    websiteName,
} from '../../global-parameters/Parameters';

function NavBar() {
    const smallScreen = !useMediaQuery(plantTheme.breakpoints.up('sm'));
    const currentPage = window.location.href.toString().split('/')[3].toUpperCase();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {smallScreen ? (
                // Small Screen
                <Box sx={{ backgroundColor: '#041f02' }}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={anchorEl === null ? handleMenuClick : handleMenuClose}
                            >
                                <MenuIcon
                                    fontSize="small"
                                    sx={{
                                        color: 'green',
                                        fontSize: '3rem',
                                    }}
                                />
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={() => handleMenuClose()}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    {navOptions.map((option, index) => (
                                        <MenuItem
                                            sx={{
                                                backgroundColor: secondaryColor,
                                                '&:active': {
                                                    backgroundColor: primaryColor,
                                                },
                                            }}
                                            key={index}
                                            onClick={handleMenuClose}
                                        >
                                            <Link href={`/${option}`} sx={{ textDecoration: 'none' }}>
                                                <Typography
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
                            </Button>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography sx={{ marginTop: '.8rem' }} variant="h5">
                                {websiteName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            ) : (
                // Large Screen
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                                <Link href="/home" sx={{ color: textColor, textDecoration: 'none' }}>
                                    {websiteName}
                                </Link>
                            </Typography>
                            {navOptions.map((option, index) => (
                                <Button key={index} color="inherit">
                                    <Link href={`/${option}`}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                textDecoration:
                                                    currentPage === option.toUpperCase()
                                                        ? 'underline'
                                                        : currentPage === '' && option === 'home'
                                                            ? 'underline'
                                                            : '',
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
