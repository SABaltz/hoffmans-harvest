import React from "react";
// import terraniumWallpaper from "../../static/terranium-wallpaper.jxr";
import terraniumWallpaper from "../../static/terranium-wallpaper.webp"
import {Box, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function HomePage() {
    return (
        <>
            {/*--------------------------------------------------------------------------------*/}
                <Box
                    sx={{
                        backgroundImage: `url(${terraniumWallpaper})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '100vw',
                        height: '100vh'
                    }}
                >

                    <Typography
                        variant="h3"
                        color={'#eaeaea'}
                        sx={{
                            textAlign: 'center',
                            paddingTop: '15rem'
                        }}
                    >
                        Alaska's Premier Exotic Plant Nursery
                    </Typography>
                </Box>
            {/*--------------------------------------------------------------------------------x*/}
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
                        <Grid item xs={3}>Social Media</Grid>
                        <Grid item xs={3}>Insta</Grid>
                        <Grid item xs={3}>Tic</Grid>
                        <Grid item xs={3}>Facebook</Grid>

                    </Grid>

                </Box>
        </>
    )
}
