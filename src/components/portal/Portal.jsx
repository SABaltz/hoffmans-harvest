import {Box, Button, Card, CardContent, Link, List, ListItem, TextField, Typography} from "@mui/material";
import React, {useContext} from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {centerVertHoriz} from "../../global-parameters/Styles";
import {ParameterContext} from "../../App";

function Portal() {
    const parameters = useContext(ParameterContext);
    return (

        <Box sx={{width: '100vw', height: '100vh', backgroundColor: parameters.colorPalette.primary}}>

            <Button
                sx={{
                    color: parameters.colorPalette.textContrast,
                    backgroundColor: parameters.colorPalette.secondary,
                    display: 'block',
                    '&:hover': {
                        backgroundColor: parameters.colorPalette.secondary,
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
                <Card sx={{width: '90vw', backgroundColor: parameters.colorPalette.secondary, ...centerVertHoriz}}>
                    <CardContent>
                        <List>
                            <ListItem>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined"
                                           onChange={(event) => {
                                               console.log(event.target.value);
                                           }}/>
                            </ListItem>
                        </List>

                    </CardContent>
                </Card>
            </Box>


        </Box>
    )
}

export default Portal
