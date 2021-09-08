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

const subtractingNumbers = (prev, next) => {
  switch (prev, next) {
    case (prev=1, next=5): return true;
    case (prev=1, next=10): return true;
    case (prev=10, next=50): return true;
    case (prev=10, next=100): return true;
    case (prev=100, next=500): return true;
    case (prev=100, next=1000): return true;
    default: throw new Error(`Invalid substraction prefix ${prev}`);
  }
}

const parse = (elem) => {

  // SI ES UN STRING
  if (typeof(elem) !== 'string' || elem == '') throw new Error ('Not a string');
  
  const num = elem.toUpperCase();
  const numArr = num.split('');

  // SI  INCLUYE CARACTERES DE UN NÚMERO ROMANO
  const isRomanNumeral = numArr.every(number=> romanNumbers.includes(number))
  if (!isRomanNumeral) throw new Error ('Unknown roman numeral');

  // SI EMPIEZA CON V, L, D
  const arrayWithRoman5 = ['V', 'L', 'D'];
  const isRepeatedwith5 = arrayWithRoman5.filter((item) => item === numArr[0] && item === numArr[1]).join()
  if (isRepeatedwith5) {
    throw new Error (`Invalid repetition of number starting with 5: ${errorNumberStartsWith5(isRepeatedwith5)}`)
  }

  const regex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/gm;
  const matchingExp = num.match(regex);

  // SI REPITE MÁS DE 4 VECES LOS OTROS CARACTERES
  if (numArr.length >= 4) {
    const filterRepeated = numArr.find((item, index) => numArr.indexOf(item) !== index)
    if (matchingExp === null) throw new Error (`Too many repetitions of roman numeral ${filterRepeated}`)
  }

  
  
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


}

console.log(parse('DC'))

module.exports = { parse }