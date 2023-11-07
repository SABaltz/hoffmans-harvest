import React from 'react';
import {Box, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import {secondaryColor, textContrastColor} from '../../global-parameters/Parameters';
import {centerVertHoriz} from '../../global-parameters/Styles';
import {SocialIcon} from 'react-social-icons';
import terrariumWallpaper from '../../static/terranium-wallpaper.webp';

function HomePage() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${terrariumWallpaper})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <Typography
                    variant="h3"
                    color={textContrastColor}
                    sx={{
                        textAlign: 'center',
                        paddingTop: '15rem',
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

const socialMediaLinks = [
    {
        name: 'Facebook',
        url: 'www.facebook.com',
        href: 'https://www.facebook.com/people/Hoffmans-Harvest/61552764039490/',
    },
    {
        name: 'Instagram',
        url: 'www.instagram.com',
        href: 'https://www.instagram.com',
    },
    {
        name: 'TikTok',
        url: 'www.tiktok.com',
        href: 'https://www.tiktok.com',
    },
];

export default HomePage;
