const sum = (...numbers) => {
  let sum = 0;

  numbers.forEach( el => (sum += el));

  return sum;
}

const avg = (...numbers) => (sum (...numbers) / numbers.length);

const length = (...numbers) => numbers.length;

export {sum, avg, length};