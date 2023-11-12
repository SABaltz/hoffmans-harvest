import React from 'react'
import plantPhone from "../../static/plant-phone.jpg";
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {secondaryColor, textContrastColor} from "../../global-parameters/Parameters";
import {centerVertHoriz} from "../../global-parameters/Styles";
import PhoneIcon from '@mui/icons-material/Phone';

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
                <Box sx={{
                    position: "absolute",
                    top: "40%",
                    width: "100%",
                }}>
                    <Grid container sx={{...centerVertHoriz}}>
                        <Grid item xs={6} sx={{...centerVertHoriz}}>
                            <Card sx={{maxWidth: '20rem', backgroundColor: secondaryColor}}>
                                <CardContent>
                                    <Typography sx={{...centerVertHoriz}} color={textContrastColor} variant="h5"
                                                component="div">
                                        Call Us
                                    </Typography>

                                    <Typography sx={{display: 'flex', alignItems: 'center'}} variant="body2"
                                                color={textContrastColor}>
                                        <PhoneIcon href={'tel:18004444444 '}
                                                   sx={{paddingRight: '.5rem', cursor: 'pointer'}}/> (907) 999-9999
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
        </Box>
    )
}

export default Contact;
