
function validateForm() {
    var x = document.forms["login-form"]["username"].value;
    var y = document.forms["login-form"]["password"].value;
    if (x == "") {
        alert("username must be filled out");
        return false;
    }
    if (y == "") {
        alert("password must be filled out");
        return false;
    }
    if (x !== "test" && y !== "test") { 
        return false;
    }
}

// $('.message a').click(function(){
//    $('.login-form').animate({height: "toggle", opacity: "toggle"}, "slow"); 
// });
