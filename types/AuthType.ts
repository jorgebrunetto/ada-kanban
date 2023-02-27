export interface IAuthContext {
  token: string | null;
}

export interface AuthContextProviderProps {
  children: React.ReactNode;
}
