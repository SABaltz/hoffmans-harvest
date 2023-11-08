import React, {useState} from 'react';
import {
    navOptions, primaryColor,
    secondaryColor,
    socialMediaLinks,
    textColor,
    textContrastColor
} from '../../global-parameters/Parameters';
import {AppBar, Box, Button, Grid, Link, Stack, Toolbar, Typography} from '@mui/material';
import {centerVertHoriz} from '../../global-parameters/Styles';
import {SocialIcon} from "react-social-icons";
import {ArrowBack, ArrowForward} from "@mui/icons-material";

function Footer() {
    const currentYear = new Date().getFullYear();
    const [passSequence, setPassSequence] = useState(0)
    const [showPortal, setShowPortal] = useState(false)

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
                                onClick={() => {
                                    console.log('click')
                                }}
                                sx={{
                                    color: textContrastColor,
                                    backgroundColor: secondaryColor,
                                    display: 'block',
                                    '&:hover': {
                                        backgroundColor: secondaryColor,
                                    }
                                }}>

                                <Typography>Go to Portal</Typography>

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
                                    <Typography key={index} variant={'subtitle1'} component="div">
                                        <Link href={option} sx={{color: textColor}}>
                                            {option.toUpperCase()}
                                        </Link>
                                    </Typography>
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
                                    <Box sx={{...centerVertHoriz, marginBottom: '.5rem'}}>
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
