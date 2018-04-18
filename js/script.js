var invalid = document.getElementById('invalid-email');

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return (true)
    } else {
        return (false)
    }
}
function addClass() {
    if (!validateEmail()){
        invalid.className += "invalid"
    }    
}
