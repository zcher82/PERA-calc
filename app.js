function calcCompInt(year, principle) {
    var future_value = principle * Math.pow(1.04, year);
    var rounded_value = Math.round(future_value * 100)/100;
    return rounded_value;
    console.log(rounded_value);
}

function calcInterest(year, principle) {
    var current_year = calcCompInt(year, principle);
    var previous_year = calcCompInt(year -1, principle);
    var interest = Math.round((current_year - previous_year)*100)/100;
    return interest;
    console.log(interest);
}

for (var i = 1; i <= 31; i++) {
    var age = 34 + i;
    var principle = 34707.33;
    var balance = calcCompInt(i, principle);
    var interest = calcInterest(i, principle);
    console.log('Age: ' + age + '\n' + 'Balance: $' + balance + '\n' + 'Interest accrued from last year: $' + interest);
}
