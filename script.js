
function validation(){
    if(document.Formfill.username.value==""){
        document.getElementById("result").innerHTML="Enter Full Name*";
        return false;
    }
    else if(document.Formfill.username.value.length<8){
        document.getElementById("result").innerHTML="Username must contain atleast 8 characters*";
        return false;
    }
    else if(document.Formfill.email.value==""){
        document.getElementById("result").innerHTML="Enter your email*";
        return false;
    }
    else if(document.Formfill.phoneNumber.value==""){
        document.getElementById("result").innerHTML="Enter your phone number*";
        return false;
    }
    else if(document.Formfill.password.value==""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if(document.Formfill.password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits*";
        return false;
    }
    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password*";
        return false;
    }
    else if(document.Formfill.CPassword.value !== document.Formfill.password.value){
        document.getElementById("result").innerHTML="Password doesn't match*";
        return false;
    }
    else if(document.Formfill.password.value == document.Formfill.CPassword.value){
       popup.classList.add("open-popup");
        return false;
    }
    return true;

}

function changeIconColor(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (input.value !== '') {
        icon.style.color = 'gray';
    }
}
const inputFields = document.querySelectorAll('input');
inputFields.forEach(input => {
    input.addEventListener('input', function() {
        changeIconColor(input.id, input.id + 'Icon');
    });
});
let popup = document.getElementById("popup");
            function openPopup()
            {
                popup.classList.add("open-popup");
            }
            function closePopup() {
                popup.classList.remove("open-popup");
            }
