const basicSalary = parseInt(prompt("Enter your basic salary: "));
//prompts the user to enter their basic salary and parses the input as an integer
const benefits = parseInt(prompt("Enter your benefits: "));
//prompts the user to enter their benefits and parses the input as an integer.
const grossSalary = basicSalary + benefits;
//calculates the gross salary by adding the basic salary and benefits.
let payee = 0;
let nhifDeductions = 0;
let nssfDeductions = 0;
//iniitializes all declared variables to zero
if (grossSalary > 288000) {
  payee = (grossSalary - 288000) * 0.3;
  //checks if the gross salary is above a certain threshold and calculates the payee (tax) accordingly.
} else if (grossSalary > 147580) {
  payee = (grossSalary - 147580) * 0.25;
  //checks if the gross salary is above another threshold and calculates the payee (tax) accordingly.
} else if (grossSalary > 110000) {
  payee = (grossSalary - 110000) * 0.2;
}
//checks if the gross salary is above another threshold and calculates the payee (tax) accordingly.


if (grossSalary < 6000) {
  nhifDeductions = 150;
} else if (grossSalary < 8000) {
  nhifDeductions = 300;
} else if (grossSalary < 11000) {
  nhifDeductions = 400;
} else if (grossSalary < 15000) {
  nhifDeductions = 500;
} else if (grossSalary < 20000) {
  nhifDeductions = 600;
} else if (grossSalary < 25000) {
  nhifDeductions = 750;
} else if (grossSalary < 30000) {
  nhifDeductions = 850;
} else if (grossSalary < 35000) {
  nhifDeductions = 900;
} else if (grossSalary < 40000) {
  nhifDeductions = 950;
} else if (grossSalary < 45000) {
  nhifDeductions = 1000;
} else if (grossSalary < 50000) {
  nhifDeductions = 1100;
} else if (grossSalary < 60000) {
  nhifDeductions = 1200;
} else if (grossSalary < 70000) {
  nhifDeductions = 1300;
} else if (grossSalary < 80000) {
  nhifDeductions = 1400;
} else if (grossSalary < 90000) {
  nhifDeductions = 1500;
} else if (grossSalary < 100000) {
  nhifDeductions = 1600;
} else {
  nhifDeductions = 1700;
}
//The above lines of code  check if the gross salary is above certain thresholds and calculate the payee (tax) accordingly.

nssfDeductions = Math.min(grossSalary * 0.06, 1800);
//calculates the NSSF deductions as either 6% of the gross salary or a maximum of 1,800 Kes, whichever is lowe

const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
// calculates the net salary by subtracting the payee, NHIF deductions, and NSSF deductions from the gross salary.

console.log(`Gross Salary: ${grossSalary}`);
console.log(`Payee (Tax): ${payee}`);
console.log(`NHIF Deductions: ${nhifDeductions}`);
console.log(`NSSF Deductions: ${nssfDeductions}`);
console.log(`Net Salary: ${netSalary}`);
//ring out the calculations for the gross salary, payee (tax), NHIF deductions, NSSF deductions, and net salary.