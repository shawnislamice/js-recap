const numbers = [42, 65];
const [x, y] = numbers;

console.log(x);
console.log(y);

function getValues(number1, number2) {
  const numbers = [number1, number2];
  console.log(arguments);
  return numbers;
}
const [first, second] = [getValues(10, 10)];
console.log(getValues(10, 10));

// Object Destructuring

const student = {
  name: "Shawon",
  age: 25,
  education: {
    SSC: "Daffodil International College",
    SSC_GPA: 3.92,
    HSC: "Daffodil International College",
    HSC_GPA: 3.92,
    BSC: "Daffodil International University",
    BSC_GPA: 3.67,
  },
};
const { name, age, ...education } = student;
const { SSC, HSC } = student.education;
console.log(SSC);
