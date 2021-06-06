import React, { useState } from "react";
import AgeCounter from "./AgeCounter";

// 6. Add a text input above the AgeCounters in AgeTotaller.js and button.
// Use this input and button to add a new cat name to the array.
//
// You will need to store the new cat name input in state(remember to use onChange to update it)
// and use the button to add the input to the array of cat names.
// Remember that you will want to use array destructuring here to create a new array.
// For example, if you had an array of numbers: `const numbers = [1, 2, 3]`,
//   you could create a new array like this: `const newNumbers = [...numbers, 4]`.newNumbers would then be[1, 2, 3, 4].

// Ensure that a cat can only be added if it's name is at least three letters long, and set the input back to being empty when a new cat is added.

const AgeTotaller = () => {
  const [cats, setCats] = useState(["Garfield", "Ollie", "Tom", "Meowmeow"]);
  const [newName, setNewName] = useState("");
  const [totalAge, setTotalAge] = useState(0);

  function addNewName() {
    let newCats;
    if (/^(.*[a-z]){3,}/i.test(newName)) {
      // newCats = cats.concat(newName);
      let newNames = [...cats, newName];

      setCats(newNames);
      const catInput = document.getElementById("catName");
      catInput.value = "";
    }
  }

  function incrementTotalAge() {
    setTotalAge(totalAge + 1);
  }

  function addCatAge() {
    const totalAges = [...totalAges, totalAge];
    addCatAge(totalAges);
  }
  return (
    <div>
      <input
        id="catName"
        type="text"
        onChange={(event) => setNewName(event.target.value)}
      />
      <button onClick={addNewName}>Add cat</button>
      <div className="AgeTotaller">
        {cats.map((cat, index) => (
          <div className="cats">
            <AgeCounter
              cat={cat}
              incrementTotalAge={incrementTotalAge}
              key={index}
            />
          </div>
        ))}
      </div>

      <h1>The total age is: {totalAge} </h1>
    </div>
  );
};

export default AgeTotaller;
