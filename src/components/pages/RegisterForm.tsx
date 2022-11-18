import * as React from 'react';
import * as grpcWeb from 'grpc-web';
import Box from '@mui/material/Box';
import { useState } from "react";
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Select, Stack} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as yup from "yup"; // to validate the form input
import { useForm } from "react-hook-form"; // to handle the form's submission and error states
import { yupResolver } from "@hookform/resolvers/yup";
import Button from '@mui/material/Button';
import {Address, Biometric, DateOfBirth, EditPersonInfoParameters, Origin,Names, NationalIDNumber, PersonInfoRequest, Phenotype } from "../../grpc/pb/message_and_service_pb";
import { ExistService } from "../../store/exist_api_call";
import useHistoryState from "../../hooks/useHistoryState";
import Container from '@mui/material/Container';
import { URLExistPath } from '../../constants/existUrlPath';
import { ZipCode } from '../../constants/zipCodeKinshasa';
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel'; 
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


var globalDay: string;
var globalMonth: string;
var globalYear: string;


interface RegisterFormInput {
    Prenom: string
    Nom: string
    PostNom: string

    Ville: string
    Quartier: string
    Avenue: string
    Commune: string
    Numero: number
    CodePostal: number
    Reference: string

    Province: string
    ChefLieu: string
    Territoire: string
    Secteur: string
    Village: string


    Taille: number
    Poids: number
    EyeColor: string
}



const schema = yup.object().shape({ //requirement for the inputs
    Nom: yup.string().required().min(2).max(30),
    Prenom: yup.string().required().min(2).max(30),
    PostNom: yup.string().required().min(2).max(30),

    Ville: yup.string().required().min(2).max(30),
    Quartier: yup.string().required().min(2).max(30),
    Avenue: yup.string().required().min(2).max(30),
    Commune: yup.string().required().min(2).max(30),
    Numero: yup.number().required("Numero cannot be empty"),
    CodePostal: yup.number().required("Code Postal cannot be empty"),
    Reference: yup.string().required().min(2).max(30),

    Province: yup.string().required().min(2).max(30),
    ChefLieu: yup.string().required().min(2).max(30),
    Territoire: yup.string().required().min(2).max(30),
    Secteur: yup.string().required().min(2).max(30),
    Village: yup.string().required().min(2).max(30),

    Taille: yup.number().required("Taille cannot be empty"),
    Poids: yup.number().required("Poids cannot be empty"),
    EyeColor: yup.string().required().min(2).max(30),



});

// @ts-ignore
function NameForm({register, errors}) {
    const [dfirstName, setDFirstName] = useHistoryState("FirstName", "");
    const [dLastName, setDLastName] = useHistoryState("LastName", "");
    const [dMiddleNames, setDMiddleNames] = useHistoryState("MiddleName", "")

    return (
        <div>
          <TextField
            {...register("Prenom")}
            id="outlined-prenom-input"
            label="Prenom"
            helperText={errors.Prenom?.message}
            error={!!errors.Prenom}
            value={dfirstName}
            onChange={(e) => setDFirstName(e.target.value)}
          />
          <TextField
            {...register("Nom")}
            id="outlined-nom-input"
            label="Nom"
            helperText={errors.Nom?.message}
            error={!!errors.Nom}
            value={dLastName}
            onChange={(e) => setDLastName(e.target.value)}
          />
          <TextField
            {...register("PostNom")}
            id="outlined-postnom-input"
            label="Post-Nom"
            helperText={errors.PostNom?.message}
            error={!!errors.PostNom}
            value={dMiddleNames}
            onChange={(e) => setDMiddleNames(e.target.value)}
          />
        </div>
      );
}

function SexForm() {
    return (
        <FormGroup>
            <div><FormControlLabel control={<Checkbox />} label="Homme" />
                <FormControlLabel control={<Checkbox />} label="Femme" />
            </div>
        </FormGroup>
    );
}

// @ts-ignore
function AddressForm({ register, errors }) {
    
    const [dVille, setDVille] = useHistoryState("Ville", "");
    const [dQuartier, setDQuartier] = useHistoryState("Quartier", "");
    const [dAvenue, setDAvenue] = useHistoryState("Avenue", "")
    const [dCommune, setDCommune] = useHistoryState("Commune", "")
    const [dNumero, setDNumero] = useHistoryState("Numero", "")
    const [dCodePostal, setDCodePostal] = useHistoryState("CodePostal", "")
    const [dReference, setDReference] = useHistoryState("Reference", "")




    return (
        <div>
          <TextField
            {...register("Ville")}
            id="outlined-ville-input"
            label="Ville"
            helperText={errors.Ville?.message}
            error={!!errors.Ville}
            required
            value={dVille}
            onChange={(e) => setDVille(e.target.value)}
          />
          <TextField
            {...register("Quartier")}
            id="outlined-quartier-input"
            label="Quartier"
            helperText={errors.Quartier?.message}
            error={!!errors.Quartier}
            required
            value={dQuartier}
            onChange={(e) => setDQuartier(e.target.value)}
          />
          <TextField
            {...register("Avenue")}
            id="outlined-avenue-input"
            label="Avenue"
            helperText={errors.Avenue?.message}
            error={!!errors.Avenue}
            required
            value={dAvenue}
            onChange={(e) => setDAvenue(e.target.value)}
          />
          <TextField
            {...register("Commune")}
            id="outlined-commune-input"
            label="Commune"
            helperText={errors.Commune?.message}
            error={!!errors.Commune}
            required
            value={dCommune}
            onChange={(e) => setDCommune(e.target.value)}
          />
    
          <TextField
            {...register("Numero")}
            id="outlined-numero-input"
            label="Numero"
            helperText={errors.Numero?.message}
            error={!!errors.Numero}
            required
            value={dNumero}
            onChange={(e) => setDNumero(e.target.value)}
          />
          <TextField
            {...register("CodePostal")}
            id="outlined-codepostal-input"
            label="Code Postal"
            helperText={errors.CodePostal?.message}
            error={!!errors.CodePostal}
            required
            value={dCodePostal}
            onChange={(e) => setDCodePostal(e.target.value)}
          />
          <TextField
            {...register("Reference")}
            id="outlined-reference-input"
            label="Reference"
            helperText={errors.Reference?.message}
            error={!!errors.Reference}
            required
            value={dReference}
            onChange={(e) => setDReference(e.target.value)}
          />
        
        </div>  
      );
}

// @ts-ignore
function OriginForm({register, errors}) {

    const [dProvince, setDProvince] = useHistoryState("Province","");
    const [dChefLieu, setDChefLieu] = useHistoryState("ChefLieu","");
    const [dTerritoire, setDTerritoire] = useHistoryState("Territoire","")
    const [dSecteur, setDSecteur] = useHistoryState("Secteur","")
    const [dVillage, setDVillage] = useHistoryState("Village","")


    return <div>
        <TextField
            {...register("Province")}
            id="outlined-province-input"
            label="Province"
            helperText={errors.Province?.message}
            error={!!errors.Province}
            required
            value={dProvince}
            onChange={(e) => setDProvince(e.target.value)}
        />
        <TextField
            {...register("ChefLieu")}
            id="outlined-cheflieu-input"
            label="Chef-Lieu"
            helperText={errors.ChefLieu?.message}
            error={!!errors.ChefLieu}
            required
            value={dChefLieu}
            onChange={(e) => setDChefLieu(e.target.value)}
        />
        <TextField
            {...register("Territoire")}
            id="outlined-territoire-input"
            label="Territoire"
            helperText={errors.Territoire?.message}
            error={!!errors.Territoire}
            required
            value={dTerritoire}
            onChange={(e) => setDTerritoire(e.target.value)}
        />
        <TextField
            {...register("Secteur")}
            id="outlined-secteur-input"
            label="Secteur"
            helperText={errors.Secteur?.message}
            error={!!errors.Secteur}
            required
            value={dSecteur}
            onChange={(e) => setDSecteur(e.target.value)}
        />
        <TextField
            {...register("Village")}
            id="outlined-village-input"
            label="Village"
            helperText={errors.Village?.message}
            error={!!errors.Village}
            required
            value={dVillage}
            onChange={(e) => setDVillage(e.target.value)}
        />
    </div>
}

// @ts-ignore
function PhenotypeForm({register, errors}) {

    const [dTaille, setDTaille] = useHistoryState("Taille","");
    const [dPoids, setDPoids] = useHistoryState("Poids","");
    const [dEyeColor, setDEyeColor] = useHistoryState("EyeColor","")

    return (
        <div>
          <TextField
            {...register("Taille")}
            id="outlined-taille-input"
            label="Taille (cm)"
            helperText={errors.Taille?.message}
            error={!!errors.Taille}
            required
            value={dTaille}
            onChange={(e) => setDTaille(e.target.value)}
          />
          <TextField
            {...register("Poids")}
            id="outlined-poids-input"
            label="Poids (Kg)"
            helperText={errors.Poids?.message}
            error={!!errors.Poids}
            required
            value={dPoids}
            onChange={(e) => setDPoids(e.target.value)}
          />
          <TextField
                {...register("EyeColor")}
            id="outlined-eyecolor-input"
            label="Couleur des yeux"
            helperText={errors.EyeColor?.message}
            error={!!errors.EyeColor}
            required
            value={dEyeColor}
            onChange={(e) => setDEyeColor(e.target.value)}
          />
        </div>
      );
}

// @ts-ignore
function DateOfBirthForm({register}) {
    const [value, setValue] = React.useState<Dayjs | null>(null);

    
    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={1}>
            <DatePicker
            views={['day', 'month', 'year']}
            label="Date de naissance"
                value={value}
                onAccept={(newValue?: Dayjs | null) => {
                    globalYear = newValue!.year().toString();
                    globalMonth = (newValue!.month() + 1).toString()
                    globalDay = newValue!.date().toString()      
                }}
            onChange={(newValue?:any) => {
                setValue(newValue);
                
            }}
            renderInput={(params?:any) => <TextField {...params} helperText={null} />}
        />
        </Stack>
    </LocalizationProvider>
}

// @ts-ignore
function mapdata (data) {
    var names = new Names().setNom(data.Nom)
    names.setPrenom(data.Prenom)
    names.setMiddleNamesList([data.PostNom])

    var origins = new Origin().setChefLieu(data.ChefLieu)
    origins.setProvinceList([data.Province])

    var phenotype = new Phenotype().setEyeColor(data.EyeColor)
    phenotype.setHeight(data.Height)
    phenotype.setWeight(data.Poids)

    var biometric = new Biometric().setFingerPrint("bbbbbbbbbbb")
    biometric.setPhotos("bbbbbbbbbb")

    var dob = new DateOfBirth().setDay(globalDay)
    dob.setMonth(globalMonth)
    dob.setYear(globalYear)

    var address = new Address().setAvenue(data.Avenue)
    address.setCommune(data.Commune)
    address.setQuartier(data.Quartier)
    address.setNumber(data.Numero)
    address.setVille(data.Ville)
    address.setZipCode(data.CodePostal)
    address.setReference(data.Reference)

    var personInfoRequest = new PersonInfoRequest().setNames(names)
    personInfoRequest.setAddress(address)
    personInfoRequest.setBiometrics(biometric)
    personInfoRequest.setDateOfBirth(dob)
    personInfoRequest.setOrigins(origins)
    personInfoRequest.setPhenotypes(phenotype)

    return personInfoRequest



}

function delay(milliseconds : number) {
    return new Promise(resolve => setTimeout( resolve, milliseconds));
}

export default function RegisterForm() {


    const [spinRegister, setSpinRegister] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: RegisterFormInput) => {
        var personInfoRequest = mapdata(data)
        setSpinRegister(true);
        try {
            ExistService.addNewPersonInfo(personInfoRequest, null).then((value) => {
                if (value.getStatus() === 1) {
                    (async () => { 
                        setShowAlert(true);
                        setSpinRegister(false);
                        await delay(3000);
                        setShowAlert(false)
                    })();
                    
                } else {
                console.log("Could not register a citizen");
                }
           }).catch ((error) => {
                console.log(`try error ${error}`)
                setSpinRegister(false);
      });
    } catch (error) {
        console.log(`try error ${error}`)
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
            sx={{
            '& .MuiTextField-root': { m: 1,  width: '25ch',},
        }}
             noValidate
             autoComplete={"off"}
            >
                <Typography variant="h3" gutterBottom>
                    
                </Typography>
                <Typography variant="h3" gutterBottom>
                    Enregistrez l'individu
                </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
                1. Entrez les Noms de l'individu
            </Typography>
          <NameForm register={register} errors={errors}></NameForm>
            <Typography variant="h6" component="h6" gutterBottom>
                2. Entrez le Sexe l'individu
            </Typography>
            <SexForm ></SexForm>
            <Typography variant="h6" component="h6" gutterBottom>
                3. Entrez la Date de Naissance de l'individu
            </Typography>
            <DateOfBirthForm register={register}></DateOfBirthForm>
            <Typography variant="h6" component="h6" gutterBottom>
                4. Entrez l'Adresse de l'individu
            </Typography>
            <AddressForm register={register} errors={errors}></AddressForm>
            <Typography variant="h6" component="h6" gutterBottom>
                5. Entrez les Origines de l'individu
            </Typography>
            <OriginForm register={register} errors={errors}></OriginForm>
            <Typography variant="h6" component="h6" gutterBottom>
                6. Entrez les Phénotypes de l'individu
            </Typography>
            <PhenotypeForm register={register} errors={errors}></PhenotypeForm>
                {!spinRegister ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enregistrez l'individu
              </Button>
            ) : (
              <LoadingButton
                loading
                fullWidth
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                  Enregistrez l'individu
              </LoadingButton>
                )}
                { showAlert && 
                    <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Success — <strong>Done!</strong>
                    </Alert>
                }     
                
        </Box>
        </Container>
        
    );
}
