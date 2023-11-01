import React from "react";
// import terrariumWallpaper from "../../static/terrarium-wallpaper.jxr";
import terrariumWallpaper from "../../static/terranium-wallpaper.webp"
import {Box, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {textColor} from '../../global-parameters/Parameters'
import {centerVertHoriz} from "../../global-parameters/Styles";

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
                    ...centerVertHoriz
                }}>
                <Grid container>
                    <Grid item xs={12} sx={{...centerVertHoriz, paddingBottom: '2rem'}}>Social Media</Grid>
                    <Grid container sx={{...centerVertHoriz}}>
                        <Grid item xs={4}>Instagram</Grid>
                        <Grid item xs={4}>Tic Tok</Grid>
                        <Grid item xs={4}>Facebook</Grid>
                    </Grid>

                </Grid>

            </Box>
        </>
    )
}
