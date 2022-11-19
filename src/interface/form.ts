import { Dayjs } from "dayjs";

export interface RegisterFormInput {
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

  Province: string;
  ChefLieu: string;
  Territoire: string;
  Secteur: string;
  Village: string;

  Taille: number;
  Poids: number;
  EyeColor: string;

  DOB: Dayjs;
}
export interface UpdateUserFormInput {
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
}
