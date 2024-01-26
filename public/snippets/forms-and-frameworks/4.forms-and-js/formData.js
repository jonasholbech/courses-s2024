/*let's imagine a form with 
<input name="name">
<input type="radio" name="isAlive" value="1">
<input type="radio" name="isAlive" value="0">
and a ton of checkboxes with name="traits"
*/
const form = document.querySelector("form");
const formData = new FormData(form);

//read the values
const name = formData.get("name");
const isAlive = formData.get("isAlive");
const traits = formData.getAll("traits");
