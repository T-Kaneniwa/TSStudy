const sum = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};
const nums = [1, 2, 3, 4, 5];
// console.log(sum(...nums));

type User = { name: string; age: number };
const getName = (u: User): string => u.name;
const users: User[] = [
  { name: 'uhyo', age: 26 },
  { name: 'John', age: 15 },
];
const names = users.map(getName);
// console.log(names);

type F = (repeatNum: number) => string;
const xRepeat: F = (num: number): string => 'x'.repeat(num);
