/////////////
// log in //
///////////

var submitBtn = document.getElementById("submitBtn");

// form submit event
submitBtn.addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // sedc and sedc2019 requires
    if (username == "sedc" && password == "sedc2019") {
        location.href = 'manage.html';
    }

    else {
        if (username == "" || password == "") {
            document.getElementById("invalidText").innerText = `Please Enter Username and Password.`;
            document.getElementById("invalidText").style = "color:red; margin: 12px 0;";
        }
        else {
            document.getElementById("invalidText").innerText = `Invalid Username or Password. Try Again.`;
            document.getElementById("invalidText").style = "color:red; margin: 12px 0;";
            clearForm();
        }
    }
});

// clear form
function clearForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
