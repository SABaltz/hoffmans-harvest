import React, {useState} from 'react';
import {
    navOptions,
    secondaryColor,
    socialMediaLinks,
    textColor,
    textContrastColor
} from '../../global-parameters/Parameters';
import {AppBar, Box, Button, Grid, Link, Stack, Toolbar, Typography} from '@mui/material';
import {centerVertHoriz} from '../../global-parameters/Styles';
import {SocialIcon} from "react-social-icons";

function Footer() {
    const currentYear = new Date().getFullYear();
    const [passSequence, setPassSequence] = useState(0)
    const [showPortal, setShowPortal] = useState(false)
    const currentPage = window.location.href.toString().split('/')[3].toUpperCase();

    function resetPassSequence() {

        if (passSequence === .599) {
            setShowPortal(true)
        } else {
            setShowPortal(false)
        }

        setPassSequence(0)
    }

    // useEffect()
    return (
        <AppBar position="static">
            <Toolbar>
                {showPortal ?
                    // ----------------------------------------------------------------Portal Pass ----------------------------------------------
                    <Grid container>
                        <Grid item xs={6} sx={{...centerVertHoriz}}>
                            <Stack>
                                <Typography>Hello Mr. Hoffman</Typography>
                                <Typography>Welcome to Your Website</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} sx={{...centerVertHoriz}}>
                            <Button
                                sx={{
                                    color: textContrastColor,
                                    backgroundColor: secondaryColor,
                                    display: 'block',
                                    '&:hover': {
                                        backgroundColor: secondaryColor,
                                    }
                                }}>
                                <Link href={`/portal`} sx={{textDecoration: 'none'}}>
                                    <Typography>Go to Portal</Typography>
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>

                    :
                    // ----------------------------------------------------------------Regular Footer ----------------------------------------------
                    <Grid container>
                        <Grid item xs={4} sx={{...centerVertHoriz}}>
                            <Stack
                                flexGrow={1}
                                sx={{...centerVertHoriz}}
                            >
                                <Typography variant={'h5'} onClick={() => {
                                    passSequence === .599 ?
                                        resetPassSequence()
                                        :
                                        setPassSequence(0)
                                }}>Navigation</Typography>
                                {navOptions.map((option, index) => (
                                    <Link href={option}>
                                        <Typography key={index} variant={'subtitle1'} component="div"
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
                                                    }}>
                                            {option.toUpperCase()}
                                        </Typography>
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={4} sx={{...centerVertHoriz}}>
                            <Stack>
                                <Typography onClick={() => {
                                    setPassSequence(passSequence + .004)
                                }} variant={'h5'} sx={centerVertHoriz}>
                                    Follow Me
                                </Typography>
                                {socialMediaLinks.map((link, index) => (
                                    <Box sx={{...centerVertHoriz, marginBottom: '.5rem'}} key={index}>
                                        <SocialIcon style={{width: '2rem', height: '2rem'}} url={link.url}
                                                    href={link.href}/>
                                    </Box>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={4} sx={{...centerVertHoriz}}>
                            <Stack>
                                <Typography sx={centerVertHoriz} onClick={() => {
                                    setPassSequence(passSequence + .125)
                                }}>
                                    &copy;  Hofffman's Harvest {currentYear}
                                </Typography>
                                <Typography sx={centerVertHoriz} onClick={() => {
                                    setPassSequence(passSequence + .235)
                                }}>All Rights Reserved</Typography>
                            </Stack>
                        </Grid>
                    </Grid>


                }


            </Toolbar>
        </AppBar>
    );
}

export default Footer;
