import React, {useContext, useState} from 'react';
import {AppBar, Box, Button, Grid, Link, Stack, Toolbar, Typography, useMediaQuery} from '@mui/material';
import {SocialIcon} from 'react-social-icons';
import {plantTheme} from '../../global-parameters/Theme';
import {centerVertHoriz} from "../../global-parameters/Styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {ParameterContext} from "../../App";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [passSequence, setPassSequence] = useState(0);
    const [showPortal, setShowPortal] = useState(false);
    const currentPage = window.location.href.split('/')[3].toUpperCase();
    const smallScreen = !useMediaQuery(plantTheme.breakpoints.up('sm'));
    const parameters = useContext(ParameterContext);

    const resetPassSequence = () => {
        setShowPortal(passSequence === 0.599);
        setPassSequence(0);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    {showPortal ? (
                        // Portal Pass
                        <>
                            <Grid item xs={6} sx={centerVertHoriz}>
                                <Stack>
                                    <Typography>Hello Mr. Hoffman</Typography>
                                    <Typography>Welcome to Your Website</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} sx={centerVertHoriz}>
                                <Button
                                    sx={{
                                        color: parameters.colorPalette.textContrast,
                                        backgroundColor: parameters.colorPalette.secondary,
                                        display: 'block',
                                        '&:hover': {
                                            backgroundColor: parameters.colorPalette.secondary,
                                        },
                                    }}
                                >
                                    <Link href={`/portal`} sx={{textDecoration: 'none'}}>
                                        <Typography sx={{display: 'flex', alignItems: 'center'}}>Go to Portal
                                            <ArrowForwardIcon/>
                                        </Typography>
                                    </Link>
                                </Button>
                            </Grid>
                        </>
                    ) : (
                        // Regular Footer
                        <>
                            <Grid item xs={4} sx={centerVertHoriz}>
                                <Stack flexGrow={1} sx={centerVertHoriz}>
                                    <Typography color={parameters.colorPalette.text} variant="h5"
                                                onClick={resetPassSequence}>
                                        {smallScreen ? '' : 'Navigation'}
                                    </Typography>
                                    {parameters.navOptions.map((option, index) => (
                                        <Link href={option} key={index}>
                                            <Typography
                                                variant="subtitle1"
                                                component="div"
                                                sx={{
                                                    color: currentPage === option.toUpperCase() ? parameters.colorPalette.secondary : parameters.colorPalette.text,
                                                    borderBottom:
                                                        currentPage === option.toUpperCase()
                                                            ? `.1rem solid ${parameters.colorPalette.secondary}`
                                                            : currentPage === '' && option === 'home'
                                                                ? `.1rem solid ${parameters.colorPalette.text}`
                                                                : '',
                                                    '&:hover': {
                                                        color: parameters.colorPalette.secondary,
                                                    },
                                                }}
                                            >
                                                {option.toUpperCase()}
                                            </Typography>
                                        </Link>
                                    ))}
                                </Stack>
                            </Grid>
                            <Grid item xs={4} sx={centerVertHoriz}>
                                <Stack>
                                    <Typography color={parameters.colorPalette.text} variant="h5"
                                                onClick={() => setPassSequence(passSequence + 0.004)}>
                                        {smallScreen ? '' : 'Follow Me'}
                                    </Typography>
                                    {parameters.socialMediaLinks.map((link, index) => (
                                        <Box sx={{...centerVertHoriz, marginBottom: '.5rem'}} key={index}>
                                            <SocialIcon style={{width: '2rem', height: '2rem'}} url={link.url}
                                                        href={link.href}/>
                                        </Box>
                                    ))}
                                </Stack>
                            </Grid>
                            <Grid item xs={4} sx={centerVertHoriz}>
                                <Stack>
                                    <Typography sx={centerVertHoriz}
                                                onClick={() => setPassSequence(passSequence + 0.125)}>
                                        &copy; Hofffman's Harvest {currentYear}
                                    </Typography>
                                    <Typography sx={centerVertHoriz}
                                                onClick={() => setPassSequence(passSequence + 0.235)}>
                                        All Rights Reserved
                                    </Typography>
                                </Stack>
                            </Grid>
                        </>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
