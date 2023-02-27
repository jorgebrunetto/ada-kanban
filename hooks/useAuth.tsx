import { AuthContext } from "contexts";
import { useContext } from "react";

import { IAuthContext } from "types/AuthType";

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
