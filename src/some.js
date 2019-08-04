const sum = (...numbers) => {
  let sum = 0;

  numbers.forEach( el => (sum += el))

  return sum
}

const length = (...numbers) => numbers.length;

class SomeMath {
  avg (...numbers) {
    return sum (...numbers) / numbers.length;
  }

  max (...numbers) {
    Math.max.apply (Math, numbers);
  }

  merge (a , b) {
    return {...a, ...b};
  }
}


export default new SomeMath()