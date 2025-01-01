type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};

const obj: MyObj = { foo: false, bar: true };
const obj2: MyObj = { foo: true, bar: false, baz: 1234 };
if (obj2.baz !== undefined) console.log(obj2.baz * 1000);
