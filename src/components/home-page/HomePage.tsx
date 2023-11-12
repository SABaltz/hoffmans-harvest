import React from 'react';
import {Box, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import {secondaryColor, socialMediaLinks, textContrastColor} from '../../global-parameters/Parameters';
import {centerVertHoriz} from '../../global-parameters/Styles';
import {SocialIcon} from 'react-social-icons';
import terraniumWall from "../../static/terranium-wallpaper.webp";

function HomePage() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${terraniumWall})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '90vh',
                }}
            >
                <Typography
                    variant="h3"
                    color={textContrastColor}
                    sx={{
                        position: "absolute",
                        top: "40%",
                        width: "100%",
                        textAlign: "center",
                        color: textContrastColor,
                        backgroundColor: secondaryColor,
                        boxSizing: 'border-box',
                    }}
                >
                    Alaska's Premier Exotic Plant Nursery
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100vw',
                    height: '30vh',
                    paddingBottom: '3rem',
                    paddingTop: '3rem',
                    backgroundColor: secondaryColor,
                    ...centerVertHoriz,
                }}
            >
                <Grid container>
                    <Grid item xs={12} sx={{...centerVertHoriz, paddingBottom: '5rem'}}>
                        <Typography variant="h3" color={textContrastColor}>
                            Social Media
                        </Typography>
                    </Grid>
                    <Grid container xs={12} sx={{...centerVertHoriz}}>
                        {socialMediaLinks.map((link, index) => (
                            <Grid key={index} sx={centerVertHoriz} item xs={2}>
                                <SocialIcon url={link.url} href={link.href}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}


export default HomePage;
