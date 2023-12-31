import { ReactNode } from "react";
import { UIContext } from "./UIContext";

interface Props {
  children: ReactNode | ReactNode[];
}

export const UIProvider = ({ children }: Props) => {
  return <UIContext.Provider value={{}}>{children}</UIContext.Provider>;
};
