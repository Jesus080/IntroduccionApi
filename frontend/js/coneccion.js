const contenedor = document.getElementById("root");



const obtenerDatos = async (url)=>{
    var respuestaDatosApi = await fetch(url);
    var datos = await respuestaDatosApi.text();

    const card = document.createElement("div")
    card.className = "card center"
    card.innerHTML = datos;

    contenedor.appendChild(card)
    
}
const obtenerDatosJson = async (url)=>{
    var respuestaDatosApi = await fetch(url);
    var datos = await respuestaDatosApi.json();

    const card = document.createElement("div")
    card.className = "card center"
    card.innerHTML = datos.mensaje;

    contenedor.appendChild(card)
    
}
const form = document.getElementById("form");
        const alertContainer = document.getElementById("alertContainer");

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const num1 = document.getElementById("num1").value;
            const num2 = document.getElementById("num2").value;

            try {
                const response = await fetch(`http://localhost:3000/suma/${num1}/${num2}`);
                if (!response.ok) {
                    throw new Error("Error en la petición HTTP");
                }
                showAlert("La suma es: " + (await response.text()), "alert-success");
            } catch (error) {
                showAlert("Error en la petición HTTP: " + error.message, "alert-danger");
            }
 });

        function showAlert(message, className) {
            const alert = document.createElement("div");
            alert.className = `alert ${className}`;
            alert.textContent = message;
            alertContainer.innerHTML = "";
            alertContainer.appendChild(alert);
}

obtenerDatos("http://localhost:3000");
obtenerDatos("http://localhost:3000/suma/1/2");
obtenerDatos("http://localhost:3000/json");
