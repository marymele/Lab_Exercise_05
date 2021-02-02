document.addEventListener("DOMContentLoaded", function(){
    const screenDisplay=document.getElementById('screen');
    const spans=document.querySelectorAll('button');
    const spanArray=Array.from(spans);

    
    

    function addNum(num1,num2){
        var Sum=num1+num2
   
        return Sum;
    }

    function subtractNum(num1,num2){
        let Dif= num1 - num2;
        return Dif;
    }

    function multiplyNum(num1,num2){
        var Prd=num1*num2;
    
        return Prd;
    }

    function divideNum(num1,num2){
        if (num2!= 0){
            let Quot= parseFloat(num1) /parseFloat(num2);
            return Quot;
        }else{
            console.log("Syntax error: zero as denominator");
            return "";
            
        }
    }

    function power(num1,num2){
        var pow=num1**num2;
        return pow;
    }
    function Sqrt(num1){
        var sqrt=num1**0.5;
        return sqrt;
    }

    spanArray.map(button=> button.addEventListener('click',function(){
        if (button.innerText !== "="){
            screenDisplay.innerText += button.innerText
        };
        if (button.innerText === "=") {
            screenDisplay.innerText = evaluate(screenDisplay.innerText)
        };
        if (button.innerText === "C"){
            screenDisplay.innerText = ""
        };
    }));

    function evaluate(expr){
        var num1="";
        var num2="";
        var opr="";
        var addToOne = true;
        expr.split("").forEach(element=>{
            if(["+","-","*","/","^","√"].includes(element)){
                if(addToOne==true){
                  opr=element;
                  addToOne=false;  
                }else{
                    num1=parseFloat(num1);
                    num2=parseFloat(num2);
                    if(opr=="+"){
                        num1=addNum(num1,num2);
                    }else if(opr=="-"){
                        num1=subtractNum(num1,num2);
                    }else if(opr=="*"){
                        num1=multiplyNum(num1,num2);
                    }else if(opr=="/"){
                        num1=divideNum(num1,num2);
                    }else if(opr=="^"){
                        num1=power(num1,num2);
                    }else if(opr=="√"){
                        num1=Sqrt(num1);
                    }
                    num2="";
                }
                opr=element;
               
            }
            else if(addToOne==true){
                num1+=element;
            }
            else{
                num2+=element;
            }

        })

        num2=parseFloat(num2);
        if(opr=="+"){
            num1=addNum(num1,num2);
        }else if(opr=="-"){
            num1=subtractNum(num1,num2);
        }else if(opr=="*"){
            num1=multiplyNum(num1,num2);
        }else if(opr=="/"){
            num1=divideNum(num1,num2);
        }else if(opr=="^"){
            num1=power(num1,num2);
        }else if(opr=="√"){
            num1=Sqrt(num1);
        }

        return num1;
    }

});


