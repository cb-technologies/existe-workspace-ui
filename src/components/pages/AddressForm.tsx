import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Address } from "../../grpc/pb/message_and_service_pb";
import { RegisterFormProps, UpdateFormProps } from "../../utils/exist_types";
import { zipCodeData } from "../../utils/zipCodeKinshasa";

export default function AddressForm({
  register,
  errors,
  formVal,
}: UpdateFormProps<Address.AsObject>) {
  const [dVille, setDVille] = useState("");
  const [dQuartier, setDQuartier] = useState("");
  const [dAvenue, setDAvenue] = useState("");
  const [dCommune, setDCommune] = useState("");
  const [dNumero, setDNumero] = useState("");
  const [dCodePostal, setDCodePostal] = useState("");
  const [dReference, setDReference] = useState("");

  useEffect(() => {
    if (formVal) {
      setDVille(formVal?.ville!);
      setDQuartier(formVal?.quartier!);
      setDAvenue(formVal?.avenue!);
      setDCommune(formVal?.commune!);
      setDNumero(formVal?.number!.toString());
      setDCodePostal(formVal?.zipCode!);
      setDReference(formVal?.reference!);
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

export function AddressFormRegister({
  register,
  errors,
}: RegisterFormProps<Address.AsObject>) {
  const [dVille, setDVille] = useState("");
  const [dQuartier, setDQuartier] = useState("");
  const [dAvenue, setDAvenue] = useState("");
  const [dCommune, setDCommune] = useState("");
  const [dNumero, setDNumero] = useState("");
  const [dCodePostal, setDCodePostal] = useState("");
  const [dReference, setDReference] = useState("");

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


export function DynamicAddressForm() {
  const [selectedProvince, setProvince] = useState("");
  const [selectedCommune, setCommune] = useState("");
  const [selectedQuartier, setQuartier] = useState("");
  const [selectedZipCode, setZipCode] = useState("");

  const handleChangeProvince = (event: SelectChangeEvent) => {
    setProvince(event.target.value);
  };

  const handleChangeCommune = (event: SelectChangeEvent) => {
    setCommune(event.target.value);
  };

  const handleChangeQuartier = (event: SelectChangeEvent) => {
    setQuartier(event.target.value);
  };

  const handleChangeZipCode = (event: SelectChangeEvent) => {
    setZipCode(event.target.value);
  };

  return (
    <Typography>
      <FormControl sx={{ m: 2, minWidth: 225 }}>
        <InputLabel id="select-province">Province</InputLabel>
        <Select
          value={selectedProvince}
          onChange={handleChangeProvince}
          label="Province"
          id="adress-province"
        >
          {Object.getOwnPropertyNames(zipCodeData).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, minWidth: 225 }}>
        <InputLabel id="commune-simple-select">Commune</InputLabel>
        <Select
          value={selectedCommune}
          label="Commune"
          onChange={handleChangeCommune}
        >
          {selectedProvince && Object.getOwnPropertyNames(zipCodeData[selectedProvince as string]).map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, minWidth: 225 }}>
        <InputLabel id="quartier-simple-select">Quartier</InputLabel>
        <Select
          value={selectedQuartier}
          label="Quartier"
          onChange={handleChangeQuartier}
        >
          {/*@ts-ignore */}
          {selectedCommune && selectedProvince && Object.getOwnPropertyNames(zipCodeData[selectedProvince][selectedCommune]).map( (value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Typography>
  );
}
