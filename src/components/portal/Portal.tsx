import {colorPalette} from "../../global-parameters/Parameters";
import {Button, Link, Typography} from "@mui/material";
import React from "react";
import {ExitToApp} from "@mui/icons-material";

function Portal() {
    return (
        <Button
            sx={{
                color: colorPalette.textContrast,
                backgroundColor: colorPalette.secondary,
                display: 'block',
                '&:hover': {
                    backgroundColor: colorPalette.secondary,
                }
            }}>
            <Link href={`/home`} sx={{textDecoration: 'none'}}>
                <Typography> Exit Portal <ExitToApp/></Typography>
            </Link>
        </Button>
    )
}

export default Portal
