let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

<<<<<<< HEAD
var storyWords = [console.log(story.length)];

var storyWords = story.split(" ");
console.log(storyWords);
=======
//Step 1 Used .split set to split at the beginning of any whitespace.
var storyWords = story.split(" ");

//Step 2 Used .length to check how many items are in the given array(data structure).
console.log(storyWords.length);

// arr.forEach(function (currentValue, index, array) {
//   // iterator
// });

//Step 3 Created betterWords variable that has a filtered version of storyWords with all unnecessaryWords taken out. I used the filter method with "word" being the descriptive name for each item iterated over. Then returned any word that didn't include any items from "unnecessaryWords" array.
var betterWords = storyWords.filter(function (word) {
  return !unnecessaryWords.includes(word);
});

//Step 4 Using .reduce method to take count of all the time the items in the "overusedWords" array show up in the "betterWords" array. The first parameter is "tally" which is the accumulator, a.k.a. "[]", which is an empty object (2nd parameter to .reduce method) and will be taking in the count of all the "word"'s being reduced from betterWords. The second  parameter is "word" which is our descriptive name for the current item being iterated on.
var tallyWords = betterWords.reduce(function (tally, word) {
  if (overusedWords.includes(word)) {
    tally[word] = (tally[word] || 0) + 1;
  }
  return tally;
}, {});
// console.log(tallyWords);

//Step 5 Using .forEach on "betterWords" array. Checking to see which words ends with a "." or "!". If it does then we increment the "sentenceCount" variable by 1. The total becomes 12.
var sentenceCount = 0;
betterWords.forEach(function (word) {
  if (word.endsWith(".") || word.endsWith("!")) {
    sentenceCount++;
  }
});
// console.log(sentenceCount);

// Step 6 Created a variable named "logRoll" that is a function which return 3 console.log's. I then call that function in a console.log outside of the scope of that function.
var logRoll = function () {
  return (
    console.log(tallyWords),
    console.log(sentenceCount),
    console.log(overusedWords)
  );
};
console.log(logRoll());

// Step 7 Used .join method to console.log "betterWords" as a single string instead of a broken down array of strings.
// console.log(betterWords.join(" "));

//Step 8
//8.1For the overused words, remove it every other time it appears.
var obj = {};
var everyOther = storyWords.filter(function (word) {
  if (overusedWords.includes(word)) {
    obj[word] = (obj[word] || 0) + 1;
  }
  if (obj[word] % 2 === 1) {
    return true;
  } else if (obj[word] % 2 === 0) {
    return false;
  } else {
    return true;
  }
});
// console.log(everyOther);
//8.2Write a function that finds the word that appears the greatest number of times.

//with AI help I learned this way and with object.keys(greatestWord) to turn it into an array first then doing traditional for loop doing this same logic.
var maxCount = 0;
var maxWord = "";

for (var word in greatestWord) {
  if (greatestWord[word] > maxCount) {
    maxCount = greatestWord[word];
    maxWord = word;
  }
}
//8.3Replaced overused words with something else.
>>>>>>> 114c7746b42da253687265e0d836ddb7b05f8692
