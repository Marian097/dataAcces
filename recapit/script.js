const form = document.getElementById("contactForm");
const inputName = document.getElementById("nume");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("mesaj");
const Status = document.getElementById("status");
const span = document.querySelectorAll(".eroare");

form.addEventListener("submit", function(e){
    e.preventDefault();
    Status.textContent="";
    span.forEach(el => el.textContent="");

    let valid = true;

    if (inputName.value.trim().length < 3 )
    {
        inputName.parentElement.querySelector(".eroare").textContent = "Min 3 characters"
        valid = false;
    }

    if (!inputEmail.value.trim().includes("@") || !inputEmail.value.trim().includes("@"))
    {
        inputEmail.parentElement.querySelector(".eroare").textContent = "Campul trebuie sa contina @ si .";
        valid = false
    }

    if (inputMessage.value.trim() === "")
    {
        inputMessage.parentElement.querySelector(".eroare").textContent = "Campul trebuie completat."
        valid = false
    }

    if (valid)
    {
        Status.textContent = "Trimis cu succes"
        Status.style.color = "green"
    }
    else
    {
        Status.textContent = "Te rog mai incearca"
        Status.style.color = "red"
    }
})
