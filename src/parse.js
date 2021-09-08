const romanNumbers = [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M' ];
const arabicNumbers = [ 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000 ];

const errorNumberStartsWith5 = (repeatedNumber) => {

  let errMessage = '';

  switch (repeatedNumber) {
    case 'V': return errMessage = 'V (5)';
    case 'L': return errMessage = 'L (50)';
    case 'L': return errMessage = 'D (500)';
  }

}

const parse = (elem) => {

  if (typeof(elem) !== 'string' || elem == '') throw new Error ('Not a string');
  
  const num = elem.toUpperCase();
  const numArr = num.split('');

  const isRomanNumeral = numArr.every(number=> romanNumbers.includes(number))
  if (!isRomanNumeral) throw new Error ('Unknown roman numeral');

  const arrayWithRoman5 = ['V', 'L', 'D'];
  const isRepeatedwith5 = arrayWithRoman5.filter((item) => item === numArr[0] && item === numArr[1]).join()
  if (isRepeatedwith5) {
    throw new Error (`Invalid repetition of number starting with 5: ${errorNumberStartsWith5(isRepeatedwith5)}`)
  }

  const isValidSubstraction = numArr.forEach((elem, index) => {
    const prevRomNum = romanNumbers.indexOf((numArr[index])) // encuentra el número romano correspondiente según index
    const prevArabNum = arabicNumbers[prevRomNum] // encuentra el número arábico correspondiente
    const nextRomNum = romanNumbers.indexOf((numArr[index+1]))
    const nextArabNum = arabicNumbers[nextRomNum]
    console.log(elem)
    if (prevArabNum < nextArabNum) {
      // hacer un switch: si el prev es tal y next es tal, se resta
    }
  })
  /* const regex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/mg;
  const matchingExp = num.match(regex);
  if (matchingExp === null) {
    throw 
  }
  console.log(matchingExp) */


}

console.log(parse('CM'))

module.exports = { parse }