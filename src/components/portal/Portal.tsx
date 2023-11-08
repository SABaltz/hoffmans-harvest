import {secondaryColor, textContrastColor} from "../../global-parameters/Parameters";
import {Button, Link, Typography} from "@mui/material";
import React from "react";
import {ExitToApp} from "@mui/icons-material";

function Portal() {
    return (
        <Button
            sx={{
                color: textContrastColor,
                backgroundColor: secondaryColor,
                display: 'block',
                '&:hover': {
                    backgroundColor: secondaryColor,
                }
            }}>
            <Link href={`/home`} sx={{textDecoration: 'none'}}>
                <Typography> Exit Portal <ExitToApp/></Typography>
            </Link>
        </Button>
    )
}

export default Portal
