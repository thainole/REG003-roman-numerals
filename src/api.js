// const objNumbers = { I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000 };
const romanNumbers = [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M' ];
const arabicNumbers = [ 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000 ];


// ----------------------- DE ROMANOS A ARÁBIGOS ---------------------------
const parse = (elem) => {

  if (typeof(elem) !== 'string' || elem == '') throw new Error('Not a string');
  
  const num = elem.toUpperCase();
  const numArr = num.split('');

  if (!numArr.every(elem=> romanNumbers.includes(elem))) throw new Error('Unknown roman numeral');

  if ((numArr[0] == 'V' || 'L' || 'D') && (numArr[0] == numArr[1])) {
    const numIndex = romanNumbers.indexOf(numArr[0]);
    const valueOfNum = arabicNumbers[numIndex];
    throw new Error(`Invalid repetition of number starting with 5: ${numArr[0]} (${valueOfNum})`);
  }

  if (numArr[0] === numArr[1] && numArr[0] === numArr[2] && numArr[0] === numArr[3])
    throw new Error(`Too many repetitions of roman numeral ${numArr[0]}`);

  if (numArr.find((item, index) => numArr.indexOf(item) !== index)) return 'holis'
    /* if (romanNumbers.includes(num)) {

      const index = romanNumbers.indexOf(num)
      const value = arabicNumbers[index]
      return value

    } else if (numArr.every(elem=> romanNumbers.includes(elem))) {

      return numArr.reduce((accumulator, current) => {
        const indexInArabic = romanNumbers.indexOf(current)
        const value = arabicNumbers[indexInArabic]
        console.log(accumulator,value)
        return accumulator + value 
      }, 0)

    } else {
      throw new Error('Unknown roman numeral')
    }
 */

}
 console.log(parse('IIIII'))

/* function convertToArabic(num) {
  if (isValidRn(num) === true) {
    const arrayRomNum = Object.keys(romanNumber);
    const splitNum = num.toUpperCase().split('')

    // let arrOfNumbers = []
    const gettingValue = splitNum.map(n => {
      const key = arrayRomNum.indexOf(n);
      // console.log(key)
      const arrValues = Object.values(romanNumber)
      // console.log(arrValues)
      const value = arrValues[key];
      /* console.log(value)
      console.log(arrOfNumbers.push(value)) */
     /*  return value
    })
    return gettingValue
  } else {
    return 'Please, enter a valid roman number'
  }
} */

module.exports = { parse }
