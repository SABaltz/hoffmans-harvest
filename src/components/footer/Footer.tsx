import React from 'react';
import {navOptions, socialMediaLinks, textColor} from '../../global-parameters/Parameters';
import {AppBar, Box, Grid, Link, Stack, Toolbar, Typography} from '@mui/material';
import {centerVertHoriz} from '../../global-parameters/Styles';
import {SocialIcon} from "react-social-icons";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item xs={4} sx={{...centerVertHoriz}}>
                        <Stack
                            flexGrow={1}
                            sx={{...centerVertHoriz}}
                        >
                            <Typography variant={'h5'}>Navigation</Typography>
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
                            <Typography variant={'h5'} sx={centerVertHoriz}>
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
                            <Typography sx={centerVertHoriz}>
                                &copy;  Hofffman's Harvest {currentYear}
                            </Typography>
                            <Typography sx={centerVertHoriz}>All Rights Reserved</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
