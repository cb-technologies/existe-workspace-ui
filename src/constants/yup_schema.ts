import * as yup from "yup"; 

export const updateUserInfoSchema = yup.object().shape({
  Nom: yup.string().required().min(2).max(30),
  Prenom: yup.string().required().min(2).max(30),
  PostNom: yup.string().required().min(2).max(30),

  Ville: yup.string().required().min(2).max(30),
  Quartier: yup.string().required().min(2).max(30),
  Avenue: yup.string().required().min(2).max(30),
  Commune: yup.string().required().min(2).max(30),
  Numero: yup.number().required("Numero cannot be empty"),
  CodePostal: yup.number().required("Code Postal cannot be empty"),
  Reference: yup.string().required().min(2).max(30),

  Taille: yup.number().required("Taille cannot be empty"),
  Poids: yup.number().required("Poids cannot be empty"),
  EyeColor: yup.string().required().min(2).max(30),
});

export const registerFormSchema = yup.object().shape({
  Nom: yup.string().required().min(2).max(30),
  Prenom: yup.string().required().min(2).max(30),
  PostNom: yup.string().required().min(2).max(30),

  Ville: yup.string().required().min(2).max(30),
  Quartier: yup.string().required().min(2).max(30),
  Avenue: yup.string().required().min(2).max(30),
  Commune: yup.string().required().min(2).max(30),
  Numero: yup.number().required("Numero cannot be empty"),
  CodePostal: yup.number().required("Code Postal cannot be empty"),
  Reference: yup.string().required().min(2).max(30),

  Province: yup.string().required().min(2).max(30),
  ChefLieu: yup.string().required().min(2).max(30),
  Territoire: yup.string().required().min(2).max(30),
  Secteur: yup.string().required().min(2).max(30),
  Village: yup.string().required().min(2).max(30),

  Taille: yup.number().required("Taille cannot be empty"),
  Poids: yup.number().required("Poids cannot be empty"),
  EyeColor: yup.string().required().min(2).max(30),
});