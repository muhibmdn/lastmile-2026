// Subtask 2.1 Add condition logic in script.js
let nilai = 80.9
if (nilai >= 81) {
	console.log("Nilai A")
}else if (nilai >= 61) {
	console.log("Nilai B")
}else if (nilai >= 41) {
	console.log("Nilai C")
}else if (nilai >= 21) {
	console.log("Nilai D")
}else {
	console.log("Nilai E")
}

// Subtask 3.1 Add loop examples
// Loop for 1 to 10
for (let a = 1; a <= 10; a++) {
	console.log(a)
}
// Loop While
let b = 1
while (b <= 10) {
	console.log(b)
	b++
}
// Loop Do While
let c = 10
do {
	console.log(c)
	c++
}while (c < 10)

// Subtask 4.1 Create reusable functions
function greet(name) {
	console.log("Assalamualaikum, " + name + "!")
}
greet("Muhib")
// Function with return value
function add(x, y) {
	return x + y
}
let sum = add(5, 3)
console.log("Hasil penjumlahan: " + sum)
// Function with default parameter
function greetWithDefault(name = "Guest") {
	console.log("Hello, " + name + "!")
}
greetWithDefault() // Output: Hello, Guest!
greetWithDefault("Muhib") // Output: Hello, Muhib!
// Function ES6 Arrow Function
const multiply = (x, y) => x * y
let product = multiply(4, 6)
console.log("Hasil perkalian: " + product)