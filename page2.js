// dynamically populating the div into html 
let greet = document.createElement('div');
greet.setAttribute("class","greetTxt")
greet.innerText = `Dear ${localStorage.getItem("name")},\n Thank you for inquiry. A 4 digit verification number has been sent to your phone number: ${localStorage.getItem("number")}, please enter in the  following box and submit for confirmation:`
let thankUMsg = document.querySelector("div.a2container")
let mainFrm = document.getElementById("mainfrm")
thankUMsg.insertBefore(greet,mainFrm)

generateRandomNo()
function generateRandomNo(){
    randNo = Math.floor(Math.random()*10000)
    if (randNo>1000){
        console.log(randNo)
    }
    else{
        generateRandomNo();
    }
}

let attempts = 0
function verifyOtp(){
    let otpverif = true;
    let optVal = document.forms["form2"]["otp"].value;
    let maxAttempts = 3
    // 
    if(optVal==randNo){
        let invalidOtp = document.getElementById("invalidOtp");
        invalidOtp.innerText=`Validation Succesful!`;
        invalidOtp.setAttribute("style","color:green")
    }
    else{
        console.clear()
        generateRandomNo()
        attempts++;
        otpverif = false;
        let invalidOtp = document.getElementById("invalidOtp");
        invalidOtp.innerText=`Invalid OTP, remaining attemts ${maxAttempts-attempts}`
        let otpid = document.getElementById('otpid')
        otpid.setAttribute("placeholder","Enter Again")

    }

    if(attempts==maxAttempts){
        let chngAction = document.getElementById("mainfrm")
        chngAction.setAttribute("action","http://pixel6.co/404/");
        otpverif = true;
            
    }
    return otpverif
    
    
}
