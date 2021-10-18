import { useState } from "react";

const UseOpenItem = () => {
  const [openItem, setOpenItem] = useState(null);
  return { openItem, setOpenItem };
};

export default UseOpenItem;