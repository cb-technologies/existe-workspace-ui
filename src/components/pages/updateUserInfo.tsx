import * as React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import * as yup from "yup"; // to validate the form input
import { useForm } from "react-hook-form"; // to handle the form's submission and error states
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import { ExistCRUDClient } from "../../grpc/pb/Message_and_serviceServiceClientPb";
import useHistoryState from "../../hooks/useHistoryState";
import { updateUserInformation } from "../../utils/update_form";
import AddressForm from "./AddressForm";
import DateOfBirthForm from "./DateOfBirthForm";
import NameForm from "./NameForm";
import OriginForm from "./OriginForm";
import PhenotypeForm from "./PhenotypeForm";
import SexForm from "./SexForm";
import { useRadioGroup } from "@mui/material";
import { ExistService } from "../../store/exist_api_call";
import Container from '@mui/material/Container';
import { useLocation } from "react-router-dom";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from "@mui/icons-material/Save";
import {Address, Biometric, DateOfBirth, EditPersonInfoParameters, Names, NationalIDNumber, PersonInfoResponse,PersonInfoRequest, Phenotype, Origin, Sex } from "../../grpc/pb/message_and_service_pb"
import { URLExistPath } from "../../constants/existUrlPath";

export interface UpdateUserFormInput {
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
  ProvinceAddress: yup.string().required().min(2).max(30),


  Taille: yup.number().required("Taille cannot be empty"),
  Poids: yup.number().required("Poids cannot be empty"),
  EyeColor: yup.string().required().min(2).max(30),
});

function mapdata(data: UpdateUserFormInput, response: PersonInfoResponse.AsObject) {
  var personId = new NationalIDNumber().setId(response.id?.id!);

  var names = new Names().setNom(data.Nom.toUpperCase());
  names.setPrenom(data.Prenom.toUpperCase());
  names.setMiddleNamesList([data.PostNom.toUpperCase()]);

  var phenotype = new Phenotype().setEyeColor(data.EyeColor.toUpperCase());
  phenotype.setHeight(data.Taille);
  phenotype.setWeight(data.Poids);

  var origins = new Origin().setChefLieu(response.origins?.chefLieu!)
  origins.setProvinceList(response.origins?.provinceList!)
  origins.setLieuDeNaissance(response.origins?.lieuDeNaissance!)

  var biometric = new Biometric().setPhotos(response.biometrics?.photos!);
  biometric.setFingerPrint(response.biometrics?.fingerPrint!)

  var dob = new DateOfBirth().setDay(response.dateOfBirth?.day!);
  dob.setMonth(response.dateOfBirth?.month!);
  dob.setYear(response.dateOfBirth?.year!);

  var address = new Address().setAvenue(data.Avenue.toUpperCase());
  address.setProvince(data.ProvinceAddress.toUpperCase());
  address.setCommune(data.Commune.toUpperCase());
  address.setQuartier(data.Quartier.toUpperCase());
  address.setNumber(data.Numero);
  address.setVille(data.Ville.toUpperCase());
  address.setZipCode(data.CodePostal.toString());
  address.setReference(data.Reference.toUpperCase());

  var sex  = new Sex().setSex(response.sex?.sex!)

  var personInfoRequest = new PersonInfoRequest().setNames(names);
  personInfoRequest.setAddress(address);
  personInfoRequest.setBiometrics(biometric);
  personInfoRequest.setDateOfBirth(dob);
  personInfoRequest.setPhenotypes(phenotype);
  personInfoRequest.setOrigins(origins);
  personInfoRequest.setSex(sex);

  var editPersonInfoParameters =
    new EditPersonInfoParameters().setEditedpersoninfo(personInfoRequest);
  editPersonInfoParameters.setPersonid(personId);

  return editPersonInfoParameters;
}

function delay(milliseconds : number) {
    return new Promise(resolve => setTimeout( resolve, milliseconds));
}

export default function UpdateUserForm() {
  const location = useLocation();
  const userInfo = location.state.cardInfo as PersonInfoResponse.AsObject;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateUserFormInput>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset()
  }, [userInfo])


  const [spinRegister, setSpinRegister] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const navigate = useNavigate();
  

  const onSubmit = (data: UpdateUserFormInput) => {
    setSpinRegister(true);
    setShowErrorAlert(false);
    var EditPersonInfoParameters = mapdata(data, userInfo!);
    try {
      ExistService.updatePersonInfo(EditPersonInfoParameters,null).then((value) => {
          if (value.getStatus() === 1) {
                (async () => { 
                    setShowAlert(true);
                    setSpinRegister(false);
                  await delay(3000);
                  navigate(URLExistPath.OrientationPage)
                  setShowAlert(false)
                })();       
          } else {
            console.log("Could not update citizen Info");
            setShowErrorAlert(true);
          }
      }).catch ((error) => {
                console.log(`try error ${error}`)
        setSpinRegister(false);
        setShowErrorAlert(true);
      });
    } catch (error) {
      console.log(`try error ${error}`)
      setShowErrorAlert(true);
        }
    };

  return (
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
          Modifiez les informations de l'individu
        </Typography>
      <Typography variant="h6" component="h6" gutterBottom>
        1.Modifiez les Noms de l'individu
      </Typography>
      <NameForm
        register={register}
        errors={errors}
        formVal={userInfo?.names!}
      ></NameForm>
      <Typography variant="h6" component="h6" gutterBottom>
        2.Modifiez l'Adresse de l'individu
      </Typography>
      <AddressForm register={register} errors={errors} formVal={userInfo?.address!}></AddressForm>
      <Typography variant="h6" component="h6" gutterBottom>
        3.Modifiez les Phénotypes de l'individu
      </Typography>
      <PhenotypeForm register={register} errors={errors} formVal={userInfo?.phenotypes!}></PhenotypeForm>
      {!spinRegister ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sauvegardez
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
                  Sauvegardez
              </LoadingButton>
                )}
                { showAlert && 
                    <Alert severity="success">
                    <AlertTitle>Sauvegarde réussite</AlertTitle>
                    Sauvegarde réussite — <strong>ok!</strong>
                    </Alert>
        }
        {showErrorAlert &&
                    <Alert severity="error">
                    <AlertTitle>La sauvegarde a échoué</AlertTitle>
                    La sauvegarde a échoué — <strong>réessayez</strong>
                    </Alert>

                } 
    </Box>
    </Container>
    
  );
}
