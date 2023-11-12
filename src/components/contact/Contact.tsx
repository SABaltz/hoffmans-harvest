import React from 'react'
import plantPhone from "../../static/plant-phone.jpg";
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {secondaryColor, textContrastColor} from "../../global-parameters/Parameters";
import {centerVertHoriz} from "../../global-parameters/Styles";

function Contact() {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${plantPhone})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh',
                    opacity: '80%'
                }}
            >
                <Grid container sx={{...centerVertHoriz}}>
                    <Grid item xs={6} sx={{...centerVertHoriz}}>
                        <Card sx={{maxWidth: '20rem', backgroundColor: secondaryColor}}>
                            <CardContent>
                                <Typography sx={{...centerVertHoriz}} color={textContrastColor} variant="h5"
                                            component="div">
                                    Call Us
                                </Typography>
                                <Typography variant="body2" color={textContrastColor}>
                                    This is some content for the card. You can put any text or components here.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sx={{...centerVertHoriz}}>
                        <Card sx={{maxWidth: '20rem', backgroundColor: secondaryColor}}>
                            <CardContent>
                                <Typography sx={{...centerVertHoriz}} color={textContrastColor} variant="h5"
                                            component="div">
                                    Email Us
                                </Typography>
                                <Typography variant="body2" color={textContrastColor}>
                                    This is some content for the card. You can put any text or components here.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Contact;
