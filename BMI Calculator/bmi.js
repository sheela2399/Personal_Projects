
function bmiResult(){
    var getHeight = document.getElementById("Height").value;
    var getWeight = document.getElementById("Weight").value;
    var getResult = document.getElementById("Result");

    if (getHeight == "" && getWeight == "") {
        alert("Enter A Proper Value")
    }else {
    var result = ((getWeight / (getHeight * getHeight))*10000).toFixed(2)
    getResult.innerHTML =  (`Yor BMI is ${result}`)    
}
}
