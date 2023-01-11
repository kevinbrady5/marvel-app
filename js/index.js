let movies = [];
let currentOrder = "release";

class Movie {
    constructor(name, yearReleased, yearTakesPlace, imgFile, isChecked) {
        this.name = name;
        this.yearReleased = yearReleased;
        this.yearTakesPlace = yearTakesPlace;
        this.imgFile = imgFile;
        this.isChecked = isChecked;
    }
}
  
let ironMan = new Movie("Iron Man", "2008-05-02", "2010-01-01", "img/ironman_cover_photo.jpg", false);
let incredibleHulk = new Movie("The Incredible Hulk", "2008-06-13", "2010-01-03", "img/hulk_cover_photo.jpg", false);
let ironMan2 = new Movie("Iron Man 2", "2010-05-07", "2010-01-02", "img/ironman2_cover_photo.jpg", false);
let thor = new Movie("Thor", "2011-05-06", "2011-01-01", "img/thor_cover_photo.jpg", false);
let captainAmerica = new Movie("Captain America", "2011-07-22", "1942-01-01", "img/captain_america_cover_photo.jpg", false);
let avengers = new Movie("Avengers", "2012-05-04", "2012-01-01", "img/avengers_cover_photo.jpg", false);
let ironMan3 = new Movie("Iron Man 3", "2013-05-03", "2013-01-02", "img/ironman3_cover_photo.jpg", false);
let thorDarkWorld = new Movie("Thor: The Dark World", "2013-11-08", "2013-01-01", "img/thor_dark_world_cover_photo.jpg", false);
let captainAmericaWinterSoldier = new Movie("Captain America: The Winter Soldier", "2014-04-04", "2014-01-01", "img/captain_america_winter_soldier_cover_photo.jpg", false);
let guardians = new Movie("Guardians of the Galaxy", "2014-08-01", "2014-01-02", "img/guardians_cover_photo.jpg", false);
let avengersUltron = new Movie("Avengers: Age of Ultron", "2015-05-01", "2015-01-01", "img/avengers_ultron_cover_photo.jpg", false);
let antMan = new Movie("Ant-Man", "2015-07-17", "2015-01-02", "img/antman_cover_photo.jpg", false);
let captainAmericaCivilWar = new Movie("Captain America: Civil War", "2016-05-06", "2016-01-01", "img/captain_america_civil_war_cover_photo.jpg", false);
let doctorStrange = new Movie("Doctor Strange", "2016-11-04", "2016-01-05", "img/doctor_strange_cover_photo.jpg", false);
let guardians2 = new Movie("Guardians of the Galaxy: Vol. 2", "2017-05-05", "2014-01-03", "img/guardians2_cover_photo.jpg", false);
let spiderman = new Movie("Spider-Man: Homecoming", "2017-07-07", "2016-01-04", "img/spiderman_homecoming_cover_photo.jpg", false);
let thorRagnarok = new Movie("Thor: Ragnarok", "2017-11-03", "2017-01-01", "img/thor_ragnarok_cover_photo.jpg", false);
let blackPanther = new Movie("Black Panther", "2018-02-16", "2016-01-03", "img/blackpanther_cover_photo.jpg", false);
let avengersInfinityWar = new Movie("Avengers: Infinity War", "2018-04-27", "2018-01-02", "img/avengersinfinitywar_cover_photo.jpg", false);
let antManWasp = new Movie("Ant-Man and The Wasp", "2018-07-06", "2018-01-01", "img/antmanwasp_cover_photo.jpg", false);
let captainMarvel = new Movie("Captain Marvel", "2019-03-08", "1995-01-01", "img/captainmarvel_cover_photo.jpg", false);
let avengersEndgame = new Movie("Avengers: Endgame", "2019-04-26", "2019-01-01", "img/avengersendgame_cover_photo.jpg", false);
let spidermanFarFromHome = new Movie("Spider-Man: Far From Home", "2019-07-02", "2021-01-05", "img/spiderman_farfromhome_cover_photo.jpg", false);
let wandaVision = new Movie("WandaVision", "2021-01-15", "2021-01-03", "img/wandavision_cover_photo.jpg", false);
let falconWinterSoldier = new Movie("The Falcon and The Winter Soldier", "2021-03-19", "2021-01-04", "img/falcon_wintersoldier_cover_photo.jpg", false);
let loki = new Movie("Loki", "2021-06-09", "2021-01-01", "img/loki_cover_photo.jpg", false);
let blackWidow = new Movie("Black Widow", "2021-07-09", "2016-01-02", "img/blackwidow_cover_photo.jpg", false);
let whatIf = new Movie("What If...?", "2021-08-11", "2021-01-02", "img/whatif_cover_photo.jpg", false);
let shangChi = new Movie("Shang-Chi and The Legend of The Ten Rings", "2021-09-03", "2021-01-06", "img/shangchi_cover_photo.jpg", false);
let eternals = new Movie("Eternals", "2021-11-05", "2021-01-08", "img/eternals_cover_photo.jpg", false);
let hawkeye = new Movie("Hawkeye", "2021-11-24", "2022-01-02", "img/hawkeye_cover_photo.jpg", false);
let spidermanNoWayHome = new Movie("Spider-Man: No Way Home", "2021-12-17", "2021-01-07", "img/spiderman_nowayhome_cover_photo.jpg", false);
let moonKnight = new Movie("Moon Knight", "2022-03-30", "2022-01-03", "img/moonknight_cover_photo.jpg", false);
let doctorStrangeMultiverse = new Movie("Doctor Strange in the Multiverse of Madness", "2022-05-06", "2022-01-01", "img/doctor_strange_multiverse_cover_photo.jpg", false);
let msMarvel = new Movie("Ms. Marvel", "2022-06-08", "2022-01-05", "img/msmarvel_cover_photo.jpg", false);
let thorLoveThunder = new Movie("Thor: Love and Thunder", "2022-07-08", "2022-01-06", "img/thor_lovethunder_cover_photo.jpg", false);
let sheHulk = new Movie("She-Hulk: Attorney-at-Law", "2022-08-18", "2022-01-04", "img/shehulk_cover_photo.jpg", false);
let werewolf = new Movie("Werewolf By Night", "2022-10-07", "2022-01-07", "img/werewolf_cover_photo.jpg", false);
let blackPantherWakanda = new Movie("Black Panther: Wakanda Forever", "2022-11-11", "2022-01-08", "img/blackpanther_wakanda_cover_photo.jpg", false);
let guardiansHoliday = new Movie("The Guardians of the Galaxy Holiday Special", "2022-11-25", "2022-01-09", "img/guardiansholiday_cover_photo.jpg", false);

movies.push(ironMan, incredibleHulk, ironMan2, thor, captainAmerica, avengers, ironMan3, thorDarkWorld, captainAmericaWinterSoldier, guardians, avengersUltron, antMan, captainAmericaCivilWar, doctorStrange, guardians2, spiderman, thorRagnarok, blackPanther, avengersInfinityWar, antManWasp, captainMarvel, avengersEndgame, spidermanFarFromHome, wandaVision, falconWinterSoldier, loki, blackWidow, whatIf, shangChi, eternals, hawkeye, spidermanNoWayHome, moonKnight, doctorStrangeMultiverse, msMarvel, thorLoveThunder, sheHulk, werewolf, blackPantherWakanda, guardiansHoliday);

const movieCovers = document.querySelector(".movieCovers");
const toggle = document.getElementById('toggle');
const clear = document.getElementById('clear');

//sortMoviesByYeaReleased();

toggle.addEventListener('click', () => {
    if (currentOrder == "release") {
        currentOrder = "chronological";
    } else if (currentOrder == "chronological") {
        currentOrder = "release";
    }
    sortMovies(movies);
});

clear.addEventListener('click', clearProgress);

 // Click handler for entire DIV container
 movieCovers.addEventListener('click', function (e) {
    // But only for elements that have a movieCover class
    if (e.target.classList.contains('movieCovers__img')) {
      markAsViewed(e.target);
    } else if (e.target.classList.contains('movieCovers__img--viewed')) {
        markAsNotViewed(e.target);
    }
  });

function displayMovies(movies) {
    movies.forEach(movie => {

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
            img.classList = "movieCovers__img--viewed";
            let icon = document.createElement("p");
            icon.classList = "overlay";
            icon.innerHTML = '<i class="fa-solid fa-check"></i>';
            let viewedDiv = document.getElementById(`${img.id}Div`);
            viewedDiv.appendChild(icon);
        }
    });
}

function sortMoviesByYeaReleased(movies) {
    currentOrder = "release";
    toggle.innerHTML = '<i class="fa-solid fa-shuffle"></i>' + " Switch to Chronological Order";
    movieCovers.innerHTML = "";

    movies.sort(function(a, b){
        const date1 = new Date(a.yearReleased)
        const date2 = new Date(b.yearReleased)
        
        return date1 - date2;
    })

    displayMovies(movies);
}

function sortMoviesByYearTakesPlace(movies) {
    toggle.innerHTML = '<i class="fa-solid fa-repeat"></i>' + " Switch to Release Order";
    currentOrder = "chronological";
    movieCovers.innerHTML = "";
    
    movies.sort(function(a, b){
        const date1 = new Date(a.yearTakesPlace)
        const date2 = new Date(b.yearTakesPlace)
        
        return date1 - date2;
    })
    
    displayMovies(movies);
}

function sortMovies(movies) {
    if(currentOrder == "release") {
        sortMoviesByYeaReleased(movies);
    } else {
        sortMoviesByYearTakesPlace(movies);
    }
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
        }
    });

    let savedMovies = movies;

    addToLocalStorage(savedMovies);
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

    let savedMovies = movies;

    addToLocalStorage(savedMovies);
}

// function to add movies to local storage
function addToLocalStorage(movies) {
    // conver the array to string then store it.
    localStorage.setItem('movies', JSON.stringify(movies));
    // render them to screen
    sortMovies(movies);
  }

  // function helps to get everything from local storage
function getFromLocalStorage() {
    const reference = localStorage.getItem('movies');
    // if reference exists
    if (reference) {
      // converts back to array and store it in movies array
      let moviesFromStorage = JSON.parse(reference);
      
      //check if new movies have been added since last save
      if (moviesFromStorage.length == movies.length) {
        movies = moviesFromStorage;
        sortMovies(movies);
      } else {
        let difference = movies.length - moviesFromStorage.length;
        console.log(difference);
        //add each new movie that was not there at last save
        for (let i = 1; i <= difference; i++) {
            console.log(movies[movies.length - i]);
            moviesFromStorage.push(movies[movies.length - i]);
        }
        movies = moviesFromStorage;
      }

      sortMovies(movies);

    } else {
        sortMovies(movies);
    }
  }
  // initially get everything from localStorage
  getFromLocalStorage();

  function clearProgress() {
    if (confirm("This will clear your saved progress and mark all items as not viewed") == true){
    localStorage.clear();
    window.location = location.href;
  }
  }

let topbutton = document.getElementById("topBtn");

topbutton.addEventListener("click", topFunction);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}