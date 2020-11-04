// Filter out countries
// 1.	Extract all the countries contain the word 'land' from the countries array and print it as array
// 2.	Find the country containing the hightest number of characters in the countries array
// 3. Sort the countries by length of characters in the countries array
// 4.	Extract all the countries containing only four characters from the countries array and print it as array
// 5.	Extract all the countries containing two or more words from the countries array and print it as array
// 6.	Reverse the countries array and capitalize each country and stored it as an array.
// 7.	Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.


const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States' ];


// step-1
function countryFind1(arr) {
  let result = [];
  // // 1st way:
  // result = arr.filter(item => item.includes('land'));

  // 2nd way:
  for(let i=0; i < arr.length; i++) {
    if(arr[i].includes('land')) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(countryFind1(countries));


// step-2
function longestCountry(arr){
  // // 1st way:
  let longest = [];
  longest = arr.map(item => item.length);
  longest = longest.sort((a,b) => b-a);
  return longest[0];

  // 2nd way:
  // let max = arr[0].length;
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i].length > max) {
  //     max = arr[i].length;
  //   }
  //}

  return max;
}

console.log(longestCountry(countries));


// step-3
function countrySort(arr){
  let sorting = arr.slice();  // I took shallow copy of array, because sort is updating the array itself.
  sorting = sorting.sort((a,b) => a.length - b.length);
  return sorting;
}

console.log(countrySort(countries));


// step-4
function countryFind4(arr){
  let result = [];

  // 1st way:
  // result = arr.map(item => item.substr(0, 4));

  // 2nd way:
  for(let i=0; i< arr.length; i++) {
    result.push(arr[i].substr(0,4));
  }
  return result;
}

console.log(countryFind4(countries));


// step-5
function countryFind5(arr){
  let result = [];

  // // 1st way:
  // result = arr.filter(item => item.split(" ").length > 1);
  // 2nd way:
  for(let i=0; i< arr.length; i++) {
    let splitWords = arr[i].split(" ");
    if(splitWords.length > 1) {
      result.push(arr[i]);
    }
  }

  return result;    
}

console.log(countryFind5(countries));

//step-6

function countryFind6(arr){
  let result = [];

  // // 1st way:
  // result = arr.slice();    // I took shallow copy of array, because reverse is updating the array itself.
  // result = result.reverse().map(item => item.toUpperCase());

  // 2nd way:
  for(let i = arr.length - 1; i >= 0; i--) { 
    result.push(arr[i].toUpperCase());
  }
  return result;
}

console.log(countryFind6(countries));

// step-7

function countryFind7(arr) {
  let result = "";

  // 1st way:
  // result = arr.map(item => item.includes("land") ? item.substr(0, item.indexOf("land")) : item).join("").concat("land");

  // 2nd way:
  for(let i=0; i < arr.length; i++) {
    if(arr[i].includes("land")) {
      result = result + arr[i].substr(0, arr[i].indexOf("land"));
    } else {
      result = result + arr[i];
    }
  }

  result = result + "land";
  return result;
}

console.log(countryFind7(countries));