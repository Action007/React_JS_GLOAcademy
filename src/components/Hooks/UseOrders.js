import { useState } from "react";

const UseOrder = () => {
  const [orders, setOrders] = useState([]);
  return { orders, setOrders };
};

export default UseOrder;