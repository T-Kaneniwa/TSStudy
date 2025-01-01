for (let i = 1; i <= 100; i++) {
  // 3の倍数であり、5の倍数でないときはFizzを出力
  if (i % 3 === 0 && i % 5 === 1) {
    console.log('Fizz');
  }
  // 3の倍数でなく、5の倍数であるときはBuzzを出力
  if (i % 3 === 1 && i % 5 === 0) {
    console.log('Buzz');
  }
  // 3の倍数かつ5の倍数のときはFizzBuzzを出力
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else {
    console.log(i);
  }
}
