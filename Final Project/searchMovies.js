document.addEventListener('DOMContentLoaded', function () {
    findMovies();
});

// Define an array to store search terms
const searchTerms = ['action', 'comedy', 'drama', 'adventure'];

function findMovies() {
    // omdb API key
    const apiKey = 'YOUR_OMDB_API_KEY';

    // MoviesGrid element
    const MoviesGrid = document.getElementById('MoviesGrid');

    // Display loading message
    MoviesGrid.innerHTML = '<p>Loading movies...</p>';

    // Choose a random search term from the array
    const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];

    // Fetch movie data from OMDB API with a random search term
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${randomTerm}`)
        .then(response => response.json())
        .then(data => {
            if (data.Search && data.Search.length > 0) {
                moviesToShow(data.Search);
            } else {
                MoviesGrid.innerHTML = '<p>No random movies found!</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching random movies:', error);
            MoviesGrid.innerHTML = '<p>Error fetching movies. Please try again later.</p>';
        });
}

function searchMovies() {
    // omdb API key
    const apiKey = 'YOUR_OMDB_API_KEY';
    const searchInput = document.getElementById('searchInput').value;

    // MoviesGrid element
    const MoviesGrid = document.getElementById('MoviesGrid');

    // Search result validation
    if (searchInput.trim() !== '') {

        // Display loading message
        MoviesGrid.innerHTML = '<p>Loading movies...</p>';

        // Fetch movie data from OMDB API
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.Search && data.Search.length > 0) {
                    moviesToShow(data.Search);
                } else {
                    MoviesGrid.innerHTML = '<p>No movies found with the given name!</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                MoviesGrid.innerHTML = '<p>Error fetching movies. Please try again later.</p>';
            });
    } else {
        alert('Enter a movie title then search!');
    }
}

function moviesToShow(movies) {
    const MoviesGrid = document.getElementById('MoviesGrid');

    // Clear previous results
    MoviesGrid.innerHTML = '';

    // Display each movie in the results
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
        `;

        MoviesGrid.appendChild(movieCard);
    });
}
