import { useContext } from "react";
import { Context } from "./Context";
export const Text = () => {
  const { name, modifyName } = useContext(Context);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => modifyName('Rafaela Caroline')}>Alterar</button>
    </div>
  );
};
