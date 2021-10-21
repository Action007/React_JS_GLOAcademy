import { useEffect } from "react";

export const UseTitle = (openItem) => {
  useEffect(() => {
    document.title = openItem ? openItem.name : `MRDonald's`;
  }, [openItem]);
};