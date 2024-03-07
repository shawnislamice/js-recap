let myMoney = "101";

if (myMoney) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
if (!myMoney) {
  console.log("Falsy");
} else {
  console.log("Truthy");
}
// Ternary
let food = myMoney >= 100 ? "Biriyani" : "Cha Biskut";
console.log(food);

const num1 = 5;
const numStr = num1 + "";
console.log(typeof num1);
console.log(typeof numStr);
const num2 = "50";
const num2Number = +num2;
console.log(typeof num2);
console.log(typeof num2Number);

let isActive = false;

const showUser = () => {
  console.log("Display User");
};
const hideUser = () => {
  console.log("Hide User");
};
isActive ? showUser() : hideUser;
isActive && showUser();
isActive || hideUser();

// Toggle Boolean
isActive = !isActive;
