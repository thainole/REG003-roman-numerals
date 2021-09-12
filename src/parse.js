const romanNumbers = [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M' ];
const arabicNumbers = [ 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000 ];

const matchingRegex = (rn) => {  

  let err, errMsg;

  // SI SE REPITEN LOS NÚMEROS I, X, C, M
  if (rn.match(/(M{4}|C{4}|X{4}|I{4})/g)) {
    err = (rn.match(/(M{4}|C{4}|X{4}|I{4})/g))[0].slice(0,1);
    errMsg = `Too many repetitions of roman numeral ${err}`;
    throw new Error(errMsg);
  }

  // SI SE REPITEN LOS NÚMEROS V, L, D
  if (rn.match(/(V{2}|L{2}|D{2})/g)) {
    err = rn.match(/(V{2}|L{2}|D{2})/g)[0].slice(0,1);
    switch (err) {
      case 'V': throw new Error('Invalid repetition of number starting with 5: V (5)');
      case 'L': throw new Error('Invalid repetition of number starting with 5: L (50)');
      case 'D': throw new Error('Invalid repetition of number starting with 5: D (500)');
    }
  }

  // SI LOS NÚMEROS NO PUEDEN RESTARSE
  if (rn.match(/(IL|IC|ID|IM|VX|VL|VC|VD|VM|LC|LD|LM|DM)/g)) {
    err = rn.match(/(IL|IC|ID|IM|VX|VL|VC|VD|VM|LC|LD|LM|DM)/g)[0].slice(0,1);
    errMsg = `Invalid substraction prefix ${err}`;
    throw new Error(errMsg);
  }
    
  else throw new Error('Invalid order');
}

const parse = (elem) => {

  // SI ES UN STRING
  if (typeof(elem) !== 'string' || elem == '') throw new Error ('Not a string');
  
  let num = elem.toUpperCase();
  const numArr = num.split('');

  // SI  INCLUYE CARACTERES DE UN NÚMERO ROMANO
  const isRomanNumeral = numArr.every(number=> romanNumbers.includes(number))
  if (!isRomanNumeral) throw new Error ('Unknown roman numeral');
  
  // EVALUANDO EL RESTO DE ERRORES
  const regex = /^(M{0,3})(C(?:D|M)|D?C{0,3})(X(?:L|C)|L?X{0,3})(I(?:V|X)|V?I{0,3})$/;
  
  if (!num.match(regex)) {
    return matchingRegex(num);
  } else {

    // DE ROMAN A ARABIC
    const arabArr = [];
    numArr.forEach((elem)=>{
      const findRoman = romanNumbers.indexOf(elem)
      const findArab = arabicNumbers[findRoman];      
      
      arabArr.push(findArab);
      return arabArr
    })
    

    return arabArr.reduce((acc, value, index) => {
      
      if ( arabArr[index+1] <= value || arabArr[index+1] === undefined) {
        const sum = acc + value
        return sum
      } else {
        const subs = acc - value
        return subs
      }
    }, 0)
  }
  
}


module.exports = { parse }