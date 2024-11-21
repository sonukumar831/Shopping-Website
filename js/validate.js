// Login Form Validation

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function emailvalidation(email,emailIcon){
    if(email.value.match(emailPattern)){ 
        
        if(emailIcon.classList.contains("fa-circle-xmark")) {
            emailIcon.classList.replace("fa-circle-xmark","fa-circle-check");
            emailIcon.style.color= "green";
        }
        if(emailIcon.classList.contains("fa-envelope")) { 
            emailIcon.classList.replace("fa-envelope","fa-circle-check");
            emailIcon.style.color= "green";
        }  
        email.style.border = "2px solid green";
    }
    else{ 
        if(emailIcon.classList.contains("fa-envelope")) {
            emailIcon.classList.replace("fa-envelope","fa-circle-xmark");
            emailIcon.style.color= "red";
        }
        if(emailIcon.classList.contains("fa-circle-check")) { 
            emailIcon.classList.replace("fa-circle-check","fa-circle-xmark");
            emailIcon.style.color= "red";
        }  
        email.style.border = " solid 2px red";
    }
    if(email.value === ""){
        emailIcon.classList.replace("fa-circle-xmark","fa-envelope");
        emailIcon.style.color="#a0a4ac";
        email.style.border= "2px solid #cacaca";
    }
};

let loginFormEmail = document.getElementById("login-email-input");
let loginFormEmailIcon = document.getElementById("login-email-icon");

let signupFormEmail = document.getElementById("signup-email-input");
let signupFormEmailIcon = document.getElementById("signup-email-icon");

loginFormEmail.addEventListener("keyup", () => {
    emailvalidation(loginFormEmail,loginFormEmailIcon);
});

signupFormEmail.addEventListener("keyup", () => {
    emailvalidation(signupFormEmail,signupFormEmailIcon);
});

//password matching for signup form
let signupPass = document.getElementById("signup-password-input");
let signupCPass = document.getElementById("signup-cpassword-input");

signupCPass.addEventListener("keyup", ()=>{
    if(signupCPass.value==signupPass.value){
        signupCPass.style.border = "2px solid green";
    }
    else{
        signupCPass.style.border = "2px solid red";
    }
    if(signupCPass.value==""){
        signupCPass.style.border = "2px solid #cacaca";
    }
});

//form validation at the time of submit

let loginForm = document.getElementById("login-form");
let loginPass = document.getElementById("login-password-input");

loginForm.onsubmit = ()=>{

    if(loginFormEmailIcon.classList.contains("fa-circle-check") && loginPass.value!=""){
        return true;
    }
    else{
        if(loginFormEmail.value=="" || loginFormEmailIcon.classList.contains("fa-circle-xmark")){
            loginFormEmail.style.border="2px solid red";
        }
        if(loginPass.value==""){
            loginPass.style.border="2px solid red";
        }
        return false;
    }
};


let signupForm = document.getElementById("signup-form");
let userName = document.getElementById("signup-username-input");

signupForm.onsubmit = () => {
    if(signupFormEmailIcon.classList.contains("fa-circle-check") && signupCPass.value!=""&& signupCPass.value==signupPass.value && userName!="" ){
        return true;
    }
    else{
        if(signupFormEmail.value=="" || signupFormEmailIcon.classList.contains("fa-circle-xmark")){
            signupFormEmail.style.border="2px solid red";
        }
        if(signupPass.value==""){
            signupPass.style.border="2px solid red";
        }
        if(signupCPass.value=="" ){
            signupCPass.style.border="2px solid red";
        }
        if(userName.value==""){
            userName.style.border="2px solid red";
        }
        return false;
    }
};

loginPass.addEventListener("keyup" , ()=>{
    loginPass.style.border="2px solid #cacaca"
});

signupPass.addEventListener("keyup" , ()=>{
    signupPass.style.border="2px solid #cacaca"
});

userName.addEventListener("keyup" , ()=>{
    userName.style.border="2px solid #cacaca"
});

// Review Stars 
const allStar = document.querySelectorAll('#product-star-rating .fa-star');
const ratingValue = document.querySelector('#product-star-rating input');

const userRating = document.getElementById('user-rating');

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0;
		ratingValue.value = idx + 1;

		allStar.forEach(i=> {
			i.classList.replace('fa-solid', 'fa-regular');
		});
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('fa-regular', 'fa-solid');
			} else {
				allStar[i].style.setProperty('--i', click);
				click++;
			}
		}
        userRating.value = 5 - click;
	});
});

// Product Rating Form Validation

// let userReview = document.getElementById('review-form');

// let userReviewComment = document.getElementById('product-review-comment');

// userReview.onsubmit = () => {
//     if ( (userRating >=1 || userRating <=5) && userReviewComment !== "") {
//         return true;
//     } 
// };



