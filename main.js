//Declaration of variable
var i=0;

//Functions for Calculation Start

    //Function of Displaying Numbers and checking length
    function displayDigit(number){
        console.log(number);
        var result = document.getElementById("resultBlock");
        result.textContent += number;
        if(result.textContent.startsWith('+') || result.textContent.startsWith('-') || 
            result.textContent.startsWith('/') || result.textContent.startsWith('*') ||
            result.textContent.startsWith('^')){
            allClear();
        }
        var len = result.textContent.length;
        if(len > 10){
            deleteSingleDigit();
        }
    }

    //Function of Count Cube
    function countCube(){
        var number = document.getElementById("resultBlock").textContent;
        if(number == ""){
            allClear();
        }else{
            var result = Math.pow(number,3);
            var display = document.getElementById("resultBlock");
            display.textContent = result;
            var storeValue = number+"³"+" = "+result;
            document.getElementById("historyBlock").textContent = storeValue;
            localStorage.setItem(i++,storeValue);
        }
    }

    //Function of Count Square
    function countSquare(){
        var number = document.getElementById("resultBlock").textContent;
        if(number == ""){
            allClear();
        }else{
            var result = Math.pow(number,2);
            var display = document.getElementById("resultBlock");
            display.textContent = result;
            var storeValue = number+"²"+" = "+result;
            document.getElementById("historyBlock").textContent = storeValue;
            localStorage.setItem(i++,storeValue);
        }
    }

    //Function of Count Square root
    function countSqrt(){
        var beforeValue = document.getElementById("resultBlock").textContent;
        if(beforeValue == ""){
            allClear();
        }
        else{
            var result = Math.sqrt(beforeValue);
            document.getElementById("resultBlock").textContent = result;
            var storeValue = "√"+beforeValue+" = "+result;
            localStorage.setItem(i++,storeValue);
        }
    }

    //Functions of Count Factorial
    function countFactorial(){
        var fact,increment;
        var beforeValue = document.getElementById("resultBlock").textContent;
        if(beforeValue == ""){
            allClear();
        }else if(beforeValue.startsWith('.')){
            document.getElementById("resultBlock").textContent = "Error";
        }else if(beforeValue.includes('.')){
            document.getElementById("resultBlock").textContent = "Error";
        }else{
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

    //Function Check decimal exist or not for both the value
    function checkDecimal(){
        var beforeValue, middleValue, afterValue, result;
        beforeValue = document.getElementById("resultBlock").textContent;
        if(!beforeValue.includes('.')){
            beforeValue += '.';
        }
        document.getElementById('resultBlock').textContent = beforeValue;
        if(document.getElementById('resultBlock').textContent.includes('+')){
                middleValue = document.getElementById("resultBlock").textContent;
                afterValue = middleValue.split("+");
                if(!afterValue[1].includes('.')){
                    afterValue[1] ="+"+afterValue[1]+".";
                }
                document.getElementById('resultBlock').textContent = beforeValue +"+"+ afterValue;
                result = afterValue[0] + afterValue[1];
                console.log(result);
                document.getElementById('resultBlock').textContent = result;
            }
            if(document.getElementById('resultBlock').textContent.includes('-')){
                middleValue = document.getElementById("resultBlock").textContent;
                afterValue = middleValue.split("-");
                if(!afterValue[1].includes('.')){
                    afterValue[1] ="-"+afterValue[1]+".";
                }
                document.getElementById('resultBlock').textContent = beforeValue +"-"+ afterValue;
                result = afterValue[0] + afterValue[1];
                console.log(result);
                document.getElementById('resultBlock').textContent = result;
            }
            if(document.getElementById('resultBlock').textContent.includes('*')){
                middleValue = document.getElementById("resultBlock").textContent;
                afterValue = middleValue.split("*");
                if(!afterValue[1].includes('.')){
                    afterValue[1] ="*"+afterValue[1]+".";
                }
                document.getElementById('resultBlock').textContent = beforeValue +"*"+ afterValue;
                result = afterValue[0] + afterValue[1];
                console.log(result);
                document.getElementById('resultBlock').textContent = result;
            }
            if(document.getElementById('resultBlock').textContent.includes('/')){
                middleValue = document.getElementById("resultBlock").textContent;
                afterValue = middleValue.split("/");
                if(!afterValue[1].includes('.')){
                    afterValue[1] ="/"+afterValue[1]+".";
                }
                document.getElementById('resultBlock').textContent = beforeValue +"/"+ afterValue;
                result = afterValue[0] + afterValue[1];
                console.log(result);
                document.getElementById('resultBlock').textContent = result;
            }
    }

    //Functions of Add, Mul, Div, Subtract, Exponential
    function equalsTo(){
        var storeData;
        var data
        data = document.getElementById("resultBlock").textContent;
        console.log(data);
        if(data.includes('^')){
            var finalValue = data.split("^");
            console.log(finalValue);
            var expoValue = Math.pow(finalValue[0],finalValue[1]);
            console.log(expoValue);
            document.getElementById("resultBlock").textContent = expoValue;
            storeData = data + "=" + expoValue;
            document.getElementById("historyBlock").textContent = storeData;
            localStorage.setItem(i++,storeData);
        }else{
            var result = eval(data);
            document.getElementById("resultBlock").textContent = result;
            storeData = data + "=" + result;
            document.getElementById("historyBlock").textContent = storeData;
            localStorage.setItem(i++,storeData);
        } 
    }

//Functions for Calculation End


//Functions for Navigation Start and display History

    //Function for Open Navigation Bar and show History
    function openNav() {
        document.getElementById("historyList").style.width = "250px";
        const historyList = document.getElementById("historyList");
        while(historyList.children.length - 1){
            historyList.removeChild(historyList.lastChild);
        }
        if(localStorage.length <= 10){
            for(var hisLoop = 0 ; hisLoop <= localStorage.length - 1; hisLoop++){
                var historyData = localStorage[hisLoop];
                var showHistory = document.createElement('a');
                showHistory.style.textAlign = "left";
                showHistory.innerHTML = historyData;
                historyList.appendChild(showHistory);
            }
        }
    }
    
    //Function for Close Navigation Bar
    function closeNav() {
        document.getElementById("historyList").style.width = "0";
    }

//Functions for Navigation End

  
