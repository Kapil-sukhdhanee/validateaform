function giveError(id,error){
    let element = document.getElementById(id);
    element.getElementsByClassName("error")[0].innerText = error;
}

function clearError(id){
    clrError = document.getElementById(id);
    clrError.innerText = '';

    

    
}

function nameValidation(){
    let myVerification = true;
    clearError("nameError");
    //perform validation for name and if validation fails, set the value of myVerification to false
    let fstName = document.forms["myForm"]["fName"].value;
    console.log(typeof(fstName))
    let lstName = document.forms["myForm"]["lName"].value;
    let inv = ['!','@','#','$','^','&','*','(',')','_','-','=','+','{','}','[',']',"'",';',':',',','<','/','?','1','2','3','4','5','6','7','7','9','0']
    let invalidChar = true;
    for (let i =0;i<inv.length;i++){
        if ((fstName.includes(inv[i]))){
            invalidChar = true;
            break;
        }
        else{
            invalidChar = false;
        }
    }
    if (fstName.length<3 || invalidChar==true ){
        giveError("name","Invalid  Name");
        myVerification = false;
    }
    for (let i =0;i<inv.length;i++){
        if ((lstName.includes(inv[i]))){
            invalidChar = true;
            break;
        }
        else{
            invalidChar = false;
        }
    }
    
    if ((lstName.length>=1 & lstName.length<3)|| invalidChar==true){
        giveError("name","Invalid  Name");
        myVerification = false;
    }
    return myVerification;    
}

// function for validation of email 
function emailValidation(){
    let myVerification = true;
    clearError("mailError");
    let mailId = document.forms["myForm"]["mailId"].value;
    if (mailId.slice(-4)!=".com"){
        document.getElementsByClassName("error")[1].setAttribute("style","color:red;")
        giveError("Email","Please enter a valid Email id")
        myVerification = false
    }else if(mailId.length!=0){
        giveError("Email","Valid Email")
        document.getElementsByClassName("error")[1].setAttribute("style","color:green;")

    }
    
    return myVerification;
}


function formatPhoneNumber(value){
    if (!value) return value;

    let phoneNumber = value.replace(/[^\d]/g, '');
    let phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength < 4){ 
        return phoneNumber;
    }

    if (phoneNumberLength < 7){
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 9)}`;
}

function phoneNumberFormatter() {
    let inputField = document.getElementById('phone-number');
    let formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}

function operatorValidation(){
    // to validate weather first three letters entered by user belogs to given operator's range or not
    let myVerification = true;
    let inputField = document.getElementById('phone-number').value;
    console.log(inputField.slice(1,4));
    // to set operators logo
    if ((inputField.slice(1,4)>620)&(inputField.slice(1,4)<800)){
       let img = document.getElementById("logo");
       img.setAttribute("src",("logo/jio.webp"))
       let warning = document.getElementById("warning");
        warning.innerText = "";
    }
    else if ((inputField.slice(1,4)>800)&(inputField.slice(1,4)<921)){
        let img = document.getElementById("logo");
        img.setAttribute("src",("logo/idea.jpg"));
        let warning = document.getElementById("warning");
        warning.innerText = "";
    }
    else if((inputField.slice(1,4)>920)&(inputField.slice(1,4)<1000)){
        let img = document.getElementById("logo");
        img.setAttribute("src",("logo/vodafone.png"));
        let warning = document.getElementById("warning");
        warning.innerText = "";
    }
    else{
        if((inputField.length>5)){
        
            let img = document.getElementById("logo");
            img.setAttribute("src",(""));
            let warning = document.getElementById("warning");
            warning.innerText = "*INVALID OPERATOR";
            myVerification = false;
        }

    }

    
    return myVerification;
}

function stateValidation(){
    // validation of state code i.e the next three numbers after oprator's code as per refrence of below object 
    let myVerification = true;
    let states ={
        0 : ["510",",Andhra Pradesh"],
        1 : ["515",",Arunachal Pradesh"],
        2 : ["520",",Assam"],
        3 : ["525",",Bihar"],
        4 : ["530",",Chhattisghar"],
        5 : ["535",",Goa"],
        6 : ["540",",Gujrat"],
        7 : ["545",",Haryana"],
        8 :[ "550",",Himachal Pradesh"],
        9 : ["555",",Jarkhand"],
        10 : ["610",",Karnataka"],
        11 :[ "615",",Kerala"],
        12 : ["620",",Madhya Pradesh"],
        13 : ["625",",Mhaharashtra"],
        14 : ["630",",Manipur"],
        15 : ["635",",Meghayala"],
        16 : ["640",",Mizoram"],
        17 : ["645",",Nagaland"],
        18 : ["650",",Odisha"],
        19 : ["655",",Punjab"],
        20 : ["710",",Rajasthan"],
        21 : ["715",",Sikkim"],
        22 : ["720",",Tamil Nadu"],
        23 : ["725",",Telangana"],
        24 : ["730",",Tripura"],
        25 : ["735",",Uttar Pradehsh"],
        26 : ["740",",Uttarakhand"],
        27 : ["745",",West Bengal"],
        28 : ["750",",Andaman and Nicobar"],
        29 : ["755",",Chandigarh"],
        30 : ["810",",Dadra and Nagar Haveli"],
        31 : ["815",",Delhi"],
        32 : ["820",",Jammu And Kashmir"],
        33 : ["825",",Ladalh"],
        34 : ["830",",Lakshadweep"],
        35 : ["835",",Puducherry"]

    }

    let inputField = document.getElementById('phone-number').value;
    // console.log(inputField.slice(6,9))
    let verif = true;
    let index = 0;
    // to check wether the number entered by user is valid state code or not, if yes it return true
    for ( let i =0; i<36;i++){
        if((inputField.slice(6,9)==states[i][0])){
            verif = true;
            index = i;
            break;
        }
        else{
            verif = false;
        }
    }

    if(verif==true){
        let state = document.getElementById('state');
        state.innerText = `${states[index][1]}`;
        state.setAttribute("style","color:white;")

    }
    else if ((verif==false)&(inputField.length>9)){
        let state = document.getElementById('state');
        state.innerText = "*INVALID STATE CODE"
        state.setAttribute("style","color:red;")
        myVerification = false;

    }     
    return myVerification;
}


function settingLocalStorage(){
    let fstName = document.forms["myForm"]["fName"].value;
    localStorage.setItem('name',fstName);
    console.log(fstName);
    
    let inputField = document.getElementById('phone-number').value;
    localStorage.setItem('number',inputField);
    
}

// adding length condition to phone number so that user should not enter last four degits less than four
function phLen(){
    let myVerification = true;
    let inputField = document.getElementById('phone-number').value;
    if (inputField.length<14){
        let warning = document.getElementById("warning");
        warning.innerText = "*INVALID NUMBER";
        myVerification = false;
    }

    return myVerification;
}
