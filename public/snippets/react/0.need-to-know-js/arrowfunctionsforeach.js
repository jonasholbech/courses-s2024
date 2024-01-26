const users = [
  {
    name: "Jonas",
    age: 45,
  },
  {
    name: "Birk",
    age: 11,
  },
];

users.forEach(function (person) {
  console.log(person.name);
});

//can be written as
users.forEach((person) => {
  console.log(person.name);
});
