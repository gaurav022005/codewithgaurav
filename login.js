function togglepassword() {
    let passwordfield = document.getElementById("password");
    let eyeicon = document.getElementById("eyeicon");

    if (passwordfield.type === "password") {
        passwordfield.type = "text";
        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye");
    }
    else{
        passwordfield.type = "password";
        eyeicon.classList.remove("fa-eye");
        eyeicon.classList.add("fa-eye-slash");
    }
}

