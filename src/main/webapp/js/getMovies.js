document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'afefc684'
    const initialSearchQuery = 'pokemon'
    const searchInput = document.getElementById('search')
    const form = document.getElementById('form-container')
    const moviesList = document.getElementById('movies-list')

    // Inicializar con búsqueda predeterminada
    fetchMovies(initialSearchQuery);

    //listener para el formulario de búsqueda
    form.addEventListener('submit', event => {
        event.preventDefault()
        const query = searchInput.value.trim()
        if (query) {
            fetchMovies(query)
        }
    });

    // Funcion para buscar las peliculas
    function fetchMovies(query) {
        const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.Response) {
                    displayMovies(data.Search)
                } else {
                    displayMovies([])
                }
            })
            .catch(error => {
                console.error('Error al obtener las películas:', error)
            })
    }

    // Funcion para mostrar las peliculas
    function displayMovies(movies) {
        moviesList.innerHTML = '' 

        if (movies.length === 0) {
            const noResultsItem = document.createElement('li');
            noResultsItem.textContent = 'No se encontraron resultados.'
            moviesList.appendChild(noResultsItem)
        } else {
            movies.forEach(movie => {
                const listItem = document.createElement('li')

                const movieImage = document.createElement('img')
                movieImage.src = movie.Poster !== 'N/A'
                    ? movie.Poster
                    : 'https://via.placeholder.com/200x300?text=No+Image'
                movieImage.alt = movie.Title

                const movieTitle = document.createElement('h2')
                movieTitle.textContent = movie.Title

                listItem.appendChild(movieImage)
                listItem.appendChild(movieTitle)
                moviesList.appendChild(listItem)
            });
        }
    }
});
