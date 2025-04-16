function togglepassword() {
    let passwordfield = document.getElementById("createpassword");
    let eyeicon = document.getElementById("createeyeicon");

    if (passwordfield.type === "password") {
        passwordfield.type = "text";
        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye");
    }
    else {
        passwordfield.type = "password";
        eyeicon.classList.remove("fa-eye");
        eyeicon.classList.add("fa-eye-slash");
    }
}
function togglepassword2() {
    let passwordfield = document.getElementById("confirmpassword");
    let eyeicon = document.getElementById("confirmeyeicon");

    if (passwordfield.type === "password") {
        passwordfield.type = "text";
        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye");
    }
    else {
        passwordfield.type = "password";
        eyeicon.classList.remove("fa-eye");
        eyeicon.classList.add("fa-eye-slash");
    }
}