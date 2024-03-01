import React, { useState } from "react";

export function useCount(init) {
  const [count, setcount] = useState(init);

  const increase = () => setcount(count + 1);
  const decrease = () => setcount(count - 1);

  return [count, increase, decrease];
}
