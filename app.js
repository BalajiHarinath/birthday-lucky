const birthday = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const outputMessage = document.querySelector("#message");
const button = document.querySelector("#check");

function calculateSum(dob){
    dob=dob.replaceAll("-"," ");
    let sum=0;
    console.log(dob.length);
    for(let i=0; i<dob.length; i++){
        sum+=Number(dob.charAt(i));
    }
    return sum;
};

function clickHandler(){
    const dob = birthday.value;
    const luckyNum = luckyNumber.value;
    if(dob && luckyNum){
        const dobSum = calculateSum(dob);
        if(dobSum % luckyNum === 0){
            outputMessage.innerText = "Your bithday is lucky!!!🤩";
        }else{
            outputMessage.innerText = "Sorry your birthday is not lucky😐";
        }
    }else{
        outputMessage.innerText = "Please enter both the fields";
    }   
};

button.addEventListener("click", clickHandler);
