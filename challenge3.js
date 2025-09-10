function runChallenge3() {
    // Get values from form inputs
    let basicSalary = Number(document.getElementById('basicSalary').value);
    let benefits = Number(document.getElementById('benefits').value);
    let orgInput = document.getElementById('orgNSSF').value;
    let organizationNSSF = orgInput.toLowerCase() === 'yes';

    // Calculate tax
    let tax = calculateTax(basicSalary, benefits);
    // Calculate SHA deduction
    let sha = calculateSHADeduction(basicSalary, benefits, tax);
    // Calculate NSSF deduction
    let nssf = calculateNSSFDeduction(basicSalary, benefits, organizationNSSF);
    // Housing levy: 1.5% of gross income
    let totalIncome = basicSalary + benefits;
    let housingLevy = totalIncome * 0.015;

    // Calculate net pay
    let netPay = totalIncome - tax - sha - nssf - housingLevy;

    // Display all results
    let resultText =
        'Tax: ' + tax + '\n' +
        'SHA Deduction: ' + sha + '\n' +
        'NSSF Deduction: ' + nssf + '\n' +
        'Housing Levy: ' + housingLevy + '\n' +
        'Net Pay: ' + netPay;
    document.getElementById('result').textContent = resultText;
}

function calculateTax(basicSalary, benefits) {
    let tax = 0;
    let totalIncome = basicSalary + benefits;
    if (totalIncome <= 24000) {
        tax = totalIncome * 0.01;
    } else if (totalIncome >= 24001 && totalIncome <= 32333) {
        tax = totalIncome * 0.25;
    } else if (totalIncome >= 32334 && totalIncome <= 500000) {
        tax = totalIncome * 0.3;
    } else if (totalIncome >= 500001 && totalIncome <= 800000) {
        tax = totalIncome * 0.325;
    } else if (totalIncome > 800000) {
        tax = totalIncome * 0.35;
    }
    return tax;
}

function calculateSHADeduction(basicSalary, benefits, tax) {
    let totalIncome = basicSalary + benefits;
    let netIncome = totalIncome - tax;
    let SHADeduction = netIncome * 0.0275;
    return SHADeduction;
}

function calculateNSSFDeduction(basicSalary, benefits, organizationNSSF) {
    let totalIncome = basicSalary + benefits;
    let nssftier1 = totalIncome * 0.06; // Example rate for tier 1
    let nssftier2 = 0;
    if (!organizationNSSF) {
        nssftier2 = totalIncome * 0.06; // Example rate for tier 2
    }
    return nssftier1 + nssftier2;
}
