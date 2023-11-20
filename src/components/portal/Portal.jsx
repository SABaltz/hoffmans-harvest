import {Box, Button, Card, CardContent, Grid, Link, Typography} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {centerVertHoriz} from "../../global-parameters/Styles";
import {HexColorPicker} from "react-colorful";

function Portal({parameters, setParameters}) {
    const handleClearLocalStorage = () => {
        localStorage.clear();
        window.location.reload();
    };
    return (

        <Box sx={{width: '100vw', height: 'fitContent', backgroundColor: parameters.colorPalette.primary}}>

            <Grid container>
                <Grid item xs={6} sx={{...centerVertHoriz}}>
                    <Button
                        sx={{
                            color: parameters.colorPalette.textContrast,
                            backgroundColor: parameters.colorPalette.secondary,
                            display: 'block',
                            '&:hover': {
                                backgroundColor: parameters.colorPalette.secondary,
                            },
                            marginLeft: '1rem'
                        }}>
                        <Link href={`/home`} sx={{textDecoration: 'none'}}>
                            <Typography sx={{display: 'flex', alignItems: 'center'}}>
                                <KeyboardDoubleArrowLeftIcon/>
                                Exit Portal
                            </Typography>
                        </Link>
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{...centerVertHoriz}}>
                    <Button
                        sx={{
                            color: parameters.colorPalette.textContrast,
                            backgroundColor: parameters.colorPalette.secondary,
                            display: 'block',
                            '&:hover': {
                                backgroundColor: parameters.colorPalette.secondary,
                            },
                            marginLeft: '1rem'
                        }}
                        onClick={() => handleClearLocalStorage()}>
                        <Typography sx={{display: 'flex', alignItems: 'center'}}>
                            <KeyboardDoubleArrowLeftIcon/>
                            Reset Colors
                        </Typography>

                    </Button>
                </Grid>
            </Grid>
            <Box sx={{width: '100vw', ...centerVertHoriz, marginTop: '2rem'}}>
                <Card sx={{width: '90vw', backgroundColor: parameters.colorPalette.secondary, ...centerVertHoriz}}>
                    <CardContent>
                        <Grid container sx={{...centerVertHoriz}}>
                            <Grid item xs={6}>
                                <Typography>Primary Color</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{marginBottom: '2rem'}}>
                                <HexColorPicker color={parameters.colorPalette.primary} onChange={(color) => {
                                    setParameters({
                                        ...parameters, colorPalette: {
                                            primary: color,
                                            secondary: parameters.colorPalette.secondary,
                                            tertiary: parameters.colorPalette.tertiary,
                                            hover: parameters.colorPalette.hover,
                                            text: parameters.colorPalette.text,
                                            textContrast: parameters.colorPalette.textContrast,
                                        }
                                    })
                                }}/>
                            </Grid>


                            <Grid item xs={6}>
                                <Typography>Secondary Color</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{marginBottom: '2rem'}}>
                                <HexColorPicker color={parameters.colorPalette.secondary} onChange={(color) => {
                                    setParameters({
                                        ...parameters, colorPalette: {
                                            primary: parameters.colorPalette.primary,
                                            secondary: color,
                                            tertiary: parameters.colorPalette.tertiary,
                                            hover: parameters.colorPalette.hover,
                                            text: parameters.colorPalette.text,
                                            textContrast: parameters.colorPalette.textContrast,
                                        }
                                    })
                                }}/>
                            </Grid>

                            {/*<Grid item xs={6}>*/}
                            {/*    <Typography>Tertiary Color</Typography>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={6} sx={{marginBottom: '2rem'}}>*/}
                            {/*    <HexColorPicker color={parameters.colorPalette.tertiary} onChange={(color) => {*/}
                            {/*        setParameters({*/}
                            {/*            ...parameters, colorPalette: {*/}
                            {/*                primary: parameters.colorPalette.primary,*/}
                            {/*                secondary: parameters.colorPalette.secondary,*/}
                            {/*                tertiary: color,*/}
                            {/*                hover: parameters.colorPalette.hover,*/}
                            {/*                text: parameters.colorPalette.text,*/}
                            {/*                textContrast: parameters.colorPalette.textContrast,*/}
                            {/*            }*/}
                            {/*        })*/}
                            {/*    }}/>*/}
                            {/*</Grid>*/}

                            <Grid item xs={6}>
                                <Typography>Hover Color</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{marginBottom: '2rem'}}>
                                <HexColorPicker color={parameters.colorPalette.hover} onChange={(color) => {
                                    setParameters({
                                        ...parameters, colorPalette: {
                                            primary: parameters.colorPalette.primary,
                                            secondary: parameters.colorPalette.secondary,
                                            tertiary: parameters.colorPalette.tertiary,
                                            hover: color,
                                            text: parameters.colorPalette.text,
                                            textContrast: parameters.colorPalette.textContrast,
                                        }
                                    })
                                }}/>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography>Text Color</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{marginBottom: '2rem'}}>
                                <HexColorPicker color={parameters.colorPalette.text} onChange={(color) => {
                                    setParameters({
                                        ...parameters, colorPalette: {
                                            primary: parameters.colorPalette.primary,
                                            secondary: parameters.colorPalette.secondary,
                                            tertiary: parameters.colorPalette.tertiary,
                                            hover: parameters.colorPalette.hover,
                                            text: color,
                                            textContrast: parameters.colorPalette.textContrast,
                                        }
                                    })
                                }}/>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography>Text Contrast Color</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{marginBottom: '2rem'}}>
                                <HexColorPicker color={parameters.colorPalette.textContrast} onChange={(color) => {
                                    setParameters({
                                        ...parameters, colorPalette: {
                                            primary: parameters.colorPalette.primary,
                                            secondary: parameters.colorPalette.secondary,
                                            tertiary: parameters.colorPalette.tertiary,
                                            hover: parameters.colorPalette.hover,
                                            text: parameters.colorPalette.text,
                                            textContrast: color,
                                        }
                                    })
                                }}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default Portal
