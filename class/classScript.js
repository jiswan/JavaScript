class Person {
  //constructor
  constructor(fullName, birthday) {
    this.fullName = fullName;
    this.birthday = birthday;
  }
  //Getter method
  get age() {
    return 2024 - this.birthday;
  }
  //setter method

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      console.log(`${name} is not a full name`);
    }
  }
  //creating a method
  calcuAge() {
    return 2024 - this.birthday;
  }
}
const jiswan = new Person("Muhammed Jiswan", 1989);
console.log(jiswan.calcuAge());
console.log(jiswan);

const abin = new Person("Abin", 1994);
console.log(abin);
