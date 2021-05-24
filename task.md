The task will be to count the total ages of some cats.

Here's the final version so you know what you are aiming for: https://csb-n4p4x.netlify.app/ (it doesn't need to look identical, the functionality is the important part).

1. Create a AgeCounter component which uses useState to store the current age and has two buttons - one to add a year (increment state by 1) and one to add a new life (set state back to 0). Create these functions and use the onClick event on the buttons to use them. Display the current age within the AgeCounter component in a h3 tag. Use a className of ".AgeCounter" for the component (it should be a div with a h3 tag and two buttons inside, the CSS is already provided in styles.css).

2. Import and render the AgeCounter component in AgeTotaller.js.

3. Use useState to create an array of four cat names in AgeTotaller.js (call the variable "cats"). Use .map to render an AgeCounter component for each name.

4. Pass each name as a prop to the AgeCounter component and render the name above the current age in a h4 tag.

5. Use a ternary operator to create a variable which has the value "young" when the age is less than 9 and "old" when the age is 9 or greater. Use string interpolation to add this variable as a class to the AgeCounter component. (i.g. if the age is 11, the AgeCounter should have "AgeCounter" and "old" as CSS classes).

6. Add a text input above the AgeCounters in AgeTotaller.js and button. Use this input and button to add a new cat name to the array. You will need to store the new cat name input in state (remember to use onChange to update it) and use the button to add the input to the array of cat names. Remember that you will want to use array destructuring here to create a new array. For example, if you had an array of numbers: `const numbers = [1, 2, 3]`, you could create a new array like this: `const newNumbers = [...numbers, 4]`. newNumbers would then be [1, 2, 3, 4].

Ensure that a cat can only be added if it's name is at least three letters long, and set the input back to being empty when a new cat is added.

/_ Stretch goals below _/

7. Use useState to create a totalAge variable in AgeTotaller.js. This variable will be used to store the total age of all four cats.

8. Create a function which will update the total age when one of the AgeCounter's current age changes. You will need to pass this function down as a prop to AgeCounter and update from there. Think carefully here about these functions, e.g. if a cat is 8 and you click on the new life button to reset the age to 0, the total age should be decreased by 8.

9. Display the total age underneath the cats in a h1 tag.
