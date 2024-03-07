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
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

// fetch("")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

console.log(Object.keys(student));
console.log(Object.values(student));
const products = [
  { name: "Laptop", price: 25000, brand: "Lenovo", color: "Silver" },
  { name: "Tablet", price: 10000, brand: "Samsung", color: "Black" },
  { name: "Mobile", price: 5000, brand: "Apple", color: "Blue" },
  { name: "TV", price: 10000, brand: "LG", color: "White" },
  { name: "TV", price: 10000, brand: "LG", color: "White" },
];
const newProduct = { name: "TV@", price: 120000, brand: "LG", color: "White" };
const newProducts = [...products, newProduct];
const remaining = products.filter((product) => product.name !== "phone");
console.log(remaining);
