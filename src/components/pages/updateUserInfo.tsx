import * as React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
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
import {
  Biometric,
  DateOfBirth,
  Names,
  Origin,
  PersonInfoRequest,
  Phenotype,
  Address,
  EditPersonInfoParameters,
  NationalIDNumber,
  PersonInfoResponse,
} from "../../grpc/pb/message_and_service_pb";
import * as grpcWeb from "grpc-web";
import { ExistCRUDClient } from "../../grpc/pb/Message_and_serviceServiceClientPb";

interface UpdateUserFormInput {
  Prenom: string;
  Nom: string;
  PostNom: string;

  Ville: string;
  Quartier: string;
  Avenue: string;
  Commune: string;
  Numero: number;
  CodePostal: number;
  Reference: string;

  Day: string;
  Month: string;
  Year: string;

  Taille: number;
  Poids: number;
  EyeColor: string;
}

const schema = yup.object().shape({
  //requirement for the inputs
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

  Taille: yup.number().required("Taille cannot be empty"),
  Poids: yup.number().required("Poids cannot be empty"),
  EyeColor: yup.string().required().min(2).max(30),
});

// @ts-ignore
function NameForm({register, errors,defaultFirstName,defaultLastName,defaultMiddleName,}) {

  return (
    <div>
      <TextField
        {...register("Prenom")}
        id="outlined-prenom-input"
        helperText={errors.Prenom?.message}
        error={!!errors.Prenom}
        value={defaultFirstName}
        />
      <TextField
        {...register("Nom")}
        id="outlined-nom-input"
        label="Nom"
        helperText={errors.Nom?.message}
        error={!!errors.Nom}
        defaultValue={defaultLastName}
      />
      <TextField
        {...register("PostNom")}
        id="outlined-postnom-input"
        label="Post-Nom"
        helperText={errors.PostNom?.message}
        error={!!errors.PostNom}
        defaultValue={defaultMiddleName}
      />
    </div>
  );
}

// @ts-ignore
function OriginForm({ register, errors }) {
  return (
    <div>
      <TextField
        {...register("Province")}
        id="outlined-province-input"
        label="Province"
        helperText={errors.Province?.message}
        error={!!errors.Province}
        disabled
      />
      <TextField
        {...register("ChefLieu")}
        id="outlined-cheflieu-input"
        label="Chef-Lieu"
        helperText={errors.ChefLieu?.message}
        error={!!errors.ChefLieu}
        disabled
      />
      <TextField
        {...register("Territoire")}
        id="outlined-territoire-input"
        label="Territoire"
        helperText={errors.Territoire?.message}
        error={!!errors.Territoire}
        disabled
      />
      <TextField
        {...register("Secteur")}
        id="outlined-secteur-input"
        label="Secteur"
        helperText={errors.Secteur?.message}
        error={!!errors.Secteur}
        disabled
      />
      <TextField
        {...register("Village")}
        id="outlined-village-input"
        label="Village"
        helperText={errors.Village?.message}
        error={!!errors.Village}
        disabled
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
function AddressForm({ register, errors }) {
  return (
    <div>
      <TextField
        {...register("Ville")}
        id="outlined-ville-input"
        label="Ville"
        helperText={errors.Ville?.message}
        error={!!errors.Ville}
        required
      />
      <TextField
        {...register("Quartier")}
        id="outlined-quartier-input"
        label="Quartier"
        helperText={errors.Quartier?.message}
        error={!!errors.Quartier}
        required
      />
      <TextField
        {...register("Avenue")}
        id="outlined-avenue-input"
        label="Avenue"
        helperText={errors.Avenue?.message}
        error={!!errors.Avenue}
        required
      />
      <TextField
        {...register("Commune")}
        id="outlined-commune-input"
        label="Commune"
        helperText={errors.Commune?.message}
        error={!!errors.Commune}
        required
      />

      <TextField
        {...register("Numero")}
        id="outlined-numero-input"
        label="Numero"
        helperText={errors.Numero?.message}
        error={!!errors.Numero}
        required
      />
      <TextField
        {...register("CodePostal")}
        id="outlined-codepostal-input"
        label="Code Postal"
        helperText={errors.CodePostal?.message}
        error={!!errors.CodePostal}
        required
      />
      <TextField
        {...register("Reference")}
        id="outlined-reference-input"
        label="Reference"
        helperText={errors.Reference?.message}
        error={!!errors.Reference}
        required
      />
    </div>
  );
}

// @ts-ignore
function PhenotypeForm({ register, errors }) {
  return (
    <div>
      <TextField
        {...register("Taille")}
        id="outlined-taille-input"
        label="Taille (cm)"
        helperText={errors.Taille?.message}
        error={!!errors.Taille}
        required
      />
      <TextField
        {...register("Poids")}
        id="outlined-poids-input"
        label="Poids (Kg)"
        helperText={errors.Poids?.message}
        error={!!errors.Poids}
        required
      />
      <TextField
        {...register("EyeColor")}
        id="outlined-eyecolor-input"
        label="Couleur des yeux"
        helperText={errors.EyeColor?.message}
        error={!!errors.EyeColor}
        required
      />
    </div>
  );
}

// @ts-ignore
function DateOfBirthForm({ register, errors }) {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={1}>
        <DatePicker
          views={["day", "month", "year"]}
          label="Date de naissance"
          value={value}
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
function mapdata(data) {
  var personId = new NationalIDNumber().setId("5ff51101300002e");

  var names = new Names().setNom(data.Nom);
  names.setPrenom(data.Prenom);
  names.setMiddleNamesList([data.PostNom]);

  var phenotype = new Phenotype().setEyeColor(data.EyeColor);
  phenotype.setHeight(data.Height);
  phenotype.setWeight(data.Poids);

  var biometric = new Biometric().setPhotos("bbbbbbbbbb");

  var dob = new DateOfBirth().setDay("23");
  dob.setMonth("march");
  dob.setYear("1998");

  var address = new Address().setAvenue(data.Avenue);
  address.setCommune(data.Commune);
  address.setQuartier(data.Quartier);
  address.setNumber(data.Numero);
  address.setVille(data.Ville);
  address.setZipCode(data.CodePostal);
  address.setReference(data.Reference);

  var personInfoRequest = new PersonInfoRequest().setNames(names);
  personInfoRequest.setAddress(address);
  personInfoRequest.setBiometrics(biometric);
  personInfoRequest.setDateOfBirth(dob);
  personInfoRequest.setPhenotypes(phenotype);

  var editPersonInfoParameters =
    new EditPersonInfoParameters().setEditedpersoninfo(personInfoRequest);
  editPersonInfoParameters.setPersonid(personId);

  return editPersonInfoParameters;
}

// @ts-ignore
function updateUserInformation(data) {
  var client = new ExistCRUDClient("http://localhost:4551/", null, null);

  var EditPersonInfoParameters = mapdata(data);
  client.updatePersonInfo(
    EditPersonInfoParameters,
    null,
    (err: grpcWeb.RpcError) => {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      }
    }
  );
}

// @ts-ignore
function PersonInfoResponseToMap(personInfoRespose: PersonInfoResponse) {
  var jsonObject = {
    Names: {
      Nom: personInfoRespose.getNames()?.getNom().toString()!,
      Prenom: personInfoRespose.getNames()?.getPrenom().toString()!,
      MiddleNames: personInfoRespose
        .getNames()
        ?.getMiddleNamesList()
        .toString()!,
    },
  };
  return jsonObject;
}
// @ts-ignore
export default function UpdateUserForm() {
  const [userInfo, setUserInformation] = useState<PersonInfoResponse>();
  const [userInfoJSON, setUserInfoJSON] = useState<any>([]);

  const client = new ExistCRUDClient("http://localhost:4551/", null, null);
  var nationalIDNumber = new NationalIDNumber().setId("5ff51101300002e");

  const [defaultFirstName, setDefaultFirstName] = useState<String>("")
  var defaultMiddleName : string 

  var defaultLastName : string


  client.findPersonInfo(nationalIDNumber, null).then((value) => {
    setUserInformation(value);
    setDefaultFirstName(userInfo?.getNames()?.getPrenom().toString()!);
   defaultMiddleName = userInfo?.getNames()?.getMiddleNamesList().toString()!;
   defaultLastName = userInfo?.getNames()?.getNom().toString()!;
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserFormInput>({
    resolver: yupResolver(schema),
  });

  const [json, setJson] = useState<string>();

  // @ts-ignore
  const onSubmit = (data: UpdateUserFormInput) => {
    setJson(JSON.stringify(data));
    console.log(data);
    updateUserInformation(data);
  };

  return (
    <Box
      component={"form"}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete={"off"}
    >
      <Typography variant="h6" component="h6" gutterBottom>
        1.Modifiez les Noms de l'individu
      </Typography>
      <NameForm
        register={register}
        errors={errors}
        defaultFirstName={defaultFirstName!}
        defaultMiddleName={defaultMiddleName!}
        defaultLastName={defaultLastName!}
      ></NameForm>
      <Typography variant="h6" component="h6" gutterBottom>
        2.Modifiez le Sexe l'individu
      </Typography>
      <SexForm></SexForm>
      <Typography variant="h6" component="h6" gutterBottom>
        3.Modifiez la Date de Naissance de l'individu
      </Typography>
      <DateOfBirthForm register={register} errors={errors}></DateOfBirthForm>
      <Typography variant="h6" component="h6" gutterBottom>
        4.Modifiez l'Adresse de l'individu
      </Typography>
      <AddressForm register={register} errors={errors}></AddressForm>
      <Typography variant="h6" component="h6" gutterBottom>
        5.Modifiez les Origines de l'individu
      </Typography>
      <OriginForm register={register} errors={errors}></OriginForm>
      <Typography variant="h6" component="h6" gutterBottom>
        6.Modifiez les Phénotypes de l'individu
      </Typography>
      <PhenotypeForm register={register} errors={errors}></PhenotypeForm>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit(onSubmit)}
      >
        Enregistrez
      </Button>
      {json && (
        <>
          <Typography variant="body2">{json}</Typography>
        </>
      )}
    </Box>
  );
}
