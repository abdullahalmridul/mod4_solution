// DECLARE NAMES---
let $_names = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];

// GOODBYE FUNCTION---
const sayGoodBye = ($_checked) => {
  let $_data = $_checked,
    $_greeter = `Good Bye`;
  console.log($_greeter + ` ` + $_data);
};

// HELLO FUNCTION---
const sayHello = ($_checked) => {
  let $_data = $_checked,
    $_greeter = `Hello`;
  console.log($_greeter + ` ` + $_data);
};

// CREATING LOOP---
for (z = 0; z < $_names.length; z++) {
  // CHECKING NAMES
  $_letterCheck = $_names[z].charAt(0).toUpperCase();

  // PRINTING NAMES---
  if ($_letterCheck == "J") {
    sayGoodBye($_names[z]);
  } else {
    sayHello($_names[z]);
  }
}
