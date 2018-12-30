var myMovie = {title : "Puff the Magic Dragon", duration : 30, stars : ["Puff","Jackie","Living Sneezes."]};

function PrintMovie(movie) {
    for (var i = 0, starsString = "" ; i < movie.stars.length; i++) { starsString += movie.stars[i] + " " }    
    console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + starsString);
}

PrintMovie(myMovie);