const input = document.getElementById("searchInput");
const list = document.querySelectorAll("ul li");

input.addEventListener("input", function(){
    let searchProduct = input.value;
    list.forEach(element => {
        let name = element.textContent.toLocaleLowerCase();
        if (!name.includes(searchProduct))
        {
            element.style.display = "none"
        }
        else{
            element.style.display = "list-item"
        }
    })

})