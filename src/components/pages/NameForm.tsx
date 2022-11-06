import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Names } from "../../grpc/pb/message_and_service_pb";
import { UpdateFormProps } from "../../utils/exist_types";

export default function NameForm({
  register,
  errors,
  formVal,
}: UpdateFormProps<Names>) {
  const [dfirstName, setDFirstName] = useState("");
  const [dLastName, setDLastName] = useState("");
  const [dMiddleNames, setDMiddleNames] = useState("")

  useEffect(() => {
    if (formVal) {
      setDFirstName(formVal!.getPrenom());
      setDLastName(formVal!.getNom())
      setDMiddleNames(formVal!.getMiddleNamesList().toString())
    }
  }, [formVal]);

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
