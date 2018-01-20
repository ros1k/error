let email = $('.contact-us-form #email');



    $(email).keyup(function(e){
        if( !ValidateEmail(e.currentTarget.value)) {
            $(this).focus().css("outline","1px solid red");
        }
        if( ValidateEmail(e.currentTarget.value)){
            $(this).focus().css("outline","1px solid lime");
        }

    })






function ValidateEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    return (false)
}