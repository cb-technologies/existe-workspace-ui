import * as React from "react";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Stack } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as yup from "yup"; // to validate the form input
import { useForm } from "react-hook-form"; // to handle the form's submission and error states
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import { URLExistPath } from "../../constants/existUrlPath";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {
  DateOfBirth,
  RetreivePersonInfoParameters,
  Names,
  PersonInfoResponse,
} from "../../grpc/pb/message_and_service_pb";
import { ExistService } from "../../store/exist_api_call";
import useHistoryState from "../../hooks/useHistoryState";
import Container from "@mui/material/Container";
import { useNavigate, useLocation } from "react-router-dom"; //import the package
import { Auth } from "aws-amplify";
import { AuthContext } from "../../store/auth_context";
//import { useNavigate, useLocation } from "react-router-dom";

var globalDay: string;
var globalMonth: string;
var globalYear: string;

interface RetrieveFormInput {
  Prenom: string;
  Nom: string;
  PostNom: string;
}

const schema = yup.object().shape({
  Nom: yup.string().required("Nom non valide").min(2).max(30),
  Prenom: yup.string().required("Prenom non valide").min(2).max(30),
  PostNom: yup
    .string()
    .required("Postnom non valide")
    .min(2)
    .max(30),
});

// @ts-ignore
function NameForm({ register, errors }) {
  const [dfirstName, setDFirstName] = useHistoryState("FirstName", "");
  const [dLastName, setDLastName] = useHistoryState("LastName", "");
  const [dMiddleNames, setDMiddleNames] = useHistoryState("MiddleName", "");

  return (
    <div>
      <TextField
        {...register("Prenom")}
        id="outlined-prenom-input"
        label="Prenom"
        helperText={errors.Prenom?.message}
        error={!!errors.Prenom}
        value={dfirstName.toUpperCase()}
        onChange={(e) => setDFirstName(e.target.value)}
      />
      <TextField
        {...register("Nom")}
        id="outlined-nom-input"
        label="Nom"
        helperText={errors.Nom?.message}
        error={!!errors.Nom}
        value={dLastName.toUpperCase()}
        onChange={(e) => setDLastName(e.target.value)}
      />
      <TextField
        {...register("PostNom")}
        id="outlined-postnom-input"
        label="Post-Nom"
        helperText={errors.PostNom?.message}
        error={!!errors.PostNom}
        value={dMiddleNames.toUpperCase()}
        onChange={(e) => setDMiddleNames(e.target.value)}
      />
    </div>
  );
}

function SexForm() {
  return (
    <FormGroup>
      <div>
        <FormControlLabel control={<Checkbox />} label="Homme" />
        <FormControlLabel control={<Checkbox />} label="Femme" />
      </div>
    </FormGroup>
  );
}
// @ts-ignore
function DateOfBirthForm({ register }) {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  console.log("debug dob");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={1}>
        <DatePicker
          views={["day", "month", "year"]}
          label="Date de naissance"
          value={value}
          onAccept={(newValue?: Dayjs | null) => {
            globalYear = newValue!.year().toString();
            globalMonth = (newValue!.month() + 1).toString();
            globalDay = newValue!.date().toString();
          }}
          onChange={(newValue?: any) => {
            setValue(newValue);
          }}
          renderInput={(params?: any) => (
            <TextField {...params} helperText={null} />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}

// @ts-ignore
function retreivemapdata(data) {
  var names = new Names().setNom(data.Nom);
  names.setPrenom(data.Prenom);
  names.setMiddleNamesList([data.PostNom]);
  var dob = new DateOfBirth().setDay(globalDay);
  dob.setMonth(globalMonth);
  dob.setYear(globalYear);
  var retreivePersonInfoParameters =
    new RetreivePersonInfoParameters().setNames(names);
  retreivePersonInfoParameters.setDateOfBirth(dob);
  console.log("names are", names);
  console.log("date of birth ", dob);
  console.log("finaly the personInput is", retreivePersonInfoParameters);

  return retreivePersonInfoParameters;
}

export default function RetrieveUserInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RetrieveFormInput>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const location = useLocation();
  const flag = location.state.flag_to_page;
  // @ts-ignore
  //   function retreiveUser(data): PersonInfoResponse {


  // useEffect(() => {
  //   console.log("arriviO yeba tseng")
  //   console.log(isLoggedIn)
  //   async function checkAuth() {
  //     try {
  //       const user = await Auth.currentUserInfo();
  //       console.log("arriving")
  //       setIsLoggedIn(true);
  //       setRole(user.attributes['custom:role'])
  //       setNom(user.attributes['custom:nom'])
  //       setPrenom(user.attributes['custom:prenom'])
  //       setPhoneNumber(user.attributes['custom:phonenumber'])
        
  //     } catch {
  //       console.log("Petage")
  //       setIsLoggedIn(false);
  //       navigateTo(URLExistPath.SignInPage, "to_sign_in");
  //     }
  //   }
  //   checkAuth();
  // }, [isLoggedIn]);

  function retreiveUser(data): PersonInfoResponse {
    var retreivePersonInfoParameters = retreivemapdata(data);
    console.log("Person Parameter", retreivePersonInfoParameters);

    ExistService.retreiveUserBasedOnField(
      retreivePersonInfoParameters,
      null
    ).then((userInfo) => {
      const userInfoObject = userInfo.toObject();
      console.log("Petage", userInfo.getBiometrics()?.getPhotos_asB64());
      console.log("AnotherPetage", userInfo.getBiometrics()?.getPhotoType());
      if (flag == "to_generate") {
        navigate(URLExistPath.GeneratedCardPage, {
          state: { cardInfo: userInfoObject },
        });
      } else {
        navigate(URLExistPath.UpdateUserInfoForm, {
          state: { cardInfo: userInfoObject },
        });
      }
    });
  }

  const [json, setJson] = useState<string>();
  const [dataResposnse, setDataResponse] = useState<PersonInfoResponse>();
  
  const navigateTo = (page: string, flag: string) => {
    navigate(page,{ state: { flag_to_page: flag } });
  };


  const authContext = React.useContext(AuthContext);
  
  const [role, setRole] = useState(authContext.user.attributes['custom:role']);
  const [isLoggedIn, setIsLoggedIn] = useState(authContext.isAuthenticated);

  

  const onSubmit = (data: RetrieveFormInput) => {
    setJson(JSON.stringify(data));
    setDataResponse(retreiveUser(data));
  };

  const [encryptionKey, setEncryptionKey] = useState('');

  if (isLoggedIn && (role === "Admin" || role === "Registrator")) {
    return (
      <Container maxWidth="sm">
        <Box
          component={"form"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete={"off"}
        >
          <Typography variant="h1" gutterBottom></Typography>
          <Typography variant="h6" component="h6" gutterBottom>
            1. Retrouvez l'individu
          </Typography>
          <NameForm register={register} errors={errors}></NameForm>
          <Typography variant="h6" component="h6" gutterBottom>
            2. Entrez le Sexe l'individu
          </Typography>
          <SexForm></SexForm>
          <Typography variant="h6" component="h6" gutterBottom>
            3. Entrez la Date de Naissance de l'individu
          </Typography>
          <DateOfBirthForm register={register}></DateOfBirthForm>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Retrouvez le citoyen
            {/* <Route path="/updateUserInfo" element={<UpdateUserForm  UpdateUserFormProps ={dataResposnse} />} /> */}
          </Button>
        </Box>
        <div>
          ----------------------------------------------------------------------------------------------------
        </div>
  
        <Box>
          <Typography textAlign="center" variant="h6" component="h6" gutterBottom>
            Entrez le QR code encrypté:
          </Typography>
          <TextField fullWidth value={encryptionKey} onChange={(e) => setEncryptionKey(e.target.value)}></TextField>
          <div>
  
          </div>
          <Button sx={{mt: 1, ml: 1, mr: 20}} variant="contained" color="primary"> Générer la carte </Button>
  
          <Button sx={{mt: 1, ml: 1}}  variant="contained" color="primary"> Vérifier la carte </Button>
        </Box>
      </Container>
    );
  }else {
    return(
      <div>
      <Alert severity="error">
                <AlertTitle>Accès refusé</AlertTitle>
                "Désolé, vous n'êtes pas autorisé à accéder à cette page" — <strong>Accès refusé</strong>
          </Alert>
    </div>
    );
  }  
}
