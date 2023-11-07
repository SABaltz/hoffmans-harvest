import React from 'react';
import { navOptions, textColor } from '../../global-parameters/Parameters';
import { AppBar, Toolbar, Link, Stack, Typography } from '@mui/material';
import { centerVertHoriz } from '../../global-parameters/Styles';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <AppBar position="static">
            <Toolbar>
                <Stack
                    direction="row"
                    spacing={2}
                    flexGrow={1}
                >
                    {navOptions.map((option, index) => (
                        <Typography key={index} variant="h6" component="div">
                            <Link href={option} sx={{ color: textColor }}>
                                {option.toUpperCase()}
                            </Link>
                        </Typography>
                    ))}
                </Stack>
                <Stack>
                    <Typography sx={centerVertHoriz}>
                        Copyright Hofffman's Harvest {currentYear}
                    </Typography>
                    <Typography sx={centerVertHoriz}>All Rights Reserved</Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
