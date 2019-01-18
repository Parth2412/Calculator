//Declaration of variable
var i=0;
var storeToHistory;

//Functions for Calculation Start

    //Function of Displaying Numbers and checking length
    function displayDigit(number){
        var result = document.getElementById("resultBlock");
        result.textContent += number;
        if(result.textContent.startsWith('+') || result.textContent.startsWith('-') || 
            result.textContent.startsWith('/') || result.textContent.startsWith('*') ||
            result.textContent.startsWith('^')){
            allClear();
        }
        if(result.textContent.includes('+') || result.textContent.includes('-') || 
            result.textContent.includes('/') || result.textContent.includes('*') ||
            result.textContent.includes('^')){
            var preValue = document.getElementById("resultBlock").textContent;
            document.getElementById("historyBlock").textContent += preValue;
            document.getElementById("resultBlock").textContent = "";
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
            var question = number+"³"+" = ";
            var answer = result;
            storeToHistory = {question,answer};
            document.getElementById("historyBlock").textContent = number+"³"+" = "+result;
            storeHistory();
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
            var question = number+"²"+" = ";
            var answer = result;
            storeToHistory = {question,answer};
            document.getElementById("historyBlock").textContent = number+"²"+" = "+result;
            storeHistory();
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
            var question = "√"+beforeValue+" = ";
            var answer = result;
            storeToHistory = {question, answer};
            storeHistory();
            document.getElementById("historyBlock").textContent = "√"+beforeValue+" = "+result;
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
            var question = beforeValue+"! = ";
            var answer = fact;
            storeToHistory = {question, answer};
            document.getElementById("historyBlock").textContent = beforeValue+"! = "+fact;
            storeHistory();
        }
    }

    //Function of All clear
    function allClear(){
        var result = document.getElementById("resultBlock").textContent;
        result = "";
        document.getElementById("resultBlock").textContent = result;
        document.getElementById("historyBlock").textContent = result;
        window.location.reload();
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
        var data, valueToCalculate;
        data = document.getElementById("resultBlock").textContent;
        valueToCalculate = document.getElementById("historyBlock").textContent+document.getElementById("resultBlock").textContent;
        if(data[0] == null){
            deleteSingleDigit();
        }else{
            console.log(data);
            if(data.includes('^')){
                var finalValue = data.split("^");
                console.log(finalValue);
                var expoValue = Math.pow(finalValue[0],finalValue[1]);
                console.log(expoValue);
                document.getElementById("resultBlock").textContent = expoValue;
                var question = data + "=";
                var answer = expoValue;
                storeToHistory = {question, answer};
                document.getElementById("historyBlock").textContent = data + "=" + expoValue;
                storeHistory();
            }else{
                var result = eval(valueToCalculate);
                document.getElementById("resultBlock").textContent = result;
                var question = valueToCalculate + "=";
                var answer = result;
                storeToHistory = {question,answer};
                document.getElementById("historyBlock").textContent = valueToCalculate + "=" + result;
                storeHistory();
            }
        } 
    }

//Functions for Calculation End


//Functions for Navigation Start, Navigation End, Store History, Display History Start

    //Function for Open Navigation Bar and show History
    function openNav() {
        document.getElementById("historyList").style.width = "250px";
        const historyList = document.getElementById("historyList");
        while(historyList.children.length - 1){
            historyList.removeChild(historyList.lastChild);
        }
        let historyDisplay = [];
        historyDisplay = JSON.parse(localStorage.getItem('historyKeyValue'));
        if(historyDisplay !== null){
            let historyBlock = document.getElementById("historyList");
            historyDisplay.forEach(element => {
                let newA = document.createElement('a');
                newA.textContent = (element.question+" "+element.answer);
                historyBlock.appendChild(newA);
            });
            let newLink = document.createElement('a');
            newLink.textContent = "Clear History";
            newLink.id = "clear-history";
            historyBlock.appendChild(newLink);
        }
        var clearHistoryID = document.getElementById("clear-history");
        clearHistoryID.onclick = function(){
            localStorage.clear();
            openNav();
        }
    }
    //Function for Close Navigation Bar
    function closeNav() {
        document.getElementById("historyList").style.width = "0";
    }
    //Function for Store History
    function storeHistory(){
        let historyArray=[];
        historyArray=JSON.parse(localStorage.getItem('historyKeyValue'));
        // console.log(typeof abc);
        if(historyArray == null)
        {
            historyArray=[];
        }
        if(Object.keys(historyArray).length>9)
        {
            historyArray.shift();  
        }
        historyArray.push(storeToHistory);
        localStorage.setItem('historyKeyValue',JSON.stringify(historyArray));
    }

//Functions for Navigation Start, Navigation End, Store History, Display History End
