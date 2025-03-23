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
//     const lifespan = current.death - current.birthdayYear;
//     return lifespan > max.lifespan ? { current, lifespan } : max;
//   },
//   { lifespan: 0 }
// );

// console.log(
//   `The biggest lifespan is ${biggest.name} with ${biggest.lifespan} years.`
// );

// console.log(data);
// const data = [
//   { name: "Math", death: 1990, birthdayYear: 1920 },
//   { name: "English", death: 2005, birthdayYear: 1940 },
//   { name: "Physics", death: 1985, birthdayYear: 1910 },
//   { name: "Chamastry", death: 2010, birthdayYear: 1935 },
//   { name: "Biologey", death: 2020, birthdayYear: 1950 },
// ];

// const biggest = data.reduce((max, current) =>
//   current.death - current.birthdayYear > max.death - max.birthdayYear
//     ? current
//     : max
// );

// console.log(
//   `The biggest lifespan is ${biggest.name} with ${
//     biggest.death - biggest.birthdayYear
//   } years.`
// );

// Iteration 1:
// current = { name: "Math", death: 1990, birthdayYear: 1920 }
// Lifespan: 1990 - 1920 = 70
// max = { lifespan: 0 }
// Since 70 > 0, max is updated to { name: "Math", death: 1990, birthdayYear: 1920, lifespan: 70 }.

// Iteration 2:
// current = { name: "English", death: 2005, birthdayYear: 1940 }
// Lifespan: 2005 - 1940 = 65
// max = { name: "Math", death: 1990, birthdayYear: 1920, lifespan: 70 }
// Since 65 < 70, max remains the same.

// Iteration 3:
// current = { name: "Physics", death: 1985, birthdayYear: 1910 }
// Lifespan: 1985 - 1910 = 75
// max = { name: "Math", death: 1990, birthdayYear: 1920, lifespan: 70 }
// Since 75 > 70, max is updated to { name: "Physics", death: 1985, birthdayYear: 1910, lifespan: 75 }.

// Iteration 4:
// current = { name: "Chemistry", death: 2010, birthdayYear: 1935 }
// Lifespan: 2010 - 1935 = 75
// max = { name: "Physics", death: 1985, birthdayYear: 1910, lifespan: 75 }
// Since 75 = 75, max remains the same.
// Iteration 5:

// current = { name: "Biology", death: 2020, birthdayYear: 1950 }
// Lifespan: 2020 - 1950 = 70
// max = { name: "Physics", death: 1985, birthdayYear: 1910, lifespan: 75 }
// Since 70 < 75, max remains the same.

// function formatNumber(num) {
//   return num >= 1e9
//     ? (num / 1e9).toFixed(1) + "B"
//     : num >= 1e6
//     ? (num / 1e6).toFixed(1) + "M"
//     : num >= 1e3
//     ? (num / 1e3).toFixed(1) + "K"
//     : num;
// }
// console.log(formatNumber(1500000000000000));

const daysOfWeek = ["sun", "mon", "tus", "wed", "thu", "fri", "sat"];

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEV",
];

const $ = (id) => document.getElementById(id);
const zeroPadding = (num) => String(num).padStart(2, "0");

function clock() {
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();
  const ampm = h < 11 ? "AM" : "PM";
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  $("hours").innerHTML = zeroPadding(h);
  $("min").innerHTML = zeroPadding(m);
  $("sec").innerHTML = zeroPadding(s);
  $("ampm").innerHTML = ampm;
  const prevActive = document.querySelector(".active");
  if (prevActive) prevActive.classList.remove("active");

  const currentDayElement = $(daysOfWeek[day]);
  if (currentDayElement) currentDayElement.classList.add("active");
  $("year").innerHTML = year;
  $("month").innerHTML = months[month];
  $("day").innerHTML = zeroPadding(date);
}

setInterval(clock, 400);
