import { Stack, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import React from "react";
import { DateOfBirth } from "../../grpc/pb/message_and_service_pb";
import { UpdateFormProps } from "../../utils/exist_types";

export var globalDay: string;
export var globalMonth: string;
export var globalYear: string;

export function DateOfBirthFormRegister() {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={1}>
        <DatePicker
          views={["day", "month", "year"]}
          label="Date de naissance"
          value={value}
          onAccept={(newValue?: Dayjs | null) => {
            globalYear = newValue!.year().toString();
            globalMonth = (newValue!.month() + 1).toString();
            globalDay = newValue!.date().toString();
          }}
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
