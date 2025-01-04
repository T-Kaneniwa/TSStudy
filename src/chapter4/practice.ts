const getFizzBuzzString = (num: number) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'Fizzbuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
};

const sequence = (startNum: number, Endnum: number): number[] => {
  const result = [];
  for (let i = startNum; i <= Endnum; i++) {
    result.push(i);
  }
  return result;
};

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
