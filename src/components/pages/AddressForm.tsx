import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Address } from "../../grpc/pb/message_and_service_pb";
import { UpdateFormProps } from "../../utils/exist_types";
import useHistoryState from "../../hooks/useHistoryState";
import { zipCodeData } from "../../constants/zipCodeKinshasa";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";

export default function AddressForm({ register, errors, formVal }: UpdateFormProps<Address.AsObject>) {

  const [selectedProvince, setProvince] = useHistoryState("SelectedProvince","");
  const [selectedCommune, setCommune] = useHistoryState("SelectedCommune", "");
  const [selectedQuartier, setQuartier] = useHistoryState("SelectedQuartier","");
  const [selectedZipCode, setZipCode] = useHistoryState("CodePostal", "");
  const [dVille, setDVille] = useHistoryState("Ville", "");
  const [dAvenue, setDAvenue] = useHistoryState("Avenue", "");
  const [dNumero, setDNumero] = useHistoryState("Numero", "");
  const [dReference, setDReference] = useHistoryState("Reference", "");

  useEffect(() => {
    if (formVal) {
      setDVille(formVal?.ville!);
      setProvince(formVal?.province)
      setQuartier(formVal?.quartier!)
      setDAvenue(formVal?.avenue!)
      setCommune(formVal?.commune!)
      setDNumero(formVal?.number!.toString())
      setZipCode(formVal?.zipCode!)
      setDReference(formVal?.reference!)
    }
  }, [formVal]);

  

  
  return (
    <div>     
      <TextField
        {...register("ProvinceAddress")}
      select
      value={selectedProvince}
      onChange={(e) => {
        setProvince(e.target.value)
      }}
      label="Province"
      id="select-province"
    >
      {Object.getOwnPropertyNames(zipCodeData).map((value) => (
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
                setCommune(e.target.value)
              }}
    >
      {selectedProvince &&
        Object.getOwnPropertyNames(zipCodeData[selectedProvince]!).map(
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
        label="Quartier"
        onChange={(e) => {
                setQuartier(e.target.value)
              }}
      >
        {selectedCommune &&
          selectedProvince &&
          Object.getOwnPropertyNames(
            zipCodeData[selectedProvince]![selectedCommune]!
          ).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
      </TextField>
      <TextField
        {...register("CodePostal")}
        select
          value={selectedZipCode}
        label="Code Postal"
        onChange={(e) => {
                setZipCode(e.target.value)
              }}
    
        >
          {selectedCommune && selectedProvince && selectedQuartier && (
            <MenuItem
              key={
                zipCodeData[selectedProvince]![selectedCommune]![selectedQuartier]
              }
              value={
                zipCodeData[selectedProvince]![selectedCommune]![selectedQuartier]!
              }
            >
              {zipCodeData[selectedProvince]![selectedCommune]![selectedQuartier]!}
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
          value={dVille.toUpperCase()}
          onChange={(e) => setDVille(e.target.value)}
        />
        <TextField
          {...register("Avenue")}
          id="outlined-avenue-input"
          label="Avenue"
          helperText={errors.Avenue?.message}
          error={!!errors.Avenue}
          required
          value={dAvenue.toUpperCase()}
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
          value={dReference.toUpperCase()}
          onChange={(e) => setDReference(e.target.value)}
      />
    </div>
  );
 
}