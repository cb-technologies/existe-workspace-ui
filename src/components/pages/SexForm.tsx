import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import React from "react";

export default function SexForm() {
  return (
    <FormGroup>
      <div>
        <FormControlLabel control={<Checkbox />} label="Homme" />
        <FormControlLabel control={<Checkbox />} label="Femme" />
      </div>
    </FormGroup>
  );
}