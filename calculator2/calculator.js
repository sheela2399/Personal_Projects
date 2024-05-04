// // Addition function 
// function addition(num1,num2){
//     return num1 + num2    
// }

// var result = addition(4,3)
// document.getElementById("add").innerHTML = result



// // substraction function
// function substraction(num1,num2){
//     return num1 - num2    
// }

// var result = substraction(4,3)
//  document.getElementById("substract").innerHTML = result


// // multiplication function
// function multiplication(num1, num2){
//     return num1 * num2
// }

// var result = multiplication(4,3)
// document.getElementById("multiply").innerHTML = result


// //Divison function
// function division(num1,num2){
//     return num1 / num2
// }

// var result = division(12,4)
// document.getElementById("divide").innerHTML = result


// // percentage function
// function percentage (num1,num2){
//     return (num2/num1)*100
// }

// var result = percentage()
// document.getElementById("percentage").innerHTML = result




// method1

// var value1 ="";
// var displayTag = document.getElementById("display");

// function addToDisplay(value){
//     value1 =  value1 + value;
//     displayTag.value = "value1";
//     //  console.log(value1)
// }


// function calculate(){
//     console.log(eval(value1));
//     displayTag.value= "value1";

//     value1 ="";
// }


// method2

const displayTag = document.getElementById("display");

function addToDisplay(value) {
    displayTag.value += value;
}

var result = document.getElementById("display").value;

function calculate(){
    try {
        displayTag.value = eval(displayTag.value);
    }
    catch (error) {
        displayTag.value = "Error"
    }
}

// clear function
function clear(){
    displayTag.value = "";
}

// delete one number function
function deleteOneNum() {
    displayTag.value = displayTag.value.tostring().slice(0,-1);
}












