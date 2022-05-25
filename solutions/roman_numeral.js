function romanNumeral(s) {

  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let accumulator = 0;

  for (let i = 0; i < s.length; i++) {
      if (s[i] === "I" && s[i + 1] === "V") {
        accumulator += 4;
        i++;
      } else if (s[i] === "I" && s[i + 1] === "X") {
        accumulator += 9;
        i++;
      } else if (s[i] === "X" && s[i + 1] === "L") {
        accumulator += 40;
        i++;
      } else if (s[i] === "X" && s[i + 1] === "C") {
        accumulator += 90;
        i++;
      } else if (s[i] === "C" && s[i + 1] === "D") {
        accumulator += 400;
        i++;
      } else if (s[i] === "C" && s[i + 1] === "M") {
        accumulator += 900;
        i++;
      } else {
        accumulator += romanHash[s[i]];
      }
    }
    return accumulator;
  }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));

  console.log("");

  console.log("Expecting: 3");
  console.log(romanNumeral('III'));

  console.log("");

  console.log("Expecting: 1900");
  console.log(romanNumeral('MCM'));

  console.log("");

  console.log("Expecting: 1999");
  console.log(romanNumeral('MCMXCIX'));

  console.log("");

  console.log("Expecting: 44");
  console.log(romanNumeral('XLIV'));

  console.log("");

  console.log("Expecting: 223");
  console.log(romanNumeral('CCXXIII'));

  console.log("");

  console.log("Expecting: 3848");
  console.log(romanNumeral('MMMDCCCXLVIII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
/****************************************************************************
 * store important roman numerals in an Object called romans
 * initialize total to 0
 * 
 * iterate over string:
 *    if current character + next character is a key in romans:
 *      add that value to total
 *      skip over next character in iteration
 *    else:
 *      get value where current character is a key in romans
 *      add value to total
 * 
 * return total
 * *************************************************************************/

 // And a written explanation of your solution
/****************************************************************************
 * We can store the unique Roman numerals in an Object (key-value pairs), including
 * those where the small Roman numeral comes before the larger Roman numeral (e.g. 'IX').
 * When we iterate over the string, we first check if the current character plus the next
 * character is a key in the Object. If it is, we add the value associated with that key
 * to the total. We'll then need to increment our index in the string by 2. This takes care
 * of those numerals where the small number comes before the big one. If the two characters
 * together aren't a key, we add the value at the single-character key to the total and
 * increment the index by one.
 *  *************************************************************************/