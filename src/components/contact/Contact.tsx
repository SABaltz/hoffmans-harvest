import React from 'react'
import plantPhone from "../../static/plant-phone.jpg";
import {Box} from "@mui/material";
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

            </Box>
        </Box>
    )
}

export default Contact;
