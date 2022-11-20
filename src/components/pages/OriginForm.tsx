import TextField from "@mui/material/TextField";
import React from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { Origin } from "../../grpc/pb/message_and_service_pb";
import { UpdateFormProps } from "../../utils/exist_types";


export default function OriginForm({ register, errors }: UpdateFormProps<Origin>) {
  return (
      <div>
          Origin Form
    </div>
    // <div>
    //   <TextField
    //     {...register("Province")}
    //     id="outlined-province-input"
    //     label="Province"
    //     helperText={errors.Province?.message}
    //     error={!!errors.Province}
    //     disabled
    //   />
    //   <TextField
    //     {...register("ChefLieu")}
    //     id="outlined-cheflieu-input"
    //     label="Chef-Lieu"
    //     helperText={errors.ChefLieu?.message}
    //     error={!!errors.ChefLieu}
    //     disabled
    //   />
    //   <TextField
    //     {...register("Territoire")}
    //     id="outlined-territoire-input"
    //     label="Territoire"
    //     helperText={errors.Territoire?.message}
    //     error={!!errors.Territoire}
    //     disabled
    //   />
    //   <TextField
    //     {...register("Secteur")}
    //     id="outlined-secteur-input"
    //     label="Secteur"
    //     helperText={errors.Secteur?.message}
    //     error={!!errors.Secteur}
    //     disabled
    //   />
    //   <TextField
    //     {...register("Village")}
    //     id="outlined-village-input"
    //     label="Village"
    //     helperText={errors.Village?.message}
    //     error={!!errors.Village}
    //     disabled
    //   />
    // </div>
  );
}
