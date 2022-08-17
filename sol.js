function Q1() {
    var number = +prompt("Enter a number to reverse: ");
  
    var numCopy = number.toString().split("").reverse().join("");
  
    var reversedString = parseFloat(numCopy) * Math.sign(number);
    alert("Reversed number is: " + reversedString);
    return;
  }
  
  function Q2() {
    var myString = prompt("Enter a string to check if palindrome: ");
    var revString = myString.split("").reverse().join("");
  
    alert("Is " + myString + " a palindrome? " + Boolean(myString === revString));
    return;
  }
  
  function Q3() {
    var combinations = prompt("Enter a string to generate its combinations: ");
    var store = [];
  
    for (var i = 0; i < combinations.length; i++) {
      for (var j = i + 1; j < combinations.length + 1; j++) {
        store.push(combinations.slice(i, j));
      }
    }
    alert(store);
    return;
  }
  
  function Q4() {
    var word = prompt("Enter a string to turn into alphabetical order: ")
      .split("")
      .sort()
      .join("");
  
    alert("Sorted in alphabetical order: " + word);
    return;
  }
  
  function Q5() {
    lowerString = prompt("Enter string to convert to Title case: ");
    lowerString = lowerString.split(" ");
    var word = "";
  
    for (var i = 0; i < lowerString.length; i++) {
      word = lowerString[i].toString();
      var cappedLetter = word.charAt(0).toUpperCase();
      word = cappedLetter + word.slice(1);
      lowerString[i] = word;
    }
    lowerString = lowerString.join(" ");
    alert("Title cased string: " + lowerString);
  }
  
  function Q6(sentence) {
    sentence = prompt("Enter a sentence to find longest word: ").split(" ");
  
    var longestWord = "";
    var lengthLongest = 0;
  
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i].length > lengthLongest) {
        lengthLongest = sentence[i].length;
        longestWord = sentence[i];
      }
    }
  
    alert("Longest word in string: " + longestWord);
  }
  
  function Q7() {
    var string = prompt("Enter a sentence: ");
  
    vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
  
    string = string.toLowerCase();
  
    for (var i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        count++;
      }
    }
  
    alert("Count of vowels: " + count);
    return;
  }
  
  function Q8() {
    var num = +prompt("Enter number to check primality: ");
    var isPrime = true;
  
    for (var i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
  
    if (isPrime) {
      alert(num + " is a prime number");
    } else {
      alert(num + " is not a prime number");
    }
    return;
  }
  
  function Q9() {
    var array = [10, 29, 13, 45, 15, 64, 21];
    var localArr = array.slice();
  
    var max = Math.max.apply(null, localArr);
    localArr.splice(localArr.indexOf(max), 1);
    max = Math.max.apply(null, localArr);
  
    var min = Math.min.apply(null, localArr);
    localArr.splice(localArr.indexOf(min), 1);
    min = Math.min.apply(null, localArr);
  
    alert(min + " " + max);
    return;
  }
  