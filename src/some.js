function sum (...numbers) {
  let sum = 0;

  numbers.forEach( el => (sum += el));

  return sum;
}

function avg (...numbers) {
  return sum (...numbers) / numbers.length;
}

export default avg;