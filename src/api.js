// const objNumbers = { I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000 };
const romanNumbers = [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M' ];
const arabicNumbers = [ 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000 ];


// ----------------------- DE ROMANOS A ARÁBIGOS ---------------------------
const parse = (elem) => {

  if (typeof(elem) !== 'string' || elem == '') throw new Error('Not a string');
  
  const num = elem.toUpperCase();
  const numArr = num.split('');

  if (!numArr.every(elem=> romanNumbers.includes(elem))) throw new Error('Unknown roman numeral');

  console.log(numArr[0],numArr[1])
  if (numArr[0] === 'V' || 'L' || 'D') {
    if (numArr[0] === numArr[1]) {
      const numIndex = romanNumbers.indexOf(numArr[0]);
      const valueOfNum = arabicNumbers[numIndex];
      throw new Error(`Invalid repetition of number starting with 5: ${numArr[0]} (${valueOfNum})`);
  }}

  /* if (numArr[0] === numArr[1] && numArr[0] === numArr[2] && numArr[0] === numArr[3])
    throw new Error(`Too many repetitions of roman numeral ${numArr[0]}`);
 */

  for (let i = 0; i < numArr.length; i++) {
    let counts = {};
    (counts[numArr[i]]) ? counts[numArr[i]] += 1 : counts[numArr[i]] = 1
      
    for (let prop in counts){
      if (counts[prop] >= 2){
        console.log(prop + " counted: " + counts[prop] + " times.")
      }
    }
  }
  // if (numArr.find((item, index) => numArr.indexOf(item) !== index)) return 'holis'
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
 console.log(parse('II'))

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

// SI REPITE MÁS DE 4 VECES LOS OTROS CARACTERES
  /* if (numArr.length >= 4) {
    const filterRepeated = numArr.find((item, index) => numArr.indexOf(item) !== index)
    if (matchingExp === null) throw new Error (`Too many repetitions of roman numeral ${filterRepeated}`)
  } */

  // SI EMPIEZA CON V, L, D
  /* const arrayWithRoman5 = ['V', 'L', 'D'];
  const isRepeatedwith5 = arrayWithRoman5.filter((item) => item === numArr[0] && item === numArr[1]).join()
  if (isRepeatedwith5) {
    throw new Error (`Invalid repetition of number starting with 5: ${errorNumberStartsWith5(isRepeatedwith5)}`)
  } */

  // SI ESTÁ EN DESORDEN 
  const regexGroup = /^(M{0,3})(C(?:D|M)|D?C{0,3})(X(?:L|C)|L?X{0,3})(I(?:V|X)|V?I{0,3})$/;
  const matchingGroup = num.match(regexGroup);
  if (!matchingGroup) throw new Error ('Invalid order')

  // 
  
  /* numArr.map((index) => {
    const prevRom = romanNumbers.indexOf((numArr[index])) // encuentra el número romano correspondiente según index
    const prevArab = arabicNumbers[prevRom] // encuentra el número arábico correspondiente
    const nextRom = romanNumbers.indexOf((numArr[index+1]))
    const nextArab = arabicNumbers[nextRom]

    numArr.reduce()
    console.log(subtractingNumbers(prevArab, nextArab))
    console.log((prevArab, nextArab))
    // return (prevArab < nextArab) ? subtractingNumbers(prevArab, nextArab) : null
    if (prevArab < nextArab && subtractingNumbers(prevArab, nextArab)) {
      return
    }

    return nextArab-prevArab
  }) */


  /* const isValidSubstraction = () => {
    numArr.forEach((index) => {
      const prevRom = romanNumbers.indexOf((numArr[index])) // encuentra el número romano correspondiente según index
      const prevArab = arabicNumbers[prevRom] // encuentra el número arábico correspondiente
      const nextRom = romanNumbers.indexOf((numArr[index+1]))
      const nextArab = arabicNumbers[nextRom]
    
      console.log((prevArab, nextArab))
      return (prevArab < nextArab) && subtractingNumbers(prevArab, nextArab)

    })
  }

  isValidSubstraction() */


  /* const regex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/mg;
  const matchingExp = num.match(regex);
  if (matchingExp === null) {
    throw 
  }
  console.log(matchingExp) */
// const regex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/gm;

  /* const subtractingNumbers = (prev, next) => {
  switch (prev, next) {
    case (prev=1, next=5): return true;
    case (prev=1, next=10): return true;
    case (prev=10, next=50): return true;
    case (prev=10, next=100): return true;
    case (prev=100, next=500): return true;
    case (prev=100, next=1000): return true;
    default: throw new Error(`Invalid substraction prefix ${prev}`);
  }
} */


module.exports = { parse }
