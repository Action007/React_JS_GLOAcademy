import { useState } from "react";

const UseCount = (amount) => {
  const [count, setCount] = useState(amount || 1);

  const onChange = (e) => setCount(e.target.value);

  return { count, setCount, onChange };
};

export default UseCount;