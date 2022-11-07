import React from "react";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { UpdateFormProps } from "../../utils/exist_types";
import { Phenotype } from "../../grpc/pb/message_and_service_pb";

export default function PhenotypeForm({ register, errors, formVal }: UpdateFormProps<Phenotype>) {

  const [dTaille, setDTaille] = useState("");
  const [dPoids, setDPoids] = useState("");
  const [dEyeColor, setDEyeColor] = useState("")

  useEffect(() => {
    if (formVal) {
      setDTaille(formVal!.getHeight().toString());
      setDPoids(formVal!.getWeight().toString())
      setDEyeColor(formVal!.getEyeColor())
    }
  }, [formVal]);
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