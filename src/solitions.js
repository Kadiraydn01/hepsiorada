// String içindeki Max değeri bulma

//const maxChar = (arr) => {
//   let obj = {};

//   for (let char of arr) !obj[char] ? (obj[char] = 1) : obj[char]++;

//   let max = 0;
//   let maxChar = "";

//   for (let char in obj) {
//     if (obj[char] >= max) {
//       max = obj[char];
//       maxChar = char;
//     }
//   }
//   console.log(`${maxChar} appears ${max} times`);
// };

// maxChar("aabbbbbcccc");

// Sayının tersini alabilme
// const reverseNumber = (num) => {
//   if (num < 0)
//     return -1 * parseInt(num.toString().split("").reverse().join(""));
//   return parseInt(num.toString().split("").reverse().join(""));
// };

// console.log(reverseNumber(-1020));

// Wak Wak WAK
// const wakwak = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("WakWakWak");
//     } else if (i % 3 === 0) {
//       console.log("Wak");
//     } else if (i % 5 === 0) {
//       console.log("WakWak");
//     } else if (i > num) {
//       break;
//     } else {
//       console.log(i);
//     }
//   }
// };
// console.log(wakwak(35));

//Güzel bir ayrıştırmalı soru

// const chunk = ((arr, size) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4);
// console.log({ chunk });

//Unique değer bulma

// const findUnique = (arr) => {
//   let unique = {};
//   for (let i of arr) !unique[i] ? (unique[i] = 1) : unique[i]++;
//   for (let i in unique) {
//     if (unique[i] > 1) return false;
//   }
//   return true;
// };

// console.log({ findUnique: findUnique("abcd") });

//Permütasyon bulma sorusu

// const isPermutation = (str1, str2) => {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// };
// console.log(isPermutation("ewaabc", "cbeawa"));

//Boşlukları başka bir değerle değiştirme

// const replaceSpaces = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       newStr += "%20";
//     } else {
//       newStr += str[i];
//     }
//   }
//   console.log(newStr);
// };
// console.log(replaceSpaces("Hel lo Wor ld"));

// Kolay yolu

// const replaceSpaces2 = (str) => {
//   return str.replace(/\s/g, "%20");
// };
// console.log(replaceSpaces2("Hel lo Wor ld"));

//Değişiklikleri kontrol etme tek bir ekle silme veya değiştirme true else false

// const charMap = (str) => {
//   let obj = {};
//   for (let i of str) obj[i] = (obj[i] || 0) + 1;
//   return obj;
// };

// const checkChanges = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   const obj1 = charMap(arr1);
//   const obj2 = charMap(arr2);
//   let counter = 0;

//   for (let i in obj1) {
//     if (obj1[i] !== obj2[i]) {
//       counter++;
//       if (counter >= 2) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

// console.log(checkChanges("abbs", "abde"));

//Unique testi ve kaç tane aynı değerden var onu bulma testi

// const stringSayar = (str) => {
//   let count = 0;
//   (output = ""), (uniqCount = 0);
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) count++;
//     else {
//       output += `${str[i]}${count + 1}`;
//       count = 0;
//       uniqCount++;
//     }
//   }
//   if (uniqCount === str.length) return str;
//   else return output;
// };
// console.log({
//   string: stringSayar("abrrrrbccc"),
//   string2: stringSayar("abc"),
// });
