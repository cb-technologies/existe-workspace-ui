import TextField from "@mui/material/TextField";
import React from "react";
import { Origin } from "../../grpc/pb/message_and_service_pb";
import useHistoryState from "../../hooks/useHistoryState";
import { RegisterFormProps } from "../../utils/exist_types";

export default function OriginFormRegister({
  register,
  errors,
}: RegisterFormProps<Origin>) {
  const [dProvince, setDProvince] = useHistoryState("Province", "");
  const [dChefLieu, setDChefLieu] = useHistoryState("ChefLieu", "");
  const [dTerritoire, setDTerritoire] = useHistoryState("Territoire", "");
  const [dSecteur, setDSecteur] = useHistoryState("Secteur", "");
  const [dVillage, setDVillage] = useHistoryState("Village", "");

  return (
    <div>
      <TextField
        {...register("Province")}
        id="outlined-province-input"
        label="Province"
        helperText={errors.Province?.message}
        error={!!errors.Province}
        required
        value={dProvince}
        onChange={(e) => setDProvince(e.target.value)}
      />
      <TextField
        {...register("ChefLieu")}
        id="outlined-cheflieu-input"
        label="Chef-Lieu"
        helperText={errors.ChefLieu?.message}
        error={!!errors.ChefLieu}
        required
        value={dChefLieu}
        onChange={(e) => setDChefLieu(e.target.value)}
      />
      <TextField
        {...register("Territoire")}
        id="outlined-territoire-input"
        label="Territoire"
        helperText={errors.Territoire?.message}
        error={!!errors.Territoire}
        required
        value={dTerritoire}
        onChange={(e) => setDTerritoire(e.target.value)}
      />
      <TextField
        {...register("Secteur")}
        id="outlined-secteur-input"
        label="Secteur"
        helperText={errors.Secteur?.message}
        error={!!errors.Secteur}
        required
        value={dSecteur}
        onChange={(e) => setDSecteur(e.target.value)}
      />
      <TextField
        {...register("Village")}
        id="outlined-village-input"
        label="Village"
        helperText={errors.Village?.message}
        error={!!errors.Village}
        required
        value={dVillage}
        onChange={(e) => setDVillage(e.target.value)}
      />
    </div>
  );
}
