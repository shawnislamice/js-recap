const numbers = [1, 2, 34, 5];
const student = {
  name: "Shawon Islam",
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

//Template String
const about = `My name is ${student.name} age is ${student.age} has number ${numbers[2]}`;
console.log(about);

// 2. Arrow Function
const getFiftyFive = () => 55;

const add_sixty_five = (a) => a + 65;

// Spread Operator

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];
const numbers3 = [11, 12, 13, 14, 15];
const numbers4 = [16, 17, 18, 19, 20];
const newNumbers1 = [...numbers1];
newNumbers1.push(100);
console.log(numbers1);
console.log(newNumbers1);
