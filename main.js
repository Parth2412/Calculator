
var i=0;
//Functions for Calculation Start

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
        var storeValue = number+"³"+" = "+result;
        document.getElementById("historyBlock").textContent = storeValue;
        localStorage.setItem(i++,storeValue);
    }

    //Function of Count Square
    function countSquare(){
        var number = document.getElementById("resultBlock").innerHTML;
        var result = Math.pow(number,2);
        var display = document.getElementById("resultBlock");
        display.textContent = result;
        var storeValue = number+"²"+" = "+result;
        document.getElementById("historyBlock").textContent = storeValue;
        localStorage.setItem(i++,storeValue);
    }

    //Function of Count Square root
    function countSqrt(){
        var beforeValue = document.getElementById("resultBlock").textContent;
        var result = Math.sqrt(beforeValue);
        document.getElementById("resultBlock").textContent = result;
        var storeValue = "√"+beforeValue+" = "+result;
        localStorage.setItem(i++,storeValue);
    }

    //Functions of Count Factorial
    function countFactorial(){
        var fact,increment;
        var beforeValue = document.getElementById("resultBlock").textContent;
        fact = 1;
        increment = 1;
        while(increment <= beforeValue){
            fact = fact*increment;
            increment++;
        }
        document.getElementById("resultBlock").textContent = fact;
        var storeValue = beforeValue+"! = "+fact;
        document.getElementById("historyBlock").textContent = storeValue;
        localStorage.setItem(i++,storeValue);
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
            localStorage.setItem(i++,storeData);
        }
        else
        {
            var result = eval(data);
            document.getElementById("resultBlock").textContent = result;
            storeData = data + "=" + result;
            document.getElementById("historyBlock").textContent = storeData;
            localStorage.setItem(i++,storeData);
        } 
    }

//Functions for Calculation End


//Functions for Navigation Start

    //Function for Open Navigation Bar
    function openNav() {
        document.getElementById("historyList").style.width = "250px";
        
    }
    
    //Function for Close Navigation Bar
    function closeNav() {
        document.getElementById("historyList").style.width = "0";
    }

//Functions for Navigation End

//Functions for History Start

const historyList = document.getElementById("historyList");
var history2 = document.getElementById("btn-history");
history2.addEventListener("click", function () {
for(var j=0;j<10;j++){
    var historyData = localStorage.getItem(j);
    var result = document.createElement('a'); // is a node
    result.innerHTML = historyData;
    historyList.appendChild(result);
    console.log(historyData);
}
}, false);

//Functions for History End
  
