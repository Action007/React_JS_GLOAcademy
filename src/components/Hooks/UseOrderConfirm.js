import React, { useState } from 'react';

const UseOrderConfirm = () => {
  const [openOrderConfirm, setOpenOrderConfirm] = useState(false);
  return { openOrderConfirm, setOpenOrderConfirm };
};

export default UseOrderConfirm;