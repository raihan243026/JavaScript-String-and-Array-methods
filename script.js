// Convert the following array into a string using `toString()`: ['apple', 'banana', 'cherry']
let fruits = ['apple', 'banana', 'cherry'];
let fruitsString = fruits.toString();
console.log(fruitsString); // Output: apple,banana,cherry

// Join all elements of the following array into a single string, separated by a hyphen (-): ['red', 'green', 'blue']
let colors = ['red', 'green', 'blue'];
let colorsString = colors.join('-');
console.log(colorsString); // Output: red-green-blue

// Remove the last element from the following array : [1, 2, 3, 4, 5]
let numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); // Output: [ 1, 2, 3, 4 ]

// Add a new element 'grape' to the end of this array: ['apple', 'banana']
let twofruits = ['apple', 'banana'];
twofruits.push('grape');
console.log(twofruits); // Output: [ 'apple', 'banana', 'grape' ]

// Add 'train' and 'plane' to the beginning of this array: ['boat', 'ship']
let vehicles = ['boat', 'ship'];
vehicles.unshift('train', 'plane');
console.log(vehicles); // Output: [ 'train', 'plane', 'boat', 'ship' ]

// Use `delete` to remove the 2nd element from this array: ['dog', 'cat', 'bird']
let animals = ['dog', 'cat', 'bird'];
delete animals[1];
console.log(animals); // Output: [ 'dog', <1 empty item>, 'bird' ]

// Merge these two arrays: [1, 2, 3] and [4, 5, 6]
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray1 = array1.concat(array2);
console.log(mergedArray1); // Output: [ 1, 2, 3, 4, 5, 6 ]

// an array ["a", "b", "c", "d", "e", "f"], delete “c” and “d”
let letters = ["a", "b", "c", "d", "e", "f"];
letters.splice(2, 2);
console.log(letters); // Output: [ 'a', 'b', 'e', 'f' ]

// an array ["first", "second", "third", "fourth", "fifth","sixth","seventh","eighth","nineth" ]. Print the element at index 4.
let words = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "nineth"];
console.log(words[4]); // Output: fifth

// an array ["apple", "banana", "cherry", "date", "fig"]. Remove the last two elements and print the updated array. [ you can use method multiple time you need ]
let fruits3 = ["apple", "banana", "cherry", "date", "fig"];
fruits3.pop();
fruits3.pop();
console.log(fruits3); // Output: [ 'apple', 'banana', 'cherry' ]

// an array ["dog", "cat", "fish", "bird"]. Convert this array into a comma-separated string.
let animals2 = ["dog", "cat", "fish", "bird"];
let animals2String = animals2.join(',');
console.log(animals2String); // Output: dog,cat,fish,bird

//an array ["apple", "orange", "banana", "grape"]. Create a string with each element separated by a hyphen ("-").
let fruits4 = ["apple", "orange", "banana", "grape"];
let fruits4String = fruits4.join('-');
console.log(fruits4String); // Output: apple-orange-banana-grape

// an array ["b", "c", "d"]. Add the elements "a", "b", and "c" to the beginning of the array in a single call. Print the updated array.
let letters2 = ["b", "c", "d"];
letters2.unshift("a", "b", "c");
console.log(letters2); // Output: [ 'a', 'b', 'c', 'b', 'c', 'd' ]

//an array [1, 2, 3, 4, 5]. Use the delete operator to remove the element 4.
let numbers2 = [1, 2, 3, 4, 5];
delete numbers2[3];
console.log(numbers2); // Output: [ 1, 2, 3, <1 empty item>, 5 ]

//two arrays [1, 2, 3] and [4, 5, 6]. Merge these arrays and then use slice() to get the first 4 elements of the resulting array.
let array3 = [1, 2, 3];
let array4 = [4, 5, 6];
let mergedArray2 = array3.concat(array4);
let slicedArray = mergedArray2.slice(0, 4);
console.log(slicedArray); // Output: [ 1, 2, 3, 4 ]

//an array ["a", "b", "c", "d", "e"], Remove 2 elements starting from index 1 and insert "x" and "y" in their place. Print the updated array.
let letters3 = ["a", "b", "c", "d", "e"];
letters3.splice(1, 2, "x", "y");
console.log(letters3); // Output: [ 'a', 'x', 'y', 'd', 'e' ]

//an array [10, 20, 30, 40, 50]. Use the slice() method to extract a subarray starting from index 1 and contain 3 elements.
let numbers3 = [10, 20, 30, 40, 50];
let subarray = numbers3.slice(1, 4);
console.log(subarray); // Output: [ 20, 30, 40 ]

//an array [1, 2, 3, 4, 5]. Convert this array into a string. Then use split() to convert it back into an array of strings. Print both the string and the resulting array.
let numbers4 = [1, 2, 3, 4, 5];
let numbers4String = numbers4.toString();
let numbers4Array = numbers4String.split(',');
console.log(numbers4String); // Output: 1,2,3,4,5
console.log(numbers4Array); // Output: [ '1', '2', '3', '4', '5' ]

// Given an array ["a", "b", "c", "d", "e", "f"], use the at() method to access and print the first and the last elements of the array.
let letters4 = ["a", "b", "c", "d", "e", "f"];
console.log(letters4.at(0)); // Output: a
console.log(letters4.at(-1)); // Output: f

// Remove the 2nd element from this array: ['apple', 'banana', 'cherry', 'date']".
let fruits5 = ['apple', 'banana', 'cherry', 'date'];
fruits5.splice(1, 1);
console.log(fruits5); // Output: [ 'apple', 'cherry', 'date' ]

// Convert the following string to uppercase: "frontend developer"
let string = "frontend developer";
let upperCaseStr = string.toUpperCase();
console.log(upperCaseStr); // Output: FRONTEND DEVELOPER

// Convert the following string to lowercase: "JAVASCRIPT ROCKS"
let string2 = "JAVASCRIPT ROCKS";
let lowerCaseStr = string2.toLowerCase();
console.log(lowerCaseStr); // Output: javascript rocks

// Check if the word "learn" is included in this string: "I love to learn JavaScript"
let string3 = "I love to learn JavaScript";
let includesLearn = string3.includes("learn");
console.log(includesLearn); // Output: true

// Check if the following string starts with "Hello": "Hello World, how are you?"
let string4 = "Hello World, how are you?";
let startsWithHello = string4.startsWith("Hello");
console.log(startsWithHello); // Output: true

// Check if the following string ends with ".jpg": "profile-picture.jpg"
let string5 = "profile-picture.jpg";
let endsWithJpg = string5.endsWith(".jpg");
console.log(endsWithJpg); // Output: true

// Find the character at index 3 of this string: "Developer"
let string6 = "Developer";
let charAtIndex3 = string6.charAt(3);
console.log(charAtIndex3); // Output: e

// Find the index of the word "React" in this string: "I am learning React and Node"
let string7 = "I am learning React and Node";
let indexOfReact = string7.indexOf("React");
console.log(indexOfReact); // Output: 15

// Use .at() to get the last character of this string: "Creative"
let string8 = "Creative";
let lastChar = string8.at(-1);
console.log(lastChar); // Output: e

// Extract the word "Rahman" from this string using .slice(): "Sahed Rahman"
let string9 = "Sahed Rahman";
let extractedWord = string9.slice(6);
console.log(extractedWord); // Output: Rahman

// Split the following string into an array by comma: "red,green,blue,yellow"
let string10 = "red,green,blue,yellow";
let colorsArray = string10.split(',');
console.log(colorsArray); // Output: [ 'red', 'green', 'blue', 'yellow' ]






