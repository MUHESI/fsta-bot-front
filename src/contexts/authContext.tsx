import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
} from "react";

export type AuthUser = {
  email: string | null;
  full_name: string | null;
};

export interface UserContextInterface {
  user: AuthUser;
  setUser: Dispatch<SetStateAction<AuthUser>>;
}
const initialAuthUser = {
  user: {
    email: null,
    full_name: null,
  },
  setUser: () => {},
} as UserContextInterface;

type userProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext(initialAuthUser);

export default function AuthProvider({ children }: userProviderProps) {
  const [user, setUser] = useState<AuthUser>({
    email: initialAuthUser.user.email,
    full_name: initialAuthUser.user.full_name,
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
