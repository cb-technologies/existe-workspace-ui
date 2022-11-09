
type AgentInfo =
    | "Nom"
    | "Prenom"
    | "Email"
    | "Password"; 

export const AgentInfoRegisteringList: AgentInfo[] = [
    "Nom",
    "Prenom",
    "Email",
    "Password"
]

export interface AgentSignUpFormInput{
    Nom: string;
    Prenom: string;
    Email: string;
    Password: string; 
}