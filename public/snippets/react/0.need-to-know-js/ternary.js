//ternary operator

/*pseudo code: 
let returned = condition ? returnedIfTrue : returnedIfFalse;
*/
const age = 45;

const status = age > 18 ? "old" : "young";

//same as
let status;
if (age > 18) {
  status = "old";
} else {
  status = "young";
}
