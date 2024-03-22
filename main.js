let userEmail = document.getElementById("email")
let error =  document.getElementById("error")
let closeBtn = document.querySelector(".close-btn") 
let notValid = document.querySelector(".not-valid")
let valid = document.querySelector(".valid")
let overlayWindow = document.querySelector(".window")
let overlay = document.querySelector(".overlay")
let submitBtn = document.querySelector(".submit-btn")
let emailName = document.querySelector(".emailName")
let storageEmail = document.getElementById("storage-email")
let joinBtn = document.querySelector(".join-btn")
let clearStorage = document.querySelector(".storage-btn")
let subText = document.querySelector(".sub-text")



// overlay events
document.querySelector(".join-btn").addEventListener("click",function(){
    document.querySelector(".window").style.display =  "none"
    document.querySelector(".close-overlay").style.display = "block"
})

document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".close-overlay").style.display = "none"
})


// email validation
joinBtn.addEventListener("click",function(){
    if(userEmail.checkValidity()){
        valid.innerHTML = "Email is valid,thanks for subscribing"
    }
    
    else if(error !== userEmail.checkValidity()) {
        console.log("email is not valid")
        notValid.innerHTML = "Email is not valid try again!"
        closeBtn.innerHTML = "error!" 
        window.location.reload(true)          
    }
}) 
    
// email bar storage
submitBtn.addEventListener("click",function(){
    const emailInput = document.querySelector(".email-bar").value
    emailName.textContent = emailInput
    sessionStorage.setItem("email-bar",emailInput)
})

function displayUserEmail(){
    const emailSessionStorage = sessionStorage.getItem("email-bar")
    if(emailSessionStorage){
        storageEmail.innerHTML = `saved: ${emailSessionStorage}`
        storageEmail.style.borderBottom = "thin solid #f29999"
    }
    else {
        emailName.innerHTML = "No email saved in session storage"
    }
}
displayUserEmail()

clearStorage.addEventListener("click",function(){
    if(storageEmail){
        sessionStorage.clear()
        storageEmail.innerHTML = "email storage cleared"
        storageEmail.style.borderBottom = "thin solid #f29999"
    }
})













    
    



    

       
