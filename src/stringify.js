const stringify = (num) => {
  if (typeof(num) !== 'number') throw new Error('Not a number')

  if (num < 0 || num > 3999) throw new Error('out of range')

  const romanConversion = { 
    M:1000, 
    CM:900, 
    D:500, 
    CD:400, 
    C:100, 
    XC:90, 
    L:50, 
    XL:40, 
    X:10, 
    IX:9, 
    V:5, 
    IV:4, 
    I:1
  };

  let roman = '';
  let i;

  for ( i in romanConversion ) {
    // por cada propiedad en el objeto (ejm C)
    while ( num >= romanConversion[i] ) { // ejm lookup[C]
      // Mientras que el número sea mayor o igual al value (ejm 100) de la propiedad (ejm C) 
      roman += i;
      // Se va concatenando el string 
      num -= romanConversion[i];
      // Se va restando el número entero que se encuentra 
      // ejm de 123, encuentro el 100(C) y resto 123-100 para hallar la sgte conversión, que sería de 23, y así
    }
  }
  return roman;
  
}

// console.log(stringify(123));

module.exports = { stringify }