//Function of Displaying Numbers and checking length
function displayDigit(number){
    console.log(number);
    var result = document.getElementById("resultBlock");
    result.textContent += number;
    var len = result.textContent.length;
    if(len > 10){
        alert("Not more than 10 digit");
    }
}

//Function of Count Cube
function countCube(){
    var number = document.getElementById("resultBlock").innerHTML;
    var result = Math.pow(number,3);
    var display = document.getElementById("resultBlock");
    display.textContent = result;
}

//Function of Count Square
function countSquare(){
    var number = document.getElementById("resultBlock").innerHTML;
    var result = Math.pow(number,2);
    var display = document.getElementById("resultBlock");
    display.textContent = result;
}

//Function of Count Square root
function countSqrt(){
    var result = Math.sqrt(document.getElementById("resultBlock").textContent);
    document.getElementById("resultBlock").textContent = result;
}

//Function of All clear
function allClear(){
    var result = document.getElementById("resultBlock").textContent;
    result = "";
    document.getElementById("resultBlock").textContent = result;
    document.getElementById("historyBlock").textContent = result;
}

//Function of Delete single digit
function deleteSingleDigit(){
    var beforeValue = document.getElementById("resultBlock").textContent;
    var result = beforeValue.substr(0,beforeValue.length - 1);
    document.getElementById("resultBlock").textContent = result;
}

//Function Check decimal exist or not
function checkDecimal(){
    var beforeValue = document.getElementById("resultBlock").textContent;
    console.log(beforeValue);
    if(!beforeValue.includes('.')){
        beforeValue += '.';
    }else{
        document.getElementById("resultBlock").textContent = beforeValue;
    }
}

//Functions of Add, Mul, Div, Subtract, Exponential
function equalsTo(){
    var storeData;
    var data
    data = document.getElementById("resultBlock").textContent;
    console.log(data);
    if(data.includes('^'))
    {
        var finalValue = data.split("^");
        console.log(finalValue);
        var expoValue = Math.pow(finalValue[0],finalValue[1]);
        console.log(expoValue);
        document.getElementById("resultBlock").textContent = expoValue;
        storeData = data + "=" + expoValue;
        document.getElementById("historyBlock").textContent = storeData;
        localStorage.setItem(data,expoValue);
    }
    else
    {
        var result = eval(data);
        document.getElementById("resultBlock").textContent = result;
        storeData = data + "=" + result;
        document.getElementById("historyBlock").textContent = storeData;
        localStorage.setItem(data,result);
    } 
}

