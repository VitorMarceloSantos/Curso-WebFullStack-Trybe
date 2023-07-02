import { useState } from "react";
import { Context } from "./Context";

type ChildrenType = {
  children: React.ReactNode;
};

const nameVitor = "Vitor Marcelo";

export const Provider = ({ children }: ChildrenType) => {
  const [nameState, setNameState] = useState(nameVitor);
  console.log(nameState)
  const modifyName = (newName: string) => {
    setNameState(newName);
  };
  return (
    <Context.Provider value={{ name: nameState, modifyName }}>{children}</Context.Provider>
  );
};
