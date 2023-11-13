import React from 'react'
import plantPhone from "../../static/plant-phone.jpg";
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {secondaryColor, textContrastColor} from "../../global-parameters/Parameters";
import {centerVertHoriz} from "../../global-parameters/Styles";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
function Contact() {

    const recipientEmail = 'hoffman@hoffman.com';
    const subject = '';
    const body = '';
    const mailToLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const handleEmailClick = () => {
        window.location.href = mailToLink;
    };
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
                }}
            >
                <Box sx={{
                    position: "absolute",
                    top: "40%",
                    width: "100%",
                }}>
                    <Grid container sx={{...centerVertHoriz}}>
                        <Grid item xs={6} sx={{...centerVertHoriz}}>
                            <Card sx={{width: '20rem', backgroundColor: secondaryColor}}>
                                <CardContent>
                                    <Typography sx={{...centerVertHoriz}} color={textContrastColor} variant="h5"
                                                component="div">
                                        Call
                                    </Typography>

                                    <Typography sx={{ ...centerVertHoriz}} variant="body2"
                                                color={textContrastColor}>
                                        <PhoneIcon onClick={() => {
                                            window.open("tel:+18004444444");
                                        }}
                                                   sx={{paddingRight: '.5rem', cursor: 'pointer'}}/> (907) 999-9999
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sx={{...centerVertHoriz}}>
                            <Card sx={{width: '20rem', backgroundColor: secondaryColor}}>
                                <CardContent>
                                    <Typography sx={{...centerVertHoriz}} color={textContrastColor} variant="h5"
                                                component="div">
                                        Email
                                    </Typography>
                                    <Typography sx={{...centerVertHoriz}} variant="body2" color={textContrastColor}>
                                        <EmailIcon onClick={handleEmailClick} sx={{paddingRight: '.5rem', cursor: 'pointer'}}/>
                                        hoffman@hoffman.com
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
