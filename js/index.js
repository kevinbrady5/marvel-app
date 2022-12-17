let movies = [];
let currentOrder;

class Movie {
    constructor(name, yearReleased, yearTakesPlace, imgFile, isChecked) {
        this.name = name;
        this.yearReleased = yearReleased;
        this.yearTakesPlace = yearTakesPlace;
        this.imgFile = imgFile;
        this.isChecked = isChecked;
    }
}
  
let ironMan = new Movie("Iron Man", "2008-05-02", 2010, "img/ironman_cover_photo.jpg", false);
let incredibleHulk = new Movie("The Incredible Hulk", "2008-06-13", 2011, "img/hulk_cover_photo.jpg", false);
let ironMan2 = new Movie("Iron Man 2", "2010-05-07", 2010, "img/ironman2_cover_photo.jpg", false);
let thor = new Movie("Thor", "2011-05-06", 2011, "img/thor_cover_photo.jpg", false);
let captainAmerica = new Movie("Captain America", "2011-07-22", 1942, "img/captain_america_cover_photo.jpg", false);
let avengers = new Movie("Avengers", "2012-05-04", 2012, "img/avengers_cover_photo.jpg", false);
let ironMan3 = new Movie("Iron Man 3", "2013-05-03", 2013, "img/ironman3_cover_photo.jpg", false);
let thorDarkWorld = new Movie("Thor: The Dark World", "2013-11-08", 2013, "img/thor_dark_world_cover_photo.jpg", false);
let captainAmericaWinterSoldier = new Movie("Captain America: The Winter Soldier", "2014-04-04", 2014, "img/captain_america_winter_soldier_cover_photo.jpg", false);
let guardians = new Movie("Guardians of the Galaxy", "2014-08-01", 2014, "img/guardians_cover_photo.jpg", false);
let avengersUltron = new Movie("Avengers: Age of Ultron", "2015-05-01", 2015, "img/avengers_ultron_cover_photo.jpg", false);
let antMan = new Movie("Ant-Man", "2015-07-17", 2015, "img/antman_cover_photo.jpg", false);
let captainAmericaCivilWar = new Movie("Captain America: Civil War", "2016-05-06", 2016, "img/captain_america_civil_war_cover_photo.jpg", false);
let doctorStrange = new Movie("Doctor Strange", "2016-11-04", 2016, "img/doctor_strange_cover_photo.jpg", false);
let guardians2 = new Movie("Guardians of the Galaxy: Vol. 2", "2017-05-05", 2014, "img/guardians2_cover_photo.jpg", false);

movies.push(ironMan, incredibleHulk, ironMan2, thor, captainAmerica, avengers, ironMan3, thorDarkWorld, captainAmericaWinterSoldier, guardians, avengersUltron, antMan, captainAmericaCivilWar, doctorStrange, guardians2);

const movieCovers = document.querySelector(".movieCovers");
const toggle = document.getElementById('toggle');

sortMoviesByYeaReleased();

toggle.addEventListener('click', () => {
    if(currentOrder == "release") {
        sortMoviesByYearTakesPlace();
    } else {
        sortMoviesByYeaReleased();
    }
});

 // Click handler for entire DIV container
 movieCovers.addEventListener('click', function (e) {
    // But only for elements that have a movieCover class
    if (e.target.classList.contains('movieCovers__img')) {
      markAsViewed(e.target);
    } else if (e.target.classList.contains('movieCovers__img--viewed')) {
        markAsNotViewed(e.target);
    }
  });

function displayMovies() {
    movies.forEach(movie => {
        console.log(movie.isChecked);
        if (localStorage.getItem(`${movie}Checked` == true)){
            movie.isChecked = true;
            console.log("it worked!");

        }
        console.log(movie.isChecked);
        let link = document.createElement("a");
        link.classList = "movieCovers__item";
        let div = document.createElement("div");
        div.classList = "movieCoverDiv";
        div.id = movie.name + "Div";
        link.appendChild(div);
        let img = document.createElement("img");
        img.classList = "movieCovers__img";
        img.id = movie.name;
        img.src = movie.imgFile;
        movieCovers.appendChild(link);
        link.appendChild(img);

        if(movie.isChecked == true) {
            markAsViewed(img);
        }
    });
}

function sortMoviesByYeaReleased() {
    currentOrder = "release";
    toggle.innerHTML = "Switch to Chronological Order";
    movieCovers.innerHTML = "";

    movies.sort(function(a, b){
        const date1 = new Date(a.yearReleased)
        const date2 = new Date(b.yearReleased)
        
        return date1 - date2;
    })

    displayMovies();
}

function sortMoviesByYearTakesPlace() {
    toggle.innerHTML = "Switch to Release Order";
    currentOrder = "chronological";
    movieCovers.innerHTML = "";
    
    movies.sort(function(a, b){
        const date1 = new Date(a.yearTakesPlace)
        const date2 = new Date(b.yearTakesPlace)
        
        return date1 - date2;
    })
    
    displayMovies();
}

function markAsViewed(movieCover) {
    movieCover.classList = "movieCovers__img--viewed";
    let icon = document.createElement("p");
    icon.classList = "overlay";
    icon.innerHTML = '<i class="fa-solid fa-check"></i>';
    let viewedDiv = document.getElementById(`${movieCover.id}Div`);
    viewedDiv.appendChild(icon);

    movies.forEach(movie => {
        if (movie.name == movieCover.id) {
            movie.isChecked = true;
            localStorage.setItem(`${movie}Checked`, true);
        }
    });
}

function markAsNotViewed(movieCover) {
    movieCover.classList = "movieCovers__img";
    let viewedDiv = document.getElementById(`${movieCover.id}Div`);
    viewedDiv.removeChild(viewedDiv.firstChild);

    movies.forEach(movie => {
        if (movie.name == movieCover.id) {
            movie.isChecked = false;
        }
    });
}