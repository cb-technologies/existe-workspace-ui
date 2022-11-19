import * as React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form"; // to handle the form's submission and error states
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import AddressForm from "./AddressForm";
import DateOfBirthForm from "./DateOfBirthForm";
import NameForm from "./NameForm";
import PhenotypeForm from "./PhenotypeForm";
import SexForm from "./SexForm";
import { ExistService } from "../../store/exist_api_call";
import Container from '@mui/material/Container';
import { useLocation } from "react-router-dom";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from "@mui/icons-material/Save";
import {Address, Biometric, DateOfBirth, EditPersonInfoParameters, Names, NationalIDNumber, PersonInfoResponse,PersonInfoRequest, Phenotype, Origin } from "../../grpc/pb/message_and_service_pb"
import { URLExistPath } from "../../constants/existUrlPath";
import { UpdateUserFormInput } from "../../interface/form";
import { updateUserInfoSchema } from "../../constants/yup_schema";



function mapdata(data: UpdateUserFormInput, response: PersonInfoResponse.AsObject) {
  var personId = new NationalIDNumber().setId("6035223a0000181");

  var names = new Names().setNom(data.Nom);
  names.setPrenom(data.Prenom);
  names.setMiddleNamesList([data.PostNom]);

  var phenotype = new Phenotype().setEyeColor(data.EyeColor);
  phenotype.setHeight(data.Taille);
  phenotype.setWeight(data.Poids);

  var origins = new Origin().setChefLieu(response.origins?.chefLieu!)
  origins.setProvinceList(response.origins?.provinceList!)

  var biometric = new Biometric().setPhotos("bbbbbbbbbb");

  var dob = new DateOfBirth().setDay("23");
  dob.setMonth("march");
  dob.setYear("1998");

  var address = new Address().setAvenue(data.Avenue);
  address.setCommune(data.Commune);
  address.setQuartier(data.Quartier);
  address.setNumber(data.Numero);
  address.setVille(data.Ville);
  address.setZipCode(data.CodePostal.toString());
  address.setReference(data.Reference);

  var personInfoRequest = new PersonInfoRequest().setNames(names);
  personInfoRequest.setAddress(address);
  personInfoRequest.setBiometrics(biometric);
  personInfoRequest.setDateOfBirth(dob);
  personInfoRequest.setPhenotypes(phenotype);
  personInfoRequest.setOrigins(origins);

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
    resolver: yupResolver(updateUserInfoSchema),
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
      <Typography variant="h6" component="h6" gutterBottom>
        1.Modifiez les Noms de l'individu
      </Typography>
      <NameForm
        register={register}
        errors={errors}
        formVal={userInfo?.names!}
      ></NameForm>
      <Typography variant="h6" component="h6" gutterBottom>
        2.Modifiez le Sexe l'individu
      </Typography>
      <SexForm/>
      <Typography variant="h6" component="h6" gutterBottom>
        3.Modifiez la Date de Naissance de l'individu
      </Typography>
      <DateOfBirthForm register={register} errors={errors} formVal={undefined}></DateOfBirthForm>
      <Typography variant="h6" component="h6" gutterBottom>
        4.Modifiez l'Adresse de l'individu
      </Typography>
      <AddressForm register={register} errors={errors} formVal={userInfo?.address!}></AddressForm>
      <Typography variant="h6" component="h6" gutterBottom>
        6.Modifiez les Phénotypes de l'individu
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
