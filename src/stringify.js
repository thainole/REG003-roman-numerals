const stringify = (num) => {
  if (typeof(num) !== 'number') throw new Error('Not a number')

  if (num < 0 || num > 3999) throw new Error('out of range')
}

// console.log(stringify([]));

module.exports = { stringify }