import React from 'react';
import {navOptions, textColor} from '../../global-parameters/Parameters';
import {AppBar, Grid, Link, Stack, Toolbar, Typography} from '@mui/material';
import {centerVertHoriz} from '../../global-parameters/Styles';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item xs={6} sx={{...centerVertHoriz}}>
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
                    <Grid item xs={6} sx={{...centerVertHoriz}}>
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
