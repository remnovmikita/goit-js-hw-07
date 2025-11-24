
const mainForm = document.querySelector(".login-form");

mainForm.addEventListener("submit", succes);

function succes(event){
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.trim() === "" || password.trim() === ""){
        return alert('All form fields must be filled in');
    }
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
}



