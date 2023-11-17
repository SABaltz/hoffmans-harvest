import {Box, Button, Card, CardContent, Grid, Link, TextField, Typography} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {centerVertHoriz} from "../../global-parameters/Styles";

function Portal({parameters, setParameters}) {
    return (

        <Box sx={{width: '100vw', height: '100vh', backgroundColor: parameters.colorPalette.primary}}>

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
            <Box sx={{width: '100vw', ...centerVertHoriz, marginTop: '2rem'}}>
                <Card sx={{width: '90vw', backgroundColor: parameters.colorPalette.secondary, ...centerVertHoriz}}>
                    <CardContent>
                        <Grid container sx={{...centerVertHoriz}}>


                            <Grid item xs={6}>
                                <Typography>Primary Color</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{marginBottom: '2rem'}}>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined"
                                           onChange={(event) => {
                                               setParameters({
                                                   ...parameters, colorPalette: {
                                                       primary: event.target.value,
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
                                <TextField id="outlined-basic" label="Outlined" variant="outlined"
                                           onChange={(event) => {
                                               setParameters({
                                                   ...parameters, colorPalette: {
                                                       primary: parameters.colorPalette.primary,
                                                       secondary: event.target.value,
                                                       tertiary: parameters.colorPalette.tertiary,
                                                       hover: parameters.colorPalette.hover,
                                                       text: parameters.colorPalette.text,
                                                       textContrast: parameters.colorPalette.textContrast,
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
