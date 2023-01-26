
type AgentInfo =
    | "Nom"
    | "Prenom"
    | "Email"
    | "Password"
    | "Role"; 

export const AgentInfoRegisteringList: AgentInfo[] = [
    "Nom",
    "Prenom",
    "Email",
    "Password",
    "Role"
]

export interface AgentSignUpFormInput{
    Nom: string;
    Prenom: string;
    Email: string;
    Password: string;
    Phonenumber: string;
    Role: string; 
}