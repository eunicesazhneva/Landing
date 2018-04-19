var invalid = document.getElementById('invalid-email');
var email = document.getElementById('email');

function validateEmail(mail) {    
    var emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailValidationRegex.test(email.value)
}
function isEmpty(val) {    
    return (val.length === 0) 
}


function addClass() {
    if (!isEmpty(email.value) || !validateEmail(email.value)) {
        invalid.classList.toggle("invalid");
    } else {
        return (false)
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    if (n>slides.length){
        slideIndex = 1
    }   
    for (i=0; i <slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.display = "active";
}