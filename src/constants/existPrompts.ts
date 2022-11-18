export const ExistPrompts = {
  INVALID: (field_name: string): string => field_name + " invalid(e)",
  EMPTY: (field_name: string): string => field_name + " ne peut pas etre vide",
  MIN: (field_name: string, min_number: number): string =>
    field_name + " devrait avoir au moins " + min_number + " characters",
  MAX: (field_name: string, max_number: number): string =>
    field_name + " devrait avoir un maximum de " + max_number + "characters",
  WRONG_EMAIL_OR_PASSWORD:
    "Incorrect email ou mot de passe. Reessayer svp, ou Enregistrer vous",
} as const;
