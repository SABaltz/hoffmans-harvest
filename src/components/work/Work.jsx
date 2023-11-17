import React from 'react';
import {Box, Card, CardContent, Grid, Stack, Typography, useMediaQuery} from '@mui/material';
import {centerVertHoriz} from '../../global-parameters/Styles';
import {plantTheme} from '../../global-parameters/Theme';
import plantWall from '../../static/plant-work-background.webp';
import terrarium from '../../static/terrarium.jpg';


function WorkCard({title, description, imageUrl, order, parameters}) {
    const smallScreen = !useMediaQuery(plantTheme.breakpoints.up('sm'));
    return (
        <Box sx={{paddingTop: '3rem'}}>
            <Card sx={{width: '90vw', backgroundColor: parameters.colorPalette.secondary}}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={6} order={{xs: order[0]}} sx={{...centerVertHoriz}}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${imageUrl})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    width: smallScreen ? '40vw' : '20vw',
                                    height: '40vh',
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} order={{xs: order[1]}} sx={{...centerVertHoriz}}>
                            <Stack sx={{...centerVertHoriz}}>
                                <Typography sx={{...centerVertHoriz, paddingBottom: '1.5rem'}}
                                            color={parameters.colorPalette.textContrast}
                                            variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography sx={{...centerVertHoriz}} color={parameters.colorPalette.textContrast}
                                            variant="subtitle1"
                                            component="div">
                                    {description}
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

function Work({parameters}) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${plantWall})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '200vh',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '4rem',
            }}
        >
            <Stack>
                <WorkCard
                    parameters={parameters}
                    title="Terrariums"
                    description="All of our terrariums consist of handpicked exotic plants suited to persist in the cold Alaskan weather."
                    imageUrl={terrarium}
                    order={[0, 1]}
                />
                <WorkCard
                    parameters={parameters}
                    title="Vivariums"
                    description="All of our vivariums consist of handpicked exotic plants suited to persist in the cold Alaskan weather."
                    imageUrl={terrarium}
                    order={[1, 0]}
                />
                <WorkCard
                    parameters={parameters}
                    title="Aquascapes"
                    description="All of our aquascapes consist of handpicked exotic plants suited to persist in the cold Alaskan weather."
                    imageUrl={terrarium}
                    order={[0, 1]}
                />
            </Stack>
        </Box>
    );
}

export default Work;
