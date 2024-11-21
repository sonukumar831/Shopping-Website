
window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i=0 ; i<reveals.length ; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 110;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("animation-on-scroll");
        } else {
            reveals[i].classList.remove("animation-on-scroll");
        }
    }
});

// Password Show Hide

function toggleEyeIcon(password, EyeIcon) {
    if (password.type == "password") {
        password.type = "text";
        EyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        password.type = "password";
        EyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    }
}
let loginEyeIcon = document.getElementById('login-eye-icon');
let signupEyeIcon1 = document.getElementById('signup-eye-icon1');
let signupEyeIcon2 = document.getElementById('signup-eye-icon2');

let passwordLoginInput = document.getElementById('login-password-input');
let passwordSignupInput1 = document.getElementById('signup-password-input');
let passwordSignupInput2 = document.getElementById('signup-cpassword-input');

loginEyeIcon.addEventListener("click", () => {
    toggleEyeIcon(passwordLoginInput, loginEyeIcon);
});

signupEyeIcon1.addEventListener("click", () => {
    toggleEyeIcon(passwordSignupInput1, signupEyeIcon1);
})

signupEyeIcon2.addEventListener("click", () => {
    toggleEyeIcon(passwordSignupInput2, signupEyeIcon2);
});

// Login Signup

let signupButton = document.getElementById('toSignupPage');

let loginButton = document.getElementById('toLoginPage');

let loginform = document.getElementById('modal-login-form');

let signupform = document.getElementById('modal-signup-form');

signupButton.addEventListener("click", () => {
    loginform.style.display = "none";
    loginform.style.pointerEvents = "none";
    signupform.style.display = "flex";
    signupform.style.pointerEvents = "all";
});

loginButton.addEventListener("click", () => {
    signupform.style.display = "none";
    signupform.style.pointerEvents = "none";
    loginform.style.display = "flex";
    loginform.style.pointerEvents = "all";
});
