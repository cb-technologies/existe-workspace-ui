import * as React from 'react';
import {Box, Card, CardContent, Container, TextField, Typography} from "@mui/material";
import QrCode from "../../utils/qrCodeGenerate";


const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'primary.main',
    m: 1,
    border: 3,
    width: '25rem',
    height: '25rem',
};


export default function UserProfilePage() {
    return (
        <Box justifyContent="center">
            <Container sx={{
                px: 10,
                maxWidth: '50%',
                backgroundColor: 'background.paper',
                marginTop: 5,
                mx: 'auto',
                boxShadow: 3,
            }}>
                <Card sx={{...commonStyles, borderRadius: '50%', mx: 'auto', my: 'auto', mt: 2}}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="secondary.main" gutterBottom> E </Typography>
                    </CardContent>
                </Card>
                <div>
                    <TextField
                        fullWidth
                        id="read-only-input"
                        variant="standard"
                        placeholder="Prénom"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                        }}

                        sx={{
                            mx: 'auto', p: 1, m: 1, textAlign: 'center', minWidth: '30%', maxWidth: '30%'
                        }}
                    />
                    <TextField
                        fullWidth
                        id="read-only-input"
                        variant="standard"
                        placeholder="Nom"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                        }}
                        sx={{
                            mx: 'auto',
                            p: 1,
                            m: 1,
                            ml: 5,
                            alignContent: 'center',
                            textAlign: 'center',
                            minWidth: '30%',
                            maxWidth: '30%'
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="standard"
                        id="read-only-input"
                        placeholder="Postnom"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                        }}
                        sx={{
                            mx: 'auto', p: 1, m: 1, ml: 5, textAlign: 'center', minWidth: '30%', maxWidth: '30%'
                        }}
                    />
                </div>
                <div>
                    <TextField
                        fullWidth
                        variant="standard"
                        id="standard-search"
                        defaultValue="Agent"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true, // <== added this
                        }}
                        sx={{mx: 'auto', p: 1, m: 1, ml: 50, textAlign: 'center', minWidth: '30%', maxWidth: '30%'}}
                    />
                </div>
                <div>
                    <TextField
                        fullWidth
                        variant="standard"
                        id="standard-search"
                        placeholder="Adresse email"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true, // <== added this
                        }}
                        sx={{mx: 'auto', p: 1, m: 1, ml: 50, textAlign: 'center', minWidth: '30%', maxWidth: '30%'}}
                    />
                </div>
                <div>
                    <TextField
                        fullWidth
                        variant="standard"
                        id="standard-search"
                        placeholder="Adresse"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true, // <== added this
                        }}
                        sx={{mx: 'auto', p: 1, m: 1, ml: 50, textAlign: 'center', minWidth: '30%', maxWidth: '30%'}}
                    />

                </div>
                <div>
                    <TextField
                        variant="standard"
                        id="standard-search"
                        placeholder="Ville, Province"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true, // <== added this
                        }}
                        sx={{mx: 'auto', p: 1, m: 1, ml: 50, textAlign: 'center', minWidth: '30%', maxWidth: '30%'}}
                    />
                </div>
            </Container>
        </Box>

    );
}