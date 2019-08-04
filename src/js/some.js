const sum = (...numbers) => {
  let sum = 0

  numbers.forEach( el => (sum += el))

  return sum
}

const length = (...numbers) => numbers.length

class SomeMath {
  avg (...numbers) {
    return sum (...numbers) / numbers.length
  }

  max (...numbers) {
    let max = -Infinity;

    numbers.forEach( el => (el > max? max = el : ''))
    return max
  }

  merge (a , b) {
    console.log(a)
    return {...a, ...b}
  }
}


export default new SomeMath()