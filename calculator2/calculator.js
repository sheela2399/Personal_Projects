// Addition function 
function addition(num1,num2){
    return num1 + num2    
}
 
var result = addition(4,3)
document.getElementById("add").innerHTML = result

// substraction function
function substraction(num1,num2){
    return num1 - num2    
}
 
var result = substraction(4,3)
 document.getElementById("substract").innerHTML = result

// multiplication function
function multiplication(num1, num2){
    return num1 * num2
}

var result = multiplication(4,3)
document.getElementById("multiply").innerHTML = result

//Divison function
function division(num1,num2){
    return num1 / num2
}

var result = division(12,4)
document.getElementById("divide").innerHTML = result

// percentage function
function percentage (num1,num2){
    return (num2/num1)*100
}

var result = percentage()
document.getElementById("percentage").innerHTML = result

// display function
function display(){
    document.getElementById("display").value += value
}

// clear function
function clear(){
    document.getElementById("clear").value = ''
}