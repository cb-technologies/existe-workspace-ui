import React from "react";
import { TextField } from "@mui/material";
import { UpdateFormProps } from "../../utils/exist_types";
import { Phenotype } from "../../grpc/pb/message_and_service_pb";

export default function PhenotypeForm({ register, errors }: UpdateFormProps<Phenotype>) {
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