import * as React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import * as yup from "yup"; // to validate the form input
import { useForm } from "react-hook-form"; // to handle the form's submission and error states
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import {
  NationalIDNumber,
  PersonInfoResponse,
} from "../../grpc/pb/message_and_service_pb";
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

type UpdateUserFormProps = {
  nationalID: NationalIDNumber
}

export default function UpdateUserForm({nationalID} : UpdateUserFormProps) {
  const [userInfo, setUserInformation] = useState<PersonInfoResponse>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateUserFormInput>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    ExistService.findPersonInfo(nationalID, null).then((value) => {
      setUserInformation(value);
    });
  }, []);

  useEffect(() => {
    reset({
      Nom: userInfo?.getNames()?.getNom(),
      Prenom: userInfo?.getNames()?.getPrenom(),
      PostNom: userInfo?.getNames()?.getMiddleNamesList().toString()
    })
  }, [userInfo])


  const [json, setJson] = useState<string>();

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
        formVal={userInfo?.getNames()!}
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
      <AddressForm register={register} errors={errors} formVal={userInfo?.getAddress()!}></AddressForm>
      <Typography variant="h6" component="h6" gutterBottom>
        6.Modifiez les Phénotypes de l'individu
      </Typography>
      <PhenotypeForm register={register} errors={errors} formVal={userInfo?.getPhenotypes()!}></PhenotypeForm>
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
