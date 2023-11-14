import {colorPalette} from "../../global-parameters/Parameters";
import {Box, Button, Card, CardContent, Link, TextField, Typography} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {centerVertHoriz} from "../../global-parameters/Styles";

function Portal() {
    return (
        <Box sx={{width: '100vw', height: '100vh', backgroundColor: colorPalette.primary}}>

            <Button
                sx={{
                    color: colorPalette.textContrast,
                    backgroundColor: colorPalette.secondary,
                    display: 'block',
                    '&:hover': {
                        backgroundColor: colorPalette.secondary,
                    },
                    marginLeft: '1rem'
                }}>
                <Link href={`/home`} sx={{textDecoration: 'none'}}>
                    <Typography sx={{display: 'flex', alignItems: 'center'}}>
                        <KeyboardDoubleArrowLeftIcon/>
                        Exit Portal
                    </Typography>
                </Link>
            </Button>
            <Box sx={{width: '100vw', ...centerVertHoriz, marginTop: '2rem'}}>
                <Card sx={{width: '90vw', backgroundColor: colorPalette.secondary, ...centerVertHoriz}}>
                    <CardContent>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                       console.log(event.target.value);
                                   }}/>
                    </CardContent>
                </Card>
            </Box>


        </Box>
    )
}

export default Portal
