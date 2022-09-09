import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams - {numberOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice creams
      </button>
    </div>
  );
};
