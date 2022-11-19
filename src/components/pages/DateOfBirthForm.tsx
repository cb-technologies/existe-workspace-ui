import { Stack, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { DateOfBirth } from "../../grpc/pb/message_and_service_pb";
import { RegisterFormInput } from "../../interface/form";
import { UpdateFormProps } from "../../utils/exist_types";

export var globalDay: string;
export var globalMonth: string;
export var globalYear: string;

type DOBFormProps = {
  control: Control<RegisterFormInput, any>;
};

export function DateOfBirthFormRegister({ control }: DOBFormProps) {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <Controller
      control={control}
      name="DOB"
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={1}>
            <DatePicker
              className="input"
              label="Date de naissance"
              value={value}
              onChange={(e) => {
                field.onChange(e)
                setValue(e)
              }}
              renderInput={(params?: any) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </Stack>
        </LocalizationProvider>
      )}
    />
  );
}

export default function DateOfBirthForm({
  register,
  errors,
  formVal,
}: UpdateFormProps<DateOfBirth>) {
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
