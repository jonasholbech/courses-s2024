const age = 45;
const email = "jofh@kea.dk";

let isEven;
if (age % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

let role = "visitor";
if (email === "jofh@kea.dk") {
  if (age > 40) {
    role = "admin";
  }
}
//can be done in 1 line, if you merge the two if's
