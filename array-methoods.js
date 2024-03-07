const products = [
  { name: "Laptop", price: 25000, brand: "Lenovo", color: "Silver" },
  { name: "Tablet", price: 10000, brand: "Samsung", color: "Black" },
  { name: "Mobile", price: 5000, brand: "Apple", color: "Blue" },
  { name: "TV", price: 10000, brand: "LG", color: "White" },
  { name: "TV", price: 10000, brand: "LG", color: "White" },
];
const brands = products.map((product) => product.brand);
console.log(brands);
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

const cheap = products.filter((product) => product.price > 1000);
console.log(cheap);

const specificName = products.filter((product) => product.name.includes("a"));
console.log(specificName);

const special = products.find((product) => product.name.includes("a"));
console.log(special);
