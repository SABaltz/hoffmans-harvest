import {Box, Button, Card, CardContent, Link, List, ListItem, TextField, Typography} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {centerVertHoriz} from "../../global-parameters/Styles";

function Portal({parameters, setParameters}) {
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
                                               setParameters({
                                                   ...parameters, colorPalette: {
                                                       primary: event.target.value,
                                                       secondary: '#88e17c',
                                                       tertiary: '#bfc432',
                                                       hover: '#2a7310',
                                                       text: '#dcdcdc',
                                                       textContrast: '#000000',
                                                   }
                                               })
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
