

getGrade(marks)

function getGrade(marks){

if (marks > 79 && marks<= 100) {
    console.log ('A');
}else if (marks >= 60 && marks<=79) {
    console.log ('B');
}else if (marks > 49 && marks<=59) {
    console.log ('C');
}else if (marks > 40 && marks<=49) {
    console.log ('D');
}
else if (marks >=0 && marks<=40) {
    console.log ('E')
}
else {
  console.log ('invalid')

}
}

function runChallenge1() {
    const marks = Number(document.getElementById('challenge1Input').value);
    let grade = '';
    if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    document.getElementById('result').textContent = 'Marks: ' + marks + ' | Grade: ' + grade;
}