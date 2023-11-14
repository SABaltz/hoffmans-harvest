import plantWall from "../../static/plant-work-background.webp";
import terrarium from "../../static/terrarium.jpg";
import {Box, Card, CardContent, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import {centerVertHoriz} from "../../global-parameters/Styles";
import React from "react";
import {secondaryColor, textContrastColor} from "../../global-parameters/Parameters";
import {plantTheme} from "../../global-parameters/Theme";

function Work() {

    const smallScreen = !useMediaQuery(plantTheme.breakpoints.up('sm'));

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
                paddingTop: '4rem'
            }}>
            <Stack>
                {/*--------------------------------------Terrariums----------------------------------------------------*/}
                <Box>
                    <Card sx={{width: '90vw', backgroundColor: secondaryColor}}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6} sx={{...centerVertHoriz}}>
                                    <Stack sx={{...centerVertHoriz}}>
                                        <Typography sx={{...centerVertHoriz, paddingBottom: '1.5rem'}}
                                                    color={textContrastColor} variant="h5"
                                                    component="div">
                                            Terrariums
                                        </Typography>
                                        <Typography sx={{...centerVertHoriz}} color={textContrastColor}
                                                    variant="subtitle1"
                                                    component="div">
                                            All of our terrariums consist of hand picked exotic plants suited to persist
                                            in the cold alaskan weather.
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid item xs={6} sx={{...centerVertHoriz}}>
                                    <Box sx={{

                                        backgroundImage: `url(${terrarium})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: smallScreen ? '40vw' : '20vw',
                                        height: '40vh',
                                    }}/>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                </Box>

                {/*--------------------------------------Vivariums----------------------------------------------------*/}
                <Box sx={{paddingTop: '3rem'}}>
                    <Card sx={{width: '90vw', backgroundColor: secondaryColor}}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6} sx={{...centerVertHoriz}}>
                                    <Box sx={{

                                        backgroundImage: `url(${terrarium})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: smallScreen ? '40vw' : '20vw',
                                        height: '40vh',
                                    }}/>
                                </Grid>


                                <Grid item xs={6} sx={{...centerVertHoriz}}>
                                    <Stack sx={{...centerVertHoriz}}>
                                        <Typography sx={{...centerVertHoriz, paddingBottom: '1.5rem'}}
                                                    color={textContrastColor} variant="h5"
                                                    component="div">
                                            Vivariums
                                        </Typography>
                                        <Typography sx={{...centerVertHoriz}} color={textContrastColor}
                                                    variant="subtitle1"
                                                    component="div">
                                            All of our terrariums consist of hand picked exotic plants suited to persist
                                            in the cold alaskan weather.
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
                {/*--------------------------------------Aquascapes----------------------------------------------------*/}
                <Box sx={{paddingTop: '3rem'}}>
                    <Card sx={{width: '90vw', backgroundColor: secondaryColor}}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6} sx={{...centerVertHoriz}}>
                                    <Stack sx={{...centerVertHoriz}}>
                                        <Typography sx={{...centerVertHoriz, paddingBottom: '1.5rem'}}
                                                    color={textContrastColor} variant="h5"
                                                    component="div">
                                            Aquascapes
                                        </Typography>
                                        <Typography sx={{...centerVertHoriz}} color={textContrastColor}
                                                    variant="subtitle1"
                                                    component="div">
                                            All of our terrariums consist of hand picked exotic plants suited to persist
                                            in the cold alaskan weather.
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid item xs={6} sx={{...centerVertHoriz}}>
                                    <Box sx={{

                                        backgroundImage: `url(${terrarium})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: smallScreen ? '40vw' : '20vw',
                                        height: '40vh',
                                    }}/>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                </Box>
            </Stack>

        </Box>
    )
}

export default Work;
