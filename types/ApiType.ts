export interface APIProps {
  resource: string;
  method: string;
  token: string | null;
  body?: any;
}
