function clearerror() {
    var error = document.getElementsByClassName('value');
    for (let item of error) {
        item.innerHTML = "";
    }

}

function validation() {
    clearerror();
    var user = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var gender = document.getElementsByName('gender');


    if (user == "") {
        document.getElementById('username').innerHTML = "**Please Fill Username!!";
        return false;
    }

    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById('username').innerHTML = "**User Length Must Be Between 2 To 20!!";
        return false;
    }

    if (!isNaN(user)) {
        document.getElementById('username').innerHTML = "**Only Chracters Are Allowed!!";
        return false;
    }


    if (password == "") {

        document.getElementById('pass').innerHTML = "**Please Fill  Password!!";
        value = false;
    }

    if (state == "") {
        document.getElementById('istate').innerHTML = "**Please Fill State!!";
        return false;
    }

    if (city == "") {
        document.getElementById('icity').innerHTML = "**Please Fill City!!";
        return false;
    }

    if (email == "") {
        document.getElementById('email').innerHTML = "**Please Fill Email!!";
        return false;
    }

    if (email.indexOf('@') <= 0) {
        document.getElementById('mail').innerHTML = "**Invalid Position Of @!!";
        return false;
    }


    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('mail').innerHTML = "**Please Fill Valid Email!!";
        return false;
    }

    if ((gender[0].checked == false) && (gender[1].checked == false)) {
        document.getElementById('gen').innerHTML = "**please select gender";
        return false;
    }

    return true;
}