import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
} from "react";

export type User = {
  name: string;
  email: string;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}
const defaultState = {
  user: {
    email: "",
    name: "",
  },
  setUser: (user: User) => {},
} as UserContextInterface;

type userProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext(defaultState);

export default function UserProvider({ children }: userProviderProps) {
  const [user, setUser] = useState<User>({ email: "", name: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
