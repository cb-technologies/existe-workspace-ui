import * as React from 'react';
import Box from '@mui/material/Box';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Stack} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function NameForm() {
    return <div >
        <TextField
            id="outlined-prenom-input"
            label="Prenom"
        />
        <TextField
            id="outlined-nom-input"
            label="Nom"
        />
        <TextField
            id="outlined-postnom-input"
            label="Post-Nom"
        />
    </div>
}

function SexeForm() {
    return (
        <FormGroup>
            <div><FormControlLabel control={<Checkbox />} label="Homme" />
                <FormControlLabel control={<Checkbox />} label="Femme" />
            </div>
        </FormGroup>
    );
}


function AddressForm() {
    return <div>
        <TextField
            id="outlined-ville-input"
            label="Ville"
        />
        <TextField
            id="outlined-quartier-input"
            label="Quartier"
        />
        <TextField
            id="outlined-avenue-input"
            label="Avenue"
        />
        <TextField
            id="outlined-commune-input"
            label="Commune"
        />

        <TextField
            id="outlined-numero-input"
            label="Numero"
        />
        <TextField
            id="outlined-codepostal-input"
            label="Code Postal"
        />
        <TextField
            id="outlined-reference-input"
            label="Reference"
        />

    </div>
}


function OriginForm() {
    return <div>
        <TextField
            id="outlined-province-input"
            label="Province"
        />
        <TextField
            id="outlined-cheflieu-input"
            label="Chef-Lieu"
        />
        <TextField
            id="outlined-territoire-input"
            label="Territoire"
        />
        <TextField
            id="outlined-secteur-input"
            label="Secteur"
        />
        <TextField
            id="outlined-village-input"
            label="Village"
        />
    </div>
}

function PhenotypeForm() {
    return <div>
        <TextField
            id="outlined-taille-input"
            label="Taille (cm)"
        />
        <TextField
            id="outlined-poids-input"
            label="Poids (Kg)"
        />
        <TextField
            id="outlined-eyecolor-input"
            label="Couleur des yeux"
        />
    </div>
}

function DateOfBirthForm() {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={1}>
        <DatePicker
            views={['day', 'month', 'year']}
            label="Date de naissance"
            value={value}
            onChange={(newValue?:any) => {
                setValue(newValue);
            }}
            renderInput={(params?:any) => <TextField {...params} helperText={null} />}
        />
        </Stack>
    </LocalizationProvider>
}

export default function RegisterForm() {
    return (
        <Box
            component={"form"}
            sx={{
            '& .MuiTextField-root': { m: 1,  width: '25ch' },
        }}
             noValidate
             autoComplete={"off"}
        >
            <Typography variant="h6" component="h6" gutterBottom>
                1. Entrez les Noms de l'individu
            </Typography>
            <NameForm></NameForm>
            <Typography variant="h6" component="h6" gutterBottom>
                2. Entrez le Sexe l'individu
            </Typography>
            <SexeForm></SexeForm>
            <Typography variant="h6" component="h6" gutterBottom>
                3. Entrez la Date de Naissance de l'individu
            </Typography>
            <DateOfBirthForm></DateOfBirthForm>
            <Typography variant="h6" component="h6" gutterBottom>
                4. Entrez l'Adresse de l'individu
            </Typography>
            <AddressForm></AddressForm>
            <Typography variant="h6" component="h6" gutterBottom>
                5. Entrez les Origines de l'individu
            </Typography>
            <OriginForm></OriginForm>
            <Typography variant="h6" component="h6" gutterBottom>
                6. Entrez les Phénotypes de l'individu
            </Typography>
            <PhenotypeForm></PhenotypeForm>

        </Box>
    );
}
