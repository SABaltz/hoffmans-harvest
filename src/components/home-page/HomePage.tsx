import React from "react";
// import terrariumWallpaper from "../../static/terrarium-wallpaper.jxr";
import terrariumWallpaper from "../../static/terranium-wallpaper.webp"
import {Box, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {textColor} from '../../global-parameters/GlobalParams'

export default function HomePage() {
    return (
        <>
            {/*-------------------------------------Wallpaper-------------------------------------------*/}
            <Box
                sx={{
                    backgroundImage: `url(${terrariumWallpaper})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh'
                }}
            >

                <Typography
                    variant="h3"
                    color={textColor}
                    sx={{
                        textAlign: 'center',
                        paddingTop: '15rem'
                    }}
                >
                    Alaska's Premier Exotic Plant Nursery
                </Typography>
            </Box>
            {/*----------------------------------Social Media----------------------------------------------x*/}
            <Box
                sx={{
                    width: '100vw',
                    height: '30vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                <Grid container>
                    <Grid item xs={12}>Social Media</Grid>
                    <Grid item xs={3}>Instagram</Grid>
                    <Grid item xs={3}>Tic</Grid>
                    <Grid item xs={3}>Facebook</Grid>

                </Grid>

            </Box>
        </>
    )
}
