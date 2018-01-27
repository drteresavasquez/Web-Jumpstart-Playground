// var name = "Teresa";

// num1 = 22;
// num2 = 13;
// console.log(name);

// console.log(Number(num1/13).toFixed(0));

// var value = 5 + 2;
// console.log(value);

// console.log(num1/=5);

// var product = 2;
// var newProduct = ++product;

// console.log(newProduct);
// console.log(newProduct);

var birthMonth = 2;
var months = ["Jan", "Feb", "March", "April", "May"];
var monthsNumber = [1,2,3,4,5];

var birthMonth = 2;

for (i=0; i < months.length; i++){
    if(monthsNumber[i] === birthMonth){
        console.log(months[i]);
    }
}

var futureMonth = 5;

if (futureMonth > birthMonth){
    console.log(months[futureMonth-1]);
}



var multiplyThemUp = function(num1, num2, num3){
    return num1 * num2 * num3;
};

var multiplication = multiplyThemUp(4, 7, 8);
var multiplication2 = multiplyThemUp(3, 5, 7);
console.log(multiplication);
console.log(multiplication2);

