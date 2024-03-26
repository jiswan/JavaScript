const a = "👍";
const word =
  "underscore_case\n   first_name\n Some_Variable \n  calculate_AGE\ndelayed_departure"
    .split("\n")
    .map((str) => str.trim());
for (const [index, w] of word.entries()) {
  const [frst, last] = w.split("_");
  console.log(
    `${frst.toLowerCase()}${last.replace(
      last[0],
      last[0].toUpperCase()
    )}`.padEnd(20) + a.repeat(index + 1)
  );
}
//another one
const output = "Flight Details";
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
const getFrst = (letter) => letter.slice(0, 3).toUpperCase();
console.log(`${output.padStart(30, "=").padEnd(50, "=")}`);
for (const flight of flights.split("+")) {
  //console.log(flight);
  const [type, from, to, time] = flight
    .split(";")
    .map((flight) => flight.replaceAll("_", " "));
  const details = `${
    type.startsWith(" Delayed") ? "🔴" : " "
  }${type.trim()} from ${getFrst(from)} to ${getFrst(to)} (${time.replace(
    ":",
    "h"
  )})`;

  console.log(details.padStart(43));
}
