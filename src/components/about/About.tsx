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
                            borderRadius: '20%'
                        }}
                    ></Box>
                </Grid>
                <Grid item xs={6} sx={{...centerVertHoriz}}>
                    <Stack>
                        <Typography color={textContrastColor}
                                    sx={{...centerVertHoriz, marginRight: '8rem', marginBottom: '1rem'}} variant={'h4'}>Austin's Purpose</Typography>
                        <Typography color={textContrastColor} sx={{ marginRight: '8rem', whiteSpace: 'pre-line'}}>
                            {"A European designer based in New York City specializing in architecture and interior design consciously considering sustainable living. \n" +
                                "I believe art is within all of us. The way we express our creativity shall have no boundaries because when it's fueled by our true passions and beliefs it will lead to great results.\n" +
                                "\n" +
                                "In this day and age where the vision of a greener tomorrow is driving us forward, one unique element to my design work is to incorporate sustainable lifestyle practices, also know as Zero Waste, in to my projects.  As a creative, I feel responsible and inspired for adding value and social good through my work.\n" +
                                ""}
                        </Typography>
                    </Stack>

                </Grid>
            </Grid>


        </Box>
    )
}

export default About;
