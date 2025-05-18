fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    if (response.status != 200)
    {
        throw new Error("Eroare la conectare");
    }
    return response.json()
})

.then(data => {
    console.log(data)
    let tbody = document.getElementById("tabel-body");
    data.forEach(user => {
        let content = `<tr>
        <td data-name='${user.name}'>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.company.name}</td>
        </tr>`

        tbody.innerHTML += content
    })
})
.catch(error => {
    console.log("A aparut o eroare", error)
})



const table = document.getElementById("table");