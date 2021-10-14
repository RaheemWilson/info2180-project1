/* Add your JavaScript to this file */


window.addEventListener("load", () => {
    let form = document.getElementsByTagName("FORM")[0]
    let emailField = document.getElementById("email")
    let message = document.getElementsByClassName("message")[0]
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        if(emailField.value == ""){
            message.innerHTML = "Please enter valid email address"
        }else{
            message.innerHTML = `Thank you! Your email address ${emailField.value} has been added to our mailing list!`
        }
    })
})
