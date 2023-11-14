import React from 'react';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { centerVertHoriz } from '../../global-parameters/Styles';
import { secondaryColor, textContrastColor } from '../../global-parameters/Parameters';
import { plantTheme } from '../../global-parameters/Theme';
import modelWatering from '../../static/model-watering-plant.jpg';
import modelHiking from '../../static/male-model-hiking.jpg';
import modelBackflip from '../../static/backflip.jpg';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    const smallScreen = !useMediaQuery(plantTheme.breakpoints.up('sm'));

    const imageStyle: React.CSSProperties = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '20%',
        width: smallScreen ? '90vw' : '20vw',
        height: '50vh',
        marginBottom: smallScreen ? '1rem' : '3rem',
    };

    const renderImageBox = (image: string) => (
        <Box sx={{ ...imageStyle, backgroundImage: `url(${image})` }}></Box>
    );

    return (
        <Box sx={{ backgroundColor: secondaryColor }}>
            {/* About */}
            <Box>
                <Grid container sx={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                    <Grid item xs={12} md={6} sx={{ ...centerVertHoriz }}>
                        {renderImageBox(modelWatering)}
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ ...centerVertHoriz }}>
                        <Stack>
                            <Typography
                                color={textContrastColor}
                                sx={{ ...centerVertHoriz, paddingRight: smallScreen ? '' : '8rem', paddingBottom: '1rem' }}
                                variant="h4"
                            >
                                Austin's Purpose
                            </Typography>
                            <Typography
                                color={textContrastColor}
                                sx={{
                                    paddingRight: smallScreen ? '1rem' : '8rem',
                                    paddingLeft: smallScreen ? '1rem' : '',
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                {`A European designer based in New York City specializing in architecture and interior design consciously considering sustainable living. \n
                  I believe art is within all of us. The way we express our creativity shall have no boundaries because when it's fueled by our true passions and beliefs it will lead to great results.\n
                  In this day and age where the vision of a greener tomorrow is driving us forward, one unique element to my design work is to incorporate sustainable lifestyle practices, also know as Zero Waste, in to my projects.  As a creative, I feel responsible and inspired for adding value and social good through my work.\n`}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            {/* Lifestyle */}
            <Box>
                <Grid container sx={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                    <Grid item xs={12} sx={{ ...centerVertHoriz }}>
                        <Stack sx={{ ...centerVertHoriz }}>
                            <Typography color={textContrastColor} sx={{ ...centerVertHoriz }} variant="h4">
                                Lifestyle
                            </Typography>
                            <Typography
                                color={textContrastColor}
                                sx={{
                                    whiteSpace: 'pre-line',
                                    ...centerVertHoriz,
                                    margin: smallScreen ? '1rem 1rem 2rem 1rem' : '1rem 5rem 2rem 5rem',
                                }}
                            >
                                {`Away from design I dedicated my free time to explore the beauty and challenges of green
                  living in the western consumer society. My journey to zero waste is captured in my Blog
                  and Instagram posts, where I share tips and spread enthusiasm amongst my friends and
                  followers that are engaged with the same idea. My goal is to connect with many
                  like-minded individuals that believe having a clean planet is dictated by our own
                  actions
                  rather than waiting around for organizations to make a change. We are the change.`}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ ...centerVertHoriz }}>
                        {renderImageBox(modelHiking)}
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ ...centerVertHoriz }}>
                        {renderImageBox(modelBackflip)}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;
