let button = document.querySelector(".BTN");
let password = document.querySelector(".pswd");
let state = false;

button.addEventListener("click", function(event) {
    event.preventDefault();

    if(state == false)
    {
        state = true;
        password.setAttribute("type", "text");
    }
    else
    {
        state = false;
        password.setAttribute("type", "password");
    }
});