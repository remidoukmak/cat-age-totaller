import React from "react";
import { useState } from "react";

export const AgeCounter = ({ cat, incrementTotalAge }) => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
    incrementTotalAge();
  }
  function setLife() {
    setCount(0);
  }

  // 5. Use a ternary operator to create a variable which has the value "young" when the age is less than 9 and "old" when the age is 9 or greater.
  // Use string interpolation to add this variable as a class to the AgeCounter component.
  // (i.g.if the age is 11, the AgeCounter should have "AgeCounter" and "old" as CSS classes).

  function checkAge() {
    return count >= 9 ? "old" : "young";
  }

  return (
    <div className={`AgeCounter ${checkAge()}`}>
      <h1> {cat}</h1>
      <h3> Age count is {count} </h3>
      <button onClick={incrementCount}>Add year</button>
      <input type="text" onClick={(event) => setCount(event.target.value)} />
      <button onClick={setLife}>New life</button>
    </div>
  );
};
export default AgeCounter;
