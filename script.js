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
  name.style.boxShadow = "0 0 5px rgba(255, 0, 0, 1)",
  "0 0 30px rgba(255, 0, 0, 0.15)";
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
 
 form.addEventListener("submit", (e) => {
   e.preventDefault();

const isName = nameValidation();
const isEmail = emailValidation();
const isSubject = subjectValidation();
const isTextarea = textareaValidation();

if(isName && isNmail && isSubject && isTextarea){
  alert("Message Sent!!!!!");
  form.reset();
} 


 });
 
   
   
   