import * as React from "react";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as yup from "yup"; // to validate the form input
import { useForm } from "react-hook-form"; // to handle the form's submission and error states
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import {
  Address,
  Biometric,
  DateOfBirth,
  Origin,
  Names,
  PersonInfoRequest,
  Phenotype,
  QRCode,
  Sex
} from "../../grpc/pb/message_and_service_pb";
import { ExistService } from "../../store/exist_api_call";
import useHistoryState from "../../hooks/useHistoryState";
import Container from "@mui/material/Container";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { MenuItem, Stack } from "@mui/material";
import { zipCodeData } from "../../constants/zipCodeKinshasa";
import { secret } from "../../constants/encryptionSecrets";
import { FieldErrorsImpl } from "react-hook-form";
import { SexEnum } from "../../grpc/pb/message_and_service_pb";
import { Auth } from 'aws-amplify';
import { encrypt } from 'n-krypta';

var globalDay: string;
var globalMonth: string;
var globalYear: string;

var globalSex = SexEnum.UNKNOWN;

var globalPicture: string;
var globalPhotoType: string;

interface RegisterFormInput {
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
  ProvinceAddress: string;

  Province: string;
  ChefLieu: string;
  Territoire: string;
  Secteur: string;
  Village: string;
  LieuDeNaissance: string;

  Height: number;
  Poids: number;
  EyeColor: string;
}

const schema = yup.object().shape({
  Nom: yup.string().required("Nom non valide").min(2).max(30),
  Prenom: yup.string().required("Prenom non valide").min(2).max(30),
  PostNom: yup.string().required("Postnom non valide").min(2).max(30),

  Ville: yup.string().required("Ville non valide").min(2).max(30),
  Avenue: yup.string().required("Ville non valide").min(2).max(30),
  Numero: yup
    .number()
    .typeError("Numero non valide")
    .required("Numero non valide"),
  Reference: yup.string().required("Reference non valide").min(2).max(30),
  CodePostal: yup
    .number()
    .typeError("Code Postal non valide")
    .required("Code Postal non valide"),
  ProvinceAddress: yup.string().required("Province non valide").min(2).max(30),

  Province: yup.string().required("Province non valide").min(2).max(30),
  ChefLieu: yup.string().required("Chef lieu non valide").min(2).max(30),
  Territoire: yup.string().required("Territoire non valide").min(2).max(30),
  Secteur: yup.string().required("Secteur non valide").min(2).max(30),
  Village: yup.string().required("Village non valide").min(2).max(30),
  Commune: yup.string().required("Commune non valide").min(2).max(30),
  Quartier: yup.string().required("Quartier non valide").min(2).max(30), 
  LieuDeNaissance: yup
    .string()
    .required("Lieu de naissance non valide")
    .min(2)
    .max(30),

  Height: yup
    .number()
    .typeError("Taille non valide")
    .required("Taille non valide"),
  Poids: yup
    .number()
    .typeError("Poids non valide")
    .required("Poids non valide"),
  EyeColor: yup.string().required("Couleur des yeux non valide").min(2).max(30),
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
  const [checkedHomme, setCheckedHomme] = useHistoryState("Homme", false);
  const [checkedFemme, setCheckedFemme] = useHistoryState("Femme", false);

  const [disabledHomme, setDisabledHomme] = useHistoryState(
    "HommeDisabled",
    false
  );
  const [disabledFemme, setDisabledFemme] = useHistoryState(
    "FemmeDisabled",
    false
  );

  const handleChangeHomme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedHomme(event.target.checked);
    setDisabledFemme(event.target.checked);
    globalSex = SexEnum.HOMME;
  };

  const handleChangeFemme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedFemme(event.target.checked);
    setDisabledHomme(event.target.checked);
    globalSex = SexEnum.FEMME;
  };

  return (
    <FormGroup>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedHomme}
              onChange={handleChangeHomme}
              disabled={disabledHomme}
            />
          }
          label="Homme"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedFemme}
              onChange={handleChangeFemme}
              disabled={disabledFemme}
            />
          }
          label="Femme"
        />
      </div>
    </FormGroup>
  );
}

export type PartialErrorRegisterForm = Partial<
  FieldErrorsImpl<{
    Prenom: string;
    Nom: string;
    PostNom: string;

    Ville: string;
    Quartier: string;
    Avenue: string;
    Commune: string;
    Numero: number;
    CodePostal: string;
    Reference: string;
    ProvinceAddress: string;

    Province: string;
    ChefLieu: string;
    Territoire: string;
    Secteur: string;
    Village: string;
    LieuDeNaissance: string;

    Taille: number;
    Poids: number;
    EyeColor: string;
  }>
>;

type AddressPropsType = {
  register: any;
  errors: PartialErrorRegisterForm;
};
export function DynamicAddressForm({ register, errors }: AddressPropsType) {
  const [selectedProvince, setProvince] = useHistoryState(
    "SelectedProvince",
    ""
  );
  const [selectedCommune, setCommune] = useHistoryState("SelectedCommune", "");
  const [selectedQuartier, setQuartier] = useHistoryState(
    "SelectedQuartier",
    ""
  );
  const [selectedZipCode, setZipCode] = useHistoryState("CodePostal", "");
  const [dVille, setDVille] = useHistoryState("Ville", "");
  const [dAvenue, setDAvenue] = useHistoryState("Avenue", "");
  const [dNumero, setDNumero] = useHistoryState("Numero", "");
  const [dReference, setDReference] = useHistoryState("Reference", "");

  const handleProvinceChange = (e: any) => {
    setProvince(e.target.value)
    setCommune("")
    setQuartier("")
    setZipCode("")
  }

  const handleCommuneChange = (e: any) => {
    setCommune(e.target.value)
    setQuartier("")
    setZipCode("")
  }
  
  const handleQuartierChange = (e: any) => {
    setQuartier(e.target.value)
    setZipCode("")
  }

  
  return (
    <div>
      <TextField
        {...register("ProvinceAddress")}
      select
        value={selectedProvince}
      onChange={(e) => {
        handleProvinceChange(e)
      }}
      label="Province"
      id="select-province"
    >
      {zipCodeData && Object.getOwnPropertyNames(zipCodeData!).map((value) => (
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      ))}
    </TextField>
      <TextField
        {...register("Commune")}
      select
      value={selectedCommune}
      label="Commune"
      onChange={(e) => {
                handleCommuneChange(e)
              }}
    >
      {selectedProvince &&
        Object.getOwnPropertyNames(zipCodeData![selectedProvince]!).map(
          (value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          )
        )}
    </TextField>
      <TextField
        {...register("Quartier")}
        select
        value={selectedQuartier}
        helperText={errors.Quartier?.message}
        error={!!errors.Quartier}
        label="Quartier"
        onChange={(e) => {
                handleQuartierChange(e)
              }}
      >
        {selectedCommune &&
          selectedProvince &&
          Object.getOwnPropertyNames(
            zipCodeData![selectedProvince]![selectedCommune]!
          ).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
      </TextField>
      <TextField
        {...register("CodePostal")}
        select
        helperText={errors.CodePostal?.message}
        error={!!errors.CodePostal}
        value={selectedZipCode}
        label="Code Postal"
        onChange={(e) => {
                setZipCode(e.target.value)
              }}
    
        >
          {selectedCommune && selectedProvince && selectedQuartier && (
            <MenuItem
              key={
                zipCodeData![selectedProvince]![selectedCommune]![selectedQuartier]!
              }
              value={
                zipCodeData![selectedProvince]![selectedCommune]![selectedQuartier]!
              }
            >
              {zipCodeData![selectedProvince]![selectedCommune]![selectedQuartier]!}
            </MenuItem>
          )}
        </TextField>
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
function OriginForm({ register, errors }) {
  const [dProvince, setDProvince] = useHistoryState("Province", "");
  const [dChefLieu, setDChefLieu] = useHistoryState("ChefLieu", "");
  const [dTerritoire, setDTerritoire] = useHistoryState("Territoire", "");
  const [dSecteur, setDSecteur] = useHistoryState("Secteur", "");
  const [dVillage, setDVillage] = useHistoryState("Village", "");
  const [dLieuDeNaissance, setdDieuDeNaissance] = useHistoryState(
    "LieuDeNaissance",
    ""
  );

  return (
    <div>
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
      <TextField
        {...register("LieuDeNaissance")}
        id="outlined-lieuDeNaissance-input"
        label="Lieu de Naissance"
        helperText={errors.LieuDeNaissance?.message}
        error={!!errors.LieuDeNaissance}
        required
        value={dLieuDeNaissance}
        onChange={(e) => setdDieuDeNaissance(e.target.value)}
      />
    </div>
  );
}

// @ts-ignore
function PhenotypeForm({ register, errors }) {
  const [dHeight, setDHeight] = useHistoryState("Height", "");
  const [dPoids, setDPoids] = useHistoryState("Poids", "");
  const [dEyeColor, setDEyeColor] = useHistoryState("EyeColor", "");

  return (
    <div>
      <TextField
        {...register("Height")}
        id="outlined-taille-input"
        label="Taille (cm)"
        helperText={errors.Height?.message}
        error={!!errors.Height}
        required
        value={dHeight}
        onChange={(e) => setDHeight(e.target.value)}
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
function DateOfBirthForm({ register }) {
  const [value, setValue] = React.useState<Dayjs | null>(null);

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

function PhotoForm() {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState("");
  const [ImageBase64, setImageBase64] = useState("");

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const changeHandler = async (e: any) => {
    const { files } = e.target;
    const file = files[0];
    setFile(file);
    const base64 = await convertToBase64(file);
    setImageBase64(base64 as string);
    var temp = base64 as string;
    var splitedPhotoData = temp.split(",");
    globalPhotoType = splitedPhotoData[0];
    globalPicture = splitedPhotoData[1];
  };

  React.useEffect(() => {
    let fileReader: FileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = e.target?.result;
        if (result && !isCancel) {
          setFileDataURL(result as string);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <div>
      <Box
        sx={{
          width: 400,
          maxWidth: "70%",
        }}
      >
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          onChange={changeHandler}
          required
        />
        {fileDataURL ? (
          <p className="img-preview-wrapper">
            {
              <img
                style={{ width: 250, height: 300 }}
                src={fileDataURL}
                alt="preview"
              />
            }
          </p>
        ) : null}
      </Box>
    </div>
  );
}

// @ts-ignore
function mapdata(data) {
  var names = new Names().setNom(data.Nom.toUpperCase());
  names.setPrenom(data.Prenom.toUpperCase());
  names.setMiddleNamesList([data.PostNom.toUpperCase()]);

  var origins = new Origin().setChefLieu(data.ChefLieu.toUpperCase());
  origins.setProvinceList([data.Province.toUpperCase()]);
  origins.setLieuDeNaissance(data.LieuDeNaissance.toUpperCase());

  var phenotype = new Phenotype().setEyeColor(data.EyeColor.toUpperCase());
  phenotype.setHeight(data.Height);
  phenotype.setWeight(data.Poids);

  var biometric = new Biometric().setFingerPrint("bbbbbbbbbbb");
  console.log(globalPicture);
  biometric.setPhotos(globalPicture);
  biometric.setPhotoType(globalPhotoType);

  var dob = new DateOfBirth().setDay(globalDay);
  dob.setMonth(globalMonth);
  dob.setYear(globalYear);

  var address = new Address().setAvenue(data.Avenue.toUpperCase());
  address.setProvince(data.ProvinceAddress.toUpperCase());
  address.setCommune(data.Commune.toUpperCase());
  address.setQuartier(data.Quartier.toUpperCase());
  address.setNumber(data.Numero);
  address.setVille(data.Ville.toUpperCase());
  address.setZipCode(data.CodePostal.toString());
  address.setReference(data.Reference.toUpperCase());

  var sex = new Sex().setSex(globalSex)

  var urlHead = secret.URLHead;
  var urlBodyNames = data.Nom.toUpperCase() + "$" + data.Prenom.toUpperCase() + "$" + data.PostNom.toUpperCase();
  var urlBodyDOB = + globalDay + "$" + globalMonth + "$" + globalYear;
  var encryptedQRCodeUrl = encrypt(urlBodyNames + "/" + urlBodyDOB, secret.QRCodeSecret);
  var completeUrl = urlHead + "/" + encryptedQRCodeUrl
  var qrcode = new QRCode().setQrcode(completeUrl)

  var personInfoRequest = new PersonInfoRequest().setNames(names);
  personInfoRequest.setAddress(address);
  personInfoRequest.setBiometrics(biometric);
  personInfoRequest.setDateOfBirth(dob);
  personInfoRequest.setOrigins(origins);
  personInfoRequest.setPhenotypes(phenotype);
  personInfoRequest.setSex(sex);
  personInfoRequest.setQrcode(qrcode);

  console.log(qrcode);

  console.log(personInfoRequest);

  return personInfoRequest;
}

export function delay(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export default function RegisterForm() {
  const [spinRegister, setSpinRegister] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setIsLoggedIn(false);
      });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterFormInput) => {
    var personInfoRequest = mapdata(data);
    console.log(personInfoRequest);
    setSpinRegister(true);
    try {
      setShowErrorAlert(false);
      ExistService.addNewPersonInfo(personInfoRequest, null)
        .then((value) => {
          if (value.getStatus() === 1) {
            (async () => {
              setShowErrorAlert(false);
              setShowAlert(true);
              setSpinRegister(false);
              await delay(3000);
              setShowAlert(false);
              // clear the form
              reset({
                Prenom: undefined,
                Nom: undefined,
                PostNom: undefined,
                Ville: undefined,
                Quartier: undefined,
                Numero: undefined,
                Avenue: undefined,
                Commune: undefined,
                Reference: undefined,
                ProvinceAddress: undefined,
                Province: undefined,
                ChefLieu: undefined,
                Territoire: undefined,
                Secteur: undefined,
                Village: undefined,
                CodePostal: undefined,
                LieuDeNaissance: undefined,
                EyeColor: undefined,
                Poids: undefined,
                Height: undefined,
              });
            })();
          } else {
            console.log("Could not register a citizen");
            setShowErrorAlert(true);
          }
        })
        .catch((error) => {
          console.log(`try error ${error}`);
          setSpinRegister(false);
          setShowErrorAlert(true);
        });
    } catch (error) {
      console.log(`try error ${error}`);
      setShowErrorAlert(true);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Container maxWidth="sm">
          <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete={"off"}
          >
            <Typography variant="h1" gutterBottom></Typography>
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
            <SexForm></SexForm>
            <Typography variant="h6" component="h6" gutterBottom>
              3. Entrez la Date de Naissance de l'individu
            </Typography>
            <DateOfBirthForm register={register}></DateOfBirthForm>
            <Typography variant="h6" component="h6" gutterBottom>
              4. Entrez l'Adresse de l'individu
            </Typography>
            <DynamicAddressForm
              register={register}
              errors={errors}
            ></DynamicAddressForm>
            <Typography variant="h6" component="h6" gutterBottom>
              5. Entrez les Origines de l'individu
            </Typography>
            <OriginForm register={register} errors={errors}></OriginForm>
            <Typography variant="h6" component="h6" gutterBottom>
              6. Entrez les Phénotypes de l'individu
            </Typography>
            <PhenotypeForm register={register} errors={errors}></PhenotypeForm>
            <Typography variant="h6" component="h6" gutterBottom>
              7. Importez la photo de l'individu
            </Typography>
            <PhotoForm></PhotoForm>
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
            {showAlert && (
              <Alert severity="success">
                <AlertTitle>Enregistrement réussite</AlertTitle>
                Enregistrement réussite — <strong>ok!</strong>
              </Alert>
            )}
            {showErrorAlert && (
              <Alert severity="error">
                <AlertTitle>L'enregistrement a échoué</AlertTitle>
                L'enregistrement a échoué — <strong>réessayez</strong>
              </Alert>
            )}
          </Box>
        </Container>
      ) : (
        "Cannot load this page"
      )}
    </div>
  );
}
