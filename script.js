document.addEventListener('DOMContentLoaded', function () {
    var email1 = document.getElementById('email1');
    var emailConfirm = document.getElementById('emailConfirm');

    function checkEmail() {
        
        if (email1.value !== emailConfirm.value) {
            emailConfirm.setCustomValidity('Email addresses must match.');
            alert('Email addresses do not match. Please enter matching email addresses.');
        } else {
            emailConfirm.setCustomValidity('');            
            alert('Verification successful.');
        }
    }
    email1.addEventListener('change', checkEmail);
    emailConfirm.addEventListener('change', checkEmail);
});