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

// child class
class Student extends Person {
  constructor(fullName, birthday, course) {
    super(fullName, birthday);
    this.course = course;
  }
  introduce() {
    console.log(
      `Hi My name is ${this._fullName}  and  I enrolled in ${this.course}`
    );
  }
  calcuAge() {
    console.log(`I am ${2024 - this.birthday} year old`);
  }
}

const jiswan = new Person("Muhammed Jiswan", 1999);
console.log(jiswan.calcuAge());
console.log(jiswan);

//child class obj
const st = new Student("Anas Rahman", 1975, "ec");
console.log(st);
st.introduce();
st.calcuAge();
