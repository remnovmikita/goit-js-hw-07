
const mainForm = document.querySelector(".login-form");

const btn = document.querySelector(".login-form button")
mainForm.addEventListener("submit", succes);

function succes(event){
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.trim() === "" || password.trim() === ""){
        btn.style.background = "red";
        return alert('All form fields must be filled in');
    }
        btn.style.background = "#4e75ff";
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
}



