const nav = document.getElementById("nav");
const btnOpen = document.getElementById("icon");

const btnClose = document.getElementById("close-btn");

const btn = document.getElementById("btn-toggle");

const form = document.getElementById("MyForm");
       
 const name = document.getElementById("name");

const email = document.getElementById("email");

const subject = document.getElementById("subject");
const textarea = document.getElementById("textarea");

const btnSend = document.getElementById("btn-send");

const errorName = document.getElementById("errorname");

const errorEmail = document.getElementById("erroremail");

const errorSubject = document.getElementById("errorsubject");

const errorTextarea = document.getElementById("errortextarea");

const moreToggle = document.getElementById("more-toggle");

const btnMore = document.getElementById("btn-more");

const toastSuccess = document.getElementById("toast1");
   
const toastError = document.getElementById("toast3"); 


       
btnOpen.addEventListener("click", () =>{
 
 nav.classList.add("show"); 
});

btnClose.addEventListener("click", () =>{
   nav.classList.remove("show");
  });
  
/*----------Form Toggle--------------*/

btn.addEventListener("click", () => {
  form.classList.toggle("active");
  } );
  

/*-------name validation---------*/

function nameValidation() { const nameValue = name.value.trim();
if(!nameValue){
  name.style.border = "1px solid red";
  name.style.background = "rgba(255, 0, 0, 0.15)";
  errorName.textContent = "Name is required";
  return false;
} else {name.style.border = "";
        name.style.background = "";
        errorName.textContent = "";
  return true;
      }
}

name.addEventListener("input", nameValidation);
       
 /*-----------email Validation--------*/
 
 function emailValidation(){
  const emailValue = email.value.trim();
  
  if(!emailValue){
    email.style.border = "1px solid red"
    email.style.background = "rgba(255, 0, 0, 0.15)";
 errorEmail.textContent = "Email is required";
    
    return false;
  } else if(!emailValue.includes("@") || !emailValue.includes(".")){
    email.style.border ="1px solid red";
    email.style.background = "rgba(255, 0, 0, 0.15)";
errorEmail.textContent = "Invalid email";
    return false;
  } else { email.style.border = "";
           email.style.background = "";
  errorEmail.textContent = "";
      return true;
  }
 }

email.addEventListener("input", emailValidation);


/*-------------subject-validation-------*/

function subjectValidation(){
  
  const subjectValue = subject.value.trim();
  
  if(!subjectValue){
  subject.style.border = "1px solid red";
  subject.style.background = "rgba(255, 0, 0, 0.15)";
errorSubject.textContent = "Subject is required";
  return false;
  } else { subject.style.border = "";
       subject.style.background = "";
errorSubject.textContent = "";
       return true;
  }
}

subject.addEventListener("input", subjectValidation);
 
 /*-----------textarea-validation--------*/
 
 function textareaValidation(){
   
   const textareaValue = textarea.value.trim();
   
   if(!textareaValue){
textarea.style.border = "1px solid red";
textarea.style.background = "rgba(255, 0, 0, 0.15)";
errorTextarea.textContent = "Message is required";
  return false;
} else { textarea.style.border = "";
      textarea.style.background = "";
errorTextarea.textContent = "";
  return true;
}
 }
 
textarea.addEventListener("input", textareaValidation);
 
 /*-----final Validation--------*/
 
 form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const isName = nameValidation();
    const isEmail = emailValidation();
    const isSubject = subjectValidation();
    const isTextarea = textareaValidation();

    if (isName && isEmail && isSubject && isTextarea) {
      
  const spin = document.getElementById("spin");
const spanSend = document.getElementById("span-send");
 
 spanSend.style.display = "none";     
btnSend.disabled = true;
 spin.classList.add("active");
        try {

            const response = await fetch(
                "https://edtech-backend-7.onrender.com/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name.value,
                        email: email.value,
                        subject: subject.value,
                        message: textarea.value
                    })
                }
            );

          const data = await response.json();

console.log(data.message);

 if (response.ok) {
   
   btnSend.disabled = false;
btnSend.textContent = "Send";
spin.classList.remove("active");

toastSuccess.classList.add("show");
  setTimeout(() => {
    
  toastSuccess.classList.remove("show");
    
  },6000);
                form.reset();

            } else {

            console.log(data.message);

            }

        } catch (error) {
btnSend.disabled = false;
btnSend.textContent = "Send";
 toastError.classList.add("show");
spin.classList.remove("active");
 setTimeout(() => {
   toastError.classList.remove("show")
 },6000);

        }

    }

});
 
 /*--------show more -------*/
 
btnMore.addEventListener("click", () => {
 
moreToggle.classList.toggle("open");
  
});

/*--------Pre Loader-----------*/
const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {

    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

});


 
   
   
   