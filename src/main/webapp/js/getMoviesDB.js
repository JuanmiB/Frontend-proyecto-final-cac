console.log("Hola a todos")

document.addEventListener("DOMContentLoaded", ()=>{
fetchApi()
})

function fetchApi() {
    const api = "http://localhost:8080/Entrega24117/peliculas"
    fetch(api)
    .then(respones => respones.json())
    .then(data => {
        console.log(data);
        const tableBody = document.getElementById('pelicula-table').getElementsByTagName('tbody')[0]
        data.forEach(pelicula => {
            const row = tableBody.insertRow()

            const cellId = row.insertCell(0)
			const cellTitulo = row.insertCell(1)
			const cellFechaEstreno = row.insertCell(2)
			const cellGenero = row.insertCell(3)
			const cellDuracion = row.insertCell(4)
			const cellDirector = row.insertCell(5)
			const cellReparto = row.insertCell(6)
			const cellSinopsis = row.insertCell(7)
			const cellPoster = row.insertCell(8)
			
            cellId.textContent = pelicula.id;
			cellTitulo.textContent = pelicula.titulo
			cellFechaEstreno.textContent = pelicula.fecha_estreno
			cellGenero.textContent = pelicula.genero
			cellDuracion.textContent = pelicula.duracion
			cellDirector.textContent = pelicula.director
			cellReparto.textContent = pelicula.reparto
			cellSinopsis.textContent = pelicula.sinopsis
			cellPoster.textContent = pelicula.poster
        });
    })
    .catch(error =>{
        console.error('Ha habido un problema en el fetch:', error)
    })
}