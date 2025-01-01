type HasName = {
  name: string;
};
type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const arr1: boolean[] = [true, false];

const arr2: Array<{ name: string }> = [
  { name: '山田さん' },
  { name: '田中さん' },
];

const arr3: Array<boolean> = [true, false];
