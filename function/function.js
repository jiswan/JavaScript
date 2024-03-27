// high - end function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
greet("Hey")("Jiswan");

// using arrow function
const arrgreet = (greeting) => (name1) => console.log(`${greeting} ${name1}`);
arrgreet("Hey")("Abin");

//call back

const lufthansa = {
  airlineName: "Lufathansa",
  iatacode: "LH",
  booking: [],
  book(name, flightNum) {
    console.log(
      `${name} booked ${this.airlineName} airlines, the flight number is ${this.iatacode}${flightNum}.`
    );
    this.booking.push({ flight: `${this.iatacode}${flightNum} `, name });
  },
};

const airIndia = {
  airlineName: "AirIndia",
  iatacode: "Al",
  booking: [],
};
const swiss = {
  airlineName: "SwissAirlines",
  iatacode: "SAI",
  booking: [],
};
const book = lufthansa.book;
book.call(airIndia, "souda", 12);
book.call(swiss, "Abin", 33);
book.call(lufthansa, "Jiswan", 11);

//using ... operator
const [name2, ...others] = ["Basheer", 44];
book.call(lufthansa, name2, ...others);
console.log(lufthansa.booking);
