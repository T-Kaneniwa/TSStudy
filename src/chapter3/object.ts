const obj: {
  foo: number;
  bar: string;
} = {
  foo: 123,
  bar: 'Hello, world!',
};

type FooBarObj = {
  foo: number;
  bar: string;
};
const obj2: FooBarObj = {
  foo: 123,
  bar: 'aiueo',
};
