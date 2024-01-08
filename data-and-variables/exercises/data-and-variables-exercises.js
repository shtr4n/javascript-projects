// Declare and assign the variables below
let shuttlename = "Determination";
let shuttlespeed = 17500;
let distancetoMars = 225000000;
let distancetoMoon = 384400;
const milesperkm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttlename);
console.log(typeof shuttlespeed);
console.log(typeof distancetoMars);
console.log(typeof distancetoMoon);
console.log(typeof shuttlename);
// Calculate a space mission below - days to reach mars
let milestoMars = distancetoMars * milesperkm;
let hourstoMars = milestoMars / shuttlespeed;
let daystoMars = hourstoMars / 24;
// Print the results of the space mission calculations below
console.log(shuttlename + " will take " + daystoMars + " days to reach Mars.");
// Calculate a trip to the moon below
let milestoMoon = distancetoMoon * milesperkm;
let hourstoMoon = milestoMoon / shuttlespeed;
let daystoMoon = hourstoMoon /24;
// Print the results of the trip to the moon below
console.log(shuttlename + " will take " + daystoMoon + " days to reach Moon.");