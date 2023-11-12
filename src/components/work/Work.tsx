import plantWall from "../../static/plant-work-background.webp";
import {Box} from "@mui/material";

function Work() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${plantWall})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '50vh',
            }}
        ></Box>
    )
}

export default Work;
