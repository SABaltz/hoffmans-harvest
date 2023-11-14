import React from 'react';
import plantPhone from '../../static/plant-phone.jpg';
import { Card, CardContent, Grid, Typography, useMediaQuery } from '@mui/material';
import { secondaryColor, textContrastColor } from '../../global-parameters/Parameters';
import { centerVertHoriz } from '../../global-parameters/Styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { plantTheme } from '../../global-parameters/Theme';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    const smallScreen = !useMediaQuery(plantTheme.breakpoints.up('sm'));
    const recipientEmail = 'hoffman@hoffman.com';
    const subject = '';
    const body = '';
    const mailToLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const handleEmailClick = () => {
        window.location.href = mailToLink;
    };

    return (
        <div
            style={{
                backgroundImage: `url(${plantPhone})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '100vh',
                position: 'relative',
            }}
        >
            <Grid container sx={{ ...centerVertHoriz, position: 'absolute', top: smallScreen ? '30%' : '40%', width: '100%' }}>
                <Grid item xs={12} md={6} sx={{ ...centerVertHoriz }}>
                    <Card sx={{ width: '20rem', backgroundColor: secondaryColor, marginBottom: '3rem' }}>
                        <CardContent>
                            <Typography sx={{ ...centerVertHoriz }} color={textContrastColor} variant="h5" component="div">
                                Call
                            </Typography>
                            <Typography sx={{ ...centerVertHoriz }} variant="body2" color={textContrastColor}>
                                <PhoneIcon onClick={() => window.open('tel:+18004444444')} sx={{ paddingRight: '.5rem', cursor: 'pointer' }} /> (907) 999-9999
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} sx={{ ...centerVertHoriz }}>
                    <Card sx={{ width: '20rem', backgroundColor: secondaryColor }}>
                        <CardContent>
                            <Typography sx={{ ...centerVertHoriz }} color={textContrastColor} variant="h5" component="div">
                                Email
                            </Typography>
                            <Typography sx={{ ...centerVertHoriz }} variant="body2" color={textContrastColor}>
                                <EmailIcon onClick={handleEmailClick} sx={{ paddingRight: '.5rem', cursor: 'pointer' }} />
                                hoffman@hoffman.com
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;
