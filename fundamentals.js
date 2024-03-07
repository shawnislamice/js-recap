//How to declare a variable using let and const

const fathersName = "Shawon";
let season = "Rainy";
season = "Winter";

// Six basic conditions : >,<,===,!==,<=,>=

if (fathersName === "Shawon" || season == "Rainy") {
} else if (fathersName === "Shawon") {
} else {
}

// 03. Array
//index
//length,push
const numbers = [8, 9, 5, 47, 2, 5, 52, 5, 2, 5];

//4. Loop
for (let number of numbers) {
  console.log(number);
}
for (let number = 0; number < numbers.length; number++) {
  console.log(numbers[number]);
}
//5. Function

function myMultiplication(a, b) {
  return a * b;
}

const result = myMultiplication(5, 5);
// Object
const student = {
  name: "Shawon",
  age: 23,
  gender: "Male",
  education: {
    SSC: "Al-Amin Academy",
    SSC_GPA: 4.14,
    HSC: "Daffodil International College",
    HSC_GPA: 3.92,
    BSC: "Daffodil International University",
    BSC_GPA: 3.67,
  },
};
myVariable = "gender";
console.log(student.age);
console.log(student["education"]["SSC"]);
console.log(student[myVariable]);
