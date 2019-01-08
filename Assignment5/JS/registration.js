//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////          PASSWORD VALIDATION          ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function password1Validation (id,errorId) {
    var result = true;
    var message = "";
    var haveInt = false;
    var haveUpper = false;

    if (id.value.trim().length == 0){
        
        message = "Password is Required";
        id.focus();
        id.select();  
        result = false;
    }
    else if (id.value.trim().length < 8) {  
        message = "Password Should be 8 Charecters or more";
        id.focus();
        id.select();  
        result = false;
    }
    else if ( !(id.value.trim().toUpperCase()[0] >= "A" && id.value.trim().toUpperCase()[0] <= "Z" )) {
        message = "Password must start with a letter" ;
        id.focus();
        id.select();  
        result = false;
    }
    else {
        for (var i = 0; i < id.value.trim().length; i++){
            if (id.value.trim()[i] >= 0 && id.value.trim()[i] <= 9 ){
                haveInt = true;
            }
            if (id.value.trim()[i] >= "A" && id.value.trim()[i] <= "Z" ){
                haveUpper = true;
            }
        }
        if ( ! (haveInt) ){
            message = "Password should have at least 1 digit";
            id.focus();
            id.select();  
            result = false;
        }
        else if ( ! (haveUpper) ){
            message = "Password should have at least 1 uppercase letter";
            id.focus();
            id.select();  
            result = false;
        }
    }
    if (result == true){
        errorId.removeChild(errorId.childNodes[0]);
        errorId.innerHTML = '<img src="img/checkMark.png" alt="logo" height="15px" width="15px"/>'
    }else {
        errorId.removeChild(errorId.childNodes[0]);
        errorId.innerHTML = '<img src="img/xMark.png" alt="logo" height="15px" width="15px"/>';
        var text = document.createElement("p");
        text.textContent = message
        errorId.appendChild(text);
    }
    return result;
} 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////          PASSWORD VALIDATION 2        ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function password2Validation (id, errorId,password1) {
    var result = true;
    var message = "";

    if (id.value.trim().length != password1.value.trim().length){
        message = "Passwords do not Match";
        id.focus();
        id.select();  
        result = false;
    }
    else {
        for (var i = 0; i < id.value.trim().length; i++){
            if (id.value.trim()[i] != password1.value.trim()[i] ){
                message = "Passwords do not Match";
                id.focus();
                id.select();  
                result = false;
            }
        }
    }
    if (result == true){
        errorId.removeChild(errorId.childNodes[0]);
        errorId.innerHTML = '<img src="img/checkMark.png" alt="logo" height="15px" width="15px"/>'
    }else {
        errorId.removeChild(errorId.childNodes[0]);
        errorId.innerHTML = '<img src="img/xMark.png" alt="logo" height="15px" width="15px"/>'
        var text = document.createElement("p");
        text.textContent = message
        errorId.appendChild(text); 
    }
    return result;
} 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////          USERNAME VALIDATION          ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function userNameValidation (id,errorId) {
    var result = true;
    var message = "";

    if (id.value.trim().length == 0){
        message = "Username is Required";
        id.focus();
        id.select();
        result = false;
    }
    else if (id.value.trim().length < 6){
        message = "Username must be 6 characters or more";
        id.focus();
        id.select();
        result = false;
    }
    else if (( id.value.trim().toUpperCase()[0] ) < "A" || (id.value.trim().toUpperCase()[0] ) > "Z"){
        message = "Username must start with a letter";
        id.focus();
        id.select();
        result = false;
    }
    if (result == true){
        errorId.removeChild(errorId.childNodes[0])
        errorId.innerHTML = '<img src="img/checkMark.png" alt="logo" height="15px" width="15px"/>'
    }else {
        errorId.removeChild(errorId.childNodes[0])
        errorId.innerHTML = '<img src="img/xMark.png" alt="logo" height="15px" width="15px"/>'
        var text = document.createElement("p");
        text.textContent = message
        errorId.appendChild(text);    
    }
    return result;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////          PHONE NUMBER VALIDATION          ///////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function phoneValidation(id,errorId) {
    var result = true;
    var message = "";

    if (id.value.trim().length == 0) {
        message = "Phone number is required";
        id.focus();
        id.select();  
        result = false;
    }
    /*
    else if (trimmedPhoneNumber.match(/^([0-9]{3}[-]){2}[0-9]{4}$/)){
        result = true;
    }
    */
    else if (id.value.trim().match(/^[0-9]{10}$/)){
        result = true;
    }
    else{
        message = "Please enter 10 digit phone number";
        id.focus();
        id.select();  
        result = false;
    }
    if (result == true){
        errorId.removeChild(errorId.childNodes[0])
        errorId.innerHTML = '<img src="img/checkMark.png" alt="logo" height="15px" width="15px"/>'
    }else {
        errorId.removeChild(errorId.childNodes[0])
        errorId.innerHTML = '<img src="img/xMark.png" alt="logo" height="15px" width="15px"/>'
        var text = document.createElement("p");
        text.textContent = message
        errorId.appendChild(text); 
    }
    return result;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////          POSTAL CODE VALIDATION           ///////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function postCodeValidation(id,errorId) {
    var result = true;
    var message = "";
  
    if (id.value.trim().length == 0) {
        id.focus();
        id.select();  
        result = false;
    }
    else if (id.value.trim().match(/^([a-zA-z][0-9]){3}$/)){
        result = true
    }
    else{
        message = "postal code format A1A1A1";
        id.focus();
        id.select();  
        result = false;
    }
    if (result == true){
        errorId.removeChild(errorId.childNodes[0])
        errorId.innerHTML = '<img src="img/checkMark.png" alt="logo" height="15px" width="15px"/>'
    }else {
        errorId.removeChild(errorId.childNodes[0])
        errorId.innerHTML = '<img src="img/xMark.png" alt="logo" height="15px" width="15px"/>'
        var text = document.createElement("p");
        text.textContent = message
        errorId.appendChild(text); 
    }
    return result;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////          TEXT VALIDATION           //////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function textValidation(id,errorId){
    var result = false;
    var message = "";

    if (id.value.trim().length == 0) {
        message = "Required feild";
        id.focus();
        id.select();  
        result = false;
    }
    else{
        for (var i = 0; i < id.value.trim().length; i++){
            if(id.value.trim().toUpperCase()[i] <= "Z" && id.value.trim().toUpperCase()[i] >= "A" || id.value.trim().toUpperCase()[i]== " "){
                result = true;
            }else {
                message = "Letters only";
                id.focus();
                id.select();
                result = false;
            }
        }
    }
    if (result == true){
        errorId.removeChild(errorId.childNodes[0])
        errorId.innerHTML = '<img src="img/checkMark.png" alt="logo" height="15px" width="15px"/>'
    }else {
        errorId.removeChild(errorId.childNodes[0])
        errorId.innerHTML = '<img src="img/xMark.png" alt="logo" height="15px" width="15px"/>'
        var text = document.createElement("p");
        text.textContent = message
        errorId.appendChild(text); 
    }
    return result;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////          NUMBER VALIDATION          /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function numberValidation (id, errorId){
    var result = true;
    var message = "";

    if (id.value.trim().length == 0) {
        message = "Required Feild";
        id.focus();
        id.select();  
        result = false;
    }
    if (result == true){
        errorId.removeChild(errorId.childNodes[0])
        errorId.innerHTML = '<img src="img/checkMark.png" alt="logo" height="15px" width="15px"/>'
    }else {
        errorId.removeChild(errorId.childNodes[0])
        errorId.innerHTML = '<img src="img/xMark.png" alt="logo" height="15px" width="15px"/>'
        var text = document.createElement("p");
        text.textContent = message
        errorId.appendChild(text);
    }
    return result;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////          FORM VALIDATION            /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formValidation(){
    var result;

    result = textValidation(firstName,fName);
    result = textValidation(middleName,mName) && result;
    result = textValidation(sirName,lName) && result;
    result = numberValidation(unitNum,unitNumber) && result;
    result = numberValidation(StreetNum,stNumber) && result;
    result = textValidation(streetName,stName) && result;
    result = textValidation(city,cityName) && result;
    result = postCodeValidation(postCode,pCode) && result;
    result = phoneValidation(phoneNumber,phoNumber) && result;
    result = userNameValidation(userName,uName) && result;
    result = password1Validation(password1,pWord) && result;
    result = password2Validation(password2,pWordC,password1) && result;
    if (result == false){
        alert("Submission Failed")
    }
    else {
        alert("Submission was Successful")
    }
    return result;
}
