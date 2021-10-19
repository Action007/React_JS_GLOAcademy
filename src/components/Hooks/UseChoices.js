import { useState } from "react";


export const UseChoices = () => {
  const [choice, setChoice] = useState();

  const changeChoices = (e) => {
    setChoice(e.target.value);
  };

  return { choice, changeChoices };
};