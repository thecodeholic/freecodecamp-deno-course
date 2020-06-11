interface User {
  name: string;
}
const userMap = new Map<number, User>();
userMap.set(1, { name: "Zura" });
class MyMap extends Map<number, User> {
}
function getPromise<T extends User>(value: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 1000);
  });
}

class Lecturer implements User {
  name: string = "";
}
class Student implements User {
  name: string = "";
}

const value = await getPromise(new Lecturer());
const value2 = await getPromise(new Student());
console.log(value);
