const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    let textInput = input.value;

    if (textInput.trim() !== "") {
        input.value = "";
        
        const listItem = document.createElement("li");
        const ListText = document.createElement("span");
        const deleteBtn = document.createElement("button");

        listItem.appendChild(ListText);
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = "Delete";
        ListText.textContent = textInput.trim();
        ul.appendChild(listItem);
        input.focus();
        deleteBtn.addEventListener("click", (e) => {
            listItem.remove();
            console.log("presionado")
            e.preventDefault()
        })
    }else{
        alert("Ingrese un producto valido");
        input.value = "";
        input.focus();
    }
    e.preventDefault();
});

