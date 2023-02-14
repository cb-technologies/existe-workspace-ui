
type AgentInfo =
    | "Nom"
    | "Prenom"
    | "Email"
    | "Password"
    | "Role"
    | "NationalId";

export const AgentInfoRegisteringList: AgentInfo[] = [
    "Nom",
    "Prenom",
    "Email",
    "Password",
    "Role",
    "NationalId"
]

export interface AgentSignUpFormInput{
    Nom: string;
    Prenom: string;
    Email: string;
    Password: string;
    Phonenumber: string;
    Role: string; 
    NationalId: string;
}