// Basic class example

// public, private

// Inheritance and protected

// Static
class Person {
  public counter: number = 0;
  public static counter: number = 0;
  constructor() {
    this.counter++;
    Person.counter++;
  }
}
const p1 = new Person();
const p2 = new Person();
console.log(p1.counter, p2.counter, Person.counter);

// Extending Interface
interface InputInterface {
  name: string;
  label: string;
  render(): string;
}
