// Declaration

function showMessage(name='Anony User') {
    alert(`Hi ${name}`);
}
showMessage('Anonymous');


function ask(q,y,n) {
    if (confirm(q)) {
        y();
    }
    else {
        n();
    }
}
function showYes() {
    alert('Yaxshi');
}
function showNo() {
    alert('Yomon');
}
ask('Saytdan foydalanishga rozimisiz', showYes, showNo);

// Expressions

let hello = () => {
    alert('Hello')
}
hello();


// Function Decloration

function summasi(a,b) {
    let result = a + b;
    return result;
}
alert(summasi(23,23));

// Function Expression

let summa = function(a,b) {
    let result = a + b;
    return result;
}
alert(summa(12,12));

// Function Arrow 

let sum = (a,b)=> {
    let result = a + b;
    return result;
}
alert(sum(12,55))