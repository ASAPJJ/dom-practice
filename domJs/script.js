const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const parrafo = document.createElement("p");
parrafo.classList.add("parrafo");
parrafo.textContent="¡Hola, soy rojo!"
parrafo.style.color="red"
container.appendChild(parrafo);

const minititulo = document.createElement("h3");
minititulo.classList.add("minititulo");
minititulo.textContent="¡Soy un h3 azul!";
minititulo.style.color="blue";
container.appendChild(minititulo);

const divRosa = document.createElement("div");
divRosa.classList.add("divRosa");
divRosa.style.border="1px solid black"
divRosa.style.backgroundColor="pink"


const th1 = document.createElement("h1");
th1.textContent="Estoy en un div"
divRosa.appendChild(th1)
const p2 = document.createElement("p");
p2.textContent="Yo tambien!"
divRosa.appendChild(p2);

container.appendChild(divRosa);

