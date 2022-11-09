import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Stack, TextField } from "@mui/material";
import React from "react";
import { Dayjs } from "dayjs";
import { UpdateFormProps } from "../../utils/exist_types";
import { DateOfBirth } from "../../grpc/pb/message_and_service_pb";

export default function DateOfBirthForm({ register, errors, formVal }: UpdateFormProps<DateOfBirth>) {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={1}>
        <DatePicker
          views={["day", "month", "year"]}
          label="Date de naissance"
          value={value}
          onChange={(newValue?: any) => {
            setValue(newValue);
          }}
          renderInput={(params?: any) => (
            <TextField {...params} helperText={null} />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}