// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));

// Validate the investment amount (EC)
while (isNaN(investment) || investment < 0) {
    investment = parseFloat(prompt('Enter a valid investment amount as xxxx.xx'));
}

rate = parseFloat(prompt('Enter interest rate as xx.x'));

// Validate the interest rate (EC)
while (isNaN(rate) || rate < 0 || rate > 6) {
    rate = parseFloat(prompt('Enter a valid interest rate as xx.x'));
}

years = parseInt(prompt('Enter the number of years you want to invest for'));

// Validate the number of years (EC)
while (isNaN(years) || years < 1 || years > 30) {
    years = parseInt(prompt('Enter a valid number of years you want to invest for'));
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);