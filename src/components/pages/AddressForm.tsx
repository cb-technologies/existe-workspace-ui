import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Address } from "../../grpc/pb/message_and_service_pb";
import { UpdateFormProps } from "../../utils/exist_types";

export default function AddressForm({ register, errors, formVal }: UpdateFormProps<Address>) {

  const [dVille, setDVille] = useState("");
  const [dQuartier, setDQuartier] = useState("");
  const [dAvenue, setDAvenue] = useState("")
  const [dCommune, setDCommune] = useState("")
  const [dNumero, setDNumero] = useState("")
  const [dCodePostal, setDCodePostal] = useState("")
  const [dReference, setDReference] = useState("")

  useEffect(() => {
    if (formVal) {
      setDVille(formVal!.getVille());
      setDQuartier(formVal!.getQuartier())
      setDAvenue(formVal!.getAvenue())
      setDCommune(formVal!.getCommune())
      setDNumero(formVal!.getNumber().toString())
      setDCodePostal(formVal!.getZipCode())
      setDReference(formVal!.getReference())
    }
  }, [formVal]);
  return (
    <div>
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
        {...register("Quartier")}
        id="outlined-quartier-input"
        label="Quartier"
        helperText={errors.Quartier?.message}
        error={!!errors.Quartier}
        required
        value={dQuartier}
        onChange={(e) => setDQuartier(e.target.value)}
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
        {...register("Commune")}
        id="outlined-commune-input"
        label="Commune"
        helperText={errors.Commune?.message}
        error={!!errors.Commune}
        required
        value={dCommune}
        onChange={(e) => setDCommune(e.target.value)}
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
        {...register("CodePostal")}
        id="outlined-codepostal-input"
        label="Code Postal"
        helperText={errors.CodePostal?.message}
        error={!!errors.CodePostal}
        required
        value={dCodePostal}
        onChange={(e) => setDCodePostal(e.target.value)}
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