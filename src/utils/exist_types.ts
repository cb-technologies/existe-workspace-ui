import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { RegisterFormInput, UpdateUserFormInput } from "../interface/form";
import { Address, Names, Phenotype } from "../grpc/pb/message_and_service_pb";

export type ExistFormType = Names | Phenotype | Address | undefined;

export type PartialErrorRegisterForm = Partial<
  FieldErrorsImpl<{
    Prenom: string;
    Nom: string;
    PostNom: string;

    Ville: string;
    Avenue: string;
    Numero: number;
    Reference: string;

    Province: string;
    ChefLieu: string;
    Territoire: string;
    Secteur: string;
    Village: string;
    ProvinceAddress: string;
  

    Taille: number;
    Poids: number;
    EyeColor: string;
  }>
>;
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
      ProvinceAddress: string;

      Taille: number;
      Poids: number;
      EyeColor: string;
    }>
  >;
  formVal: T | undefined;
};

export type RegisterFormProps<T> = {
  register: UseFormRegister<RegisterFormInput>;
  errors: PartialErrorRegisterForm;
};
