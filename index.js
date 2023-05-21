function obtenerDatos(archivoJSON) {
    fetch(archivoJSON)
        .then((resp) => resp.json())
        .then((data) => {
            data.forEach(jug => {
                let jugadorHTML = `
                    <article>
                        <div>
                            <div>
                                <img src=${jug.imagen} alt="${jug.nombre}">
                            </div>
                            <div class="info-jug">
                                <h3>${jug.nombre}</h3>
                                <button onclick="mostrarDetalles(event)">Más info</button>
                                <div class="detalles-jug">
                                    <p>Posicion: ${jug.posicion}</p>
                                    <p>Numero de camiseta: ${jug.numero}</p>
                                    <p>Edad: ${jug.edad}</p>
                                    <p>Pie: ${jug.pie}</p>
                                </div>
                            </div>
                        </div>        
                    </article>`;
                document.getElementById("jugadores").innerHTML += jugadorHTML;
            });
        });
}

function mostrarDetalles(event) {
    let button = event.target;
    let infoJug = button.parentNode;
    let detallesJug = infoJug.querySelector(".detalles-jug");

    detallesJug.classList.toggle("mostrar");
    
    if (detallesJug.classList.contains("mostrar")) {
        button.textContent = "Menos info";
    } else {
        button.textContent = "Más info";
    }
}
