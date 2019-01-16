 //Function of Display Number
 function displayNumber(number){
    calcForm.calcDisplay.value += number;
}

//Function of Display Operator
function displayOperator(opr){
    var value1,value2,result;
    value1 = calcForm.calcDisplay.value;
    console.log(value1);
    if(opr === '+'){
        console.log('+');
        calcForm.calcDisplay.value = "";
        value2 = calcForm.calcDisplay.value;
        console.log(value2);
        if(opr === '='){
            console.log('=');
            console.log(value1);
            console.log(value2);
            result = value1 + value2;
            calcForm.calcDisplay.value = result;
        }
    }else if(opr === '-'){
        console.log('-');
    }else if(opr === '*'){
        console.log('*');
    }else if(opr === '/'){
        console.log('/');
    }else{

    }
}

//Function of All Clear
function allClear(){
    calcForm.calcDisplay.value = "";
}

//Function of Clear Single Digit
function deleteSingleDigit(){
    var result = calcForm.calcDisplay.value;
    calcForm.calcDisplay.value = result.substr(0,result.length - 1);
}

//Function of Clear Entire Number
function clearNumber(){
    calcForm.calcDisplay.value = "";
}

//Function of Cube
function countCube(){
    var result = Math.pow(calcForm.calcDisplay.value,3);
    calcForm.calcDisplay.value = result;
}

//Function of Square
function countSquare(){
    var result = Math.pow(calcForm.calcDisplay.value,2);
    calcForm.calcDisplay.value = result;
}

//Function of Square root
function countSqrt(){
    var result = Math.sqrt(calcForm.calcDisplay.value);
    calcForm.calcDisplay.value = result;
}

//Function of Factorial
function countFactorial(){
    var result = calcForm.calcDisplay.value;
    var fact,i;
    fact = 1;
    i = 1;
    while(i<=result){
        fact = fact * i;
        i++;
    }
    calcForm.calcDisplay.value = fact;
}