import React from "react";
// import terraniumWallpaper from "../../static/terranium-wallpaper.jxr";
import terraniumWallpaper from "../../static/terranium-wallpaper.webp"
import {Box} from "@mui/material";

export default function HomePage() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${terraniumWallpaper})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '100vh'
            }}
        ></Box>
    )
}
