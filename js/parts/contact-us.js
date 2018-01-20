let email = $('.contact-us-form #email');


$(email).focusout(function (e) {
    $(email).focus().css("outline","-webkit-focus-ring-color auto 5px;");

})
$(email).focusin(function (e) {
    $(email).keyup(function(e){
        if( !validateEmail(e.currentTarget.value)) {
            $(this).focus().css("outline","1px solid red");
        }
        if( validateEmail(e.currentTarget.value)){
            $(this).focus().css("outline","1px solid lime");
        }

    })

})



function validateEmail(_email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( _email );
}

