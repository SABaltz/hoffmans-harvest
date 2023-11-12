import modelWatering from "../../static/model-watering-plant.jpg";
import {Box, Grid, Stack, Typography} from "@mui/material";
import {centerVertHoriz} from "../../global-parameters/Styles";
import {textContrastColor} from "../../global-parameters/Parameters";

function About() {
    return (
        <Box>
            <Grid container sx={{marginTop: '5rem', marginBottom: '5rem'}}>
                <Grid item xs={6} sx={{...centerVertHoriz}}>
                    <Box
                        sx={{
                            backgroundImage: `url(${modelWatering})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: '20vw',
                            height: '50vh',
                        }}
                    ></Box>
                </Grid>
                <Grid item xs={6} sx={{...centerVertHoriz}}>
                    <Stack>
                        <Typography color={textContrastColor} variant={'h4'}>Austin's Purpose</Typography>
                        <Typography color={textContrastColor} sx={{whiteSpace: 'preLine'}}>
                            A European designer based in New York City specializing in architecture and interior design
                            consciously considering sustainable living.

                            I believe art is within all of us. The way we express our creativity shall have no
                            boundaries because when it's fueled by our true passions and beliefs it will lead to great
                            results.

                            In this day and age where the vision of a greener tomorrow is driving us forward, one unique
                            element to my design work is to incorporate sustainable lifestyle practices, also know as
                            Zero Waste, in to my projects. As a creative, I feel responsible and inspired for adding
                            value and social good through my work.
                            When creating a new interior space I put great emphasis on the people I design for while
                            introducing my style and expertise. Through understanding their passions and needs I am able
                            to curate the space to meet their interests. My focus lies in blending sustainability and
                            functionality with my client's aesthetics while keeping the spaces simple and authentic.
                            This leads to minimal, warm and welcoming interiors. My portfolio includes residential and
                            commercial spaces, currently in New York and neighboring beach towns.
                        </Typography>
                    </Stack>

                </Grid>
            </Grid>


        </Box>
    )
}

export default About;
