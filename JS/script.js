    const email = document.getElementById('email')
    const span = document.getElementsByClassName('span-error')[0]
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const form = document.getElementsByTagName('form')[0];
    
    form.addEventListener('submit', (event)=>{
        event.preventDefault
        validate_email()
    })
    
    function error(){
        span.style.display = "block";
        span.style.color = "red";
        email.style.border = "1px red solid";
        email.style.background = "rgba(255, 0, 0, 0.19)";
       
    }
    
    function remove_error(){
        span.style.display = "none"
        span.style.color = "";
        email.style.border = "";
        email.style.background = "";
    }
    
    
    
    function validate_email(){
        if(!emailRegex.test(email.value)){
           email.placeholder = "ash#loremcompany.com";
           email.classList.add = "email_error";
         error()
    
        } else{
           
         remove_error()
         email.classList.remove = "email_error";
        }
    }


