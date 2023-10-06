var userSearch = 'One Piece'

var movieNight = 'https://streaming-availability.p.rapidapi.com/search/title?country=us&show_type=all&output-language=en&rapidapi-key=ab82a71388mshb670a9456117badp107e60jsn596c04ae7f2f&title=' + userSearch

$('#search').on('click', search)
$('.addMovie').on('click', addItem)

function search (event) {
    event.preventDefault()
    // var userSearch = $("input[name='search']")
    fetch(movieNight)
    .then(function (response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}

addItem()
function addItem () {
    fetch(movieNight)
    .then(function (response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        var title = data.result[1].title
        var mediaType = data.result[1].type
        var releaseDate = data.result[1].firstAirYear
        var recentDate = data.result[1].lastAirYear
        var genres = data.result[1].genres
        var creators = data.result[1].creators
        console.log(releaseDate)
        console.log(recentDate)
        console.log(creators)
        $('.movie-back').append(title)
        $('.movie-back').append(mediaType)
        $('.movie-back').append(releaseDate + ' ' + recentDate)
        $('.movie-back').append(genres)
        $('.movie-back').append(creators)
    })
}