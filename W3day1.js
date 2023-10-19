// let date = new Date();
// let sales = getSalesData(date);
// let labor = getLaborCosts(date);
// let budget = getBudget(date);
// let report = generateReport(date, sales, labor, budget);
// sendReport(report);

// function getSalesData(forDate) {
//   let netSales = getNetSales(forDate);
//   let salesTax = computeSalesTax(netSales);
//   return {netSales, salesTax};
// }

// function getLaborCosts(forDate) {
//   let staffCosts = getStaffCosts(forDate);
//   let mgtCosts = getMgtCosts(forDate);
//   return {staffCosts, mgtCosts};
// }

// function getBudget(forDate) {
//   let salesBudget = getSalesBudget(forDate);
//   let laborBudget = getLaborBudget(forDate);
//   return {salesBudget, laborBudget};
// }

// function generateReport(forDate, dailySales, dailyLabor, budget) {

// // }
// function areBothEven(n1, n2) {
//     return !(n1 % 2) && !(n2 % 2);
//   }

// console.log(areBothEven(4,6));

// function getDevObject(name) {
//     let skills = [];
//     for (let i = 1; i < arguments.length; i++) {
//       skills.push(arguments[i]);
//     }
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }
//#Rest parameters

// function getDevObject(name, ...skills) {
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }

//#Default parameters
function setColor(bicycle, color = 'purple'){ {
	bicycle.color = color;
}
   console.log(setColor(blue));
}
