import terranimWall from "../../static/terranium-wallpaper.webp";
import {Box} from "@mui/material";

function Work() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${terranimWall})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '100vh',
            }}
        ></Box>
    )
}

export default Work;
