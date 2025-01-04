type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const users: User[] = [];
const lines = data.split('\n');
for (const line of lines) {
  if (line === '') continue;
  const [name, ageSt, premiumUserSt] = line.split(',');
  const age = Number(ageSt);
  const premiumUser = premiumUserSt === '1';
  users.push({
    name,
    age,
    premiumUser,
  });
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age})はプレミアムユーザです。`);
  } else {
    console.log(`${user.name}(${user.age})はプレミアムユーザではありません。`);
  }
}
