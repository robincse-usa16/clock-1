// function palindromes(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   if (rev == str) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let str1 = "racecar";
// let str2 = "tacos";

// console.log(palindromes(str1));
// console.log(palindromes(str2));

// let str1 = "A car, a man, a maraca";
// let str2 = "Rats live on no evil star";
// let str3 = " Lid off a daffodil";
// let str4 = "Rats live on no evil sta";
// let str5 = "Animal loots foliated detail of stool lamina";
// let str6 = "A nut for a jar of tuna";

// console.log(palindromes(str1));
// console.log(palindromes(str2));
// console.log(palindromes(str3));

// console.log(palindromes(str4));
// console.log(palindromes(str5));
// console.log(palindromes(str6));

// function isPalindrome(str) {
//   let j = str.length - 1;
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] != str[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }

// let str1 = "racecar";
// let str2 = "nitin";
// let str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));

// const books = [
//   {
//     title: "Book",
//     author: "Name",
//   },
//   {
//     title: "Book2",
//     author: "Name2",
//   },
// ];
// const titles = books.map((book) => book.title);
// console.log(titles);

// const data = [
//   {
//     name: "Math",
//     death: 1990,
//     birthdayYear: 1920,
//   },
//   {
//     name: "English",
//     death: 2005,
//     birthdayYear: 1940,
//   },
//   {
//     name: "Physics",
//     death: 1985,
//     birthdayYear: 1910,
//   },
//   {
//     name: "Chamastry",
//     death: 2010,
//     birthdayYear: 1935,
//   },
//   {
//     name: "Biologey",
//     death: 2020,
//     birthdayYear: 1950,
//   },
// ];
// let biggest = data.reduce(
//   (max, current) => {
//     const lifespen = current.death - current.birthdayYear;
//     return lifespen > max.lifespen ? { ...current, lifespen } : max;
//   },
//   { lifespen: 0 }
// );
// console.log(
//   `The biggest lifespan is ${biggest.name} with ${biggest.lifespen} year`
// );

// console.log(data);

const data = [
  {
    name: "Math",
    death: 1990,
    birthdayYear: 1920,
  },
  {
    name: "English",
    death: 2005,
    birthdayYear: 1940,
  },
  {
    name: "Physics",
    death: 1985,
    birthdayYear: 1910,
  },
  {
    name: "Chamastry",
    death: 2010,
    birthdayYear: 1935,
  },
  {
    name: "Biologey",
    death: 2020,
    birthdayYear: 1950,
  },
];

let biggest = data.reduce(
  (max, current) => {
    const lifespan = current.death - current.birthdayYear;
    return lifespan > max.lifespan ? { current, lifespan } : max;
  },
  { lifespan: 0 }
);

console.log(
  `The biggest lifespan is ${biggest.name} with ${biggest.lifespan} years.`
);
