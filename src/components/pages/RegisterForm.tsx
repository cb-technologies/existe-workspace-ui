import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import { ExistService } from "../../store/exist_api_call";
import Container from "@mui/material/Container";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { NameFormRegister } from "./NameForm";
import { RegisterFormInput } from "../../interface/form";
import { registerFormSchema } from "../../constants/yup_schema";
import SexForm from "./SexForm";
import { AddressFormRegister, DynamicAddressForm } from "./AddressForm";
import OriginFormRegister from "./OriginForm";
import { PhenotypeFormRegister } from "./PhenotypeForm";
import { registerMapdata } from "../../utils/form_functions";
import { globalDay, globalMonth, globalYear, DateOfBirthFormRegister } from "./DateOfBirthForm";

export default function RegisterForm() {
  const [spinRegister, setSpinRegister] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit = (data: RegisterFormInput) => {
    var personInfoRequest = registerMapdata(data, globalDay, globalMonth, globalYear);
    setSpinRegister(true);
    try {
      ExistService.addNewPersonInfo(personInfoRequest, null)
        .then((value) => {
          if (value.getStatus() === 1) {
            (async () => {
              setShowAlert(true);
              setSpinRegister(false);
              await delay(3000);
              setShowAlert(false);
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
        <Typography variant="h3" gutterBottom></Typography>
        <Typography variant="h3" gutterBottom>
          Enregistrez l'individu
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          1. Entrez les Noms de l'individu
        </Typography>
        <NameFormRegister
          register={register}
          errors={errors}
        ></NameFormRegister>
        <Typography variant="h6" component="h6" gutterBottom>
          2. Entrez le Sexe l'individu
        </Typography>
        <SexForm></SexForm>
        <Typography variant="h6" component="h6" gutterBottom>
          3. Entrez la Date de Naissance de l'individu
        </Typography>
        <DateOfBirthFormRegister /> 
        <Typography variant="h6" component="h6" gutterBottom>
          4. Entrez l'Adresse de l'individu
        </Typography>
        <AddressFormRegister register={register} errors={errors}></AddressFormRegister>
        <DynamicAddressForm />
        <Typography variant="h6" component="h6" gutterBottom>
          5. Entrez les Origines de l'individu
        </Typography>
        <OriginFormRegister register={register} errors={errors}></OriginFormRegister>
        <Typography variant="h6" component="h6" gutterBottom>
          6. Entrez les Phénotypes de l'individu
        </Typography>
        <PhenotypeFormRegister register={register} errors={errors}></PhenotypeFormRegister>
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
  );
}
function delay(arg0: number) {
  throw new Error("Function not implemented.");
}

