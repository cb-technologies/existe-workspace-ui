import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { UpdateUserFormInput } from "../components/pages/updateUserInfo";
import { Address, Names, Phenotype } from "../grpc/pb/message_and_service_pb";

export type ExistFormType = Names | Phenotype | Address | undefined;

export type UpdateFormProps<T> = {
  register: UseFormRegister<UpdateUserFormInput>;
  errors: Partial<
    FieldErrorsImpl<{
      Prenom: string;
      Nom: string;
      PostNom: string;

      Ville: string;
      Quartier: string;
      Avenue: string;
      Commune: string;
      Numero: number;
      CodePostal: number;
      Reference: string;

      Day: string;
      Month: string;
      Year: string;

      Taille: number;
      Poids: number;
      EyeColor: string;
    }>
  >;
  formVal: T | undefined
};
