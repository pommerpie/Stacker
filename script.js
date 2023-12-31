$('#search').on('click', search)
$('#addMovie').on('click', addItem)

function search () {
    $('#searchList').empty()
    var userSearch = $('input[name="movieSearchInput"]').val()

    const movieNight = 'https://streaming-availability.p.rapidapi.com/search/title?country=us&show_type=all&output-language=en&rapidapi-key=ab82a71388mshb670a9456117badp107e60jsn596c04ae7f2f&title=' + userSearch
    const tmdb = 'https://api.themoviedb.org/3/search/multi?api_key=c8db29e99207bfce5e4cc0e7cd218be2&per_page=50&query=' + userSearch

    fetch(movieNight)
    .then(function (response){
        return response.json()
    })
    .then(function(data){

        if ($('input[name="movieSearchInput"]').val() != '') {
        $('#searchList').removeAttr('hidden')
        }
        for (let i=0; i<data.result.length; i++) {
            if (data.result[i].type == 'movie') {
            var cardFrontID = 'cardF' + [i]
            var cardBackID = 'cardB' + [i]    
            var title = data.result[i].title
            var mediaType = data.result[i].type
            var releaseDate = data.result[i].year
            var genreFirst = data.result[i].genres[0].name
            var genreSecond = data.result[i].genres[1].name
            var directors = data.result[i].directors
            var director = directors.slice(0, 1)
            }

            if (data.result[i].type == 'series') {
            var cardFrontID = 'cardF' + [i]    
            var cardBackID = 'cardB' + [i]
            var title = data.result[i].title
            var mediaType = data.result[i].type
            var releaseDate = data.result[i].firstAirYear
            var recentDate = data.result[i].lastAirYear
            var genreFirst = data.result[i].genres[0].name
            var genreSecond = data.result[i].genres[1].name
            var creators = data.result[i].creators
            var creatorFirst = creators.slice(0, 1)
            var creatorSecond = creators.slice(1)
            }
        if (releaseDate === recentDate || mediaType == 'movie') {
            recentDate = ''
        }
        
        var cardID = title.replace(/\s+/g, '')
        $('#searchList').append('<div class="columns is-multiline" id="cardDeck"></div>')
        $('#cardDeck').append('<div class ="column is-one-quarter"><div class ="movie-card" id="' + cardID + '"><div class="movie-front" id="' + cardFrontID + '"><h3 class="movie-title">' + title + '</h3><button class="button" id="addMovie">+</button></div><ul class="movie-back" id="' + cardBackID + '"></ul></div></div>')
        $('[id*="' + cardBackID + '"]').append('<li>' + mediaType + '</li>')
        $('[id*="' + cardBackID + '"]').append('<li>' + releaseDate + ' ' + recentDate + '</li>')
        $('[id*="' + cardBackID + '"]').append('<li>' + genreFirst + '/' + genreSecond + '</li>')
        if (mediaType == 'movie' && director) {
            $('[id*="' + cardBackID + '"]').append('<li>' + director + '</li>')
        } else if (creatorFirst && ! creatorSecond == '') {
            $('[id*="' + cardBackID + '"]').append('<li>' + creatorFirst + '</li>') 
        } else if (creatorFirst && creatorSecond) {
            $('[id*="' + cardBackID + '"]').append('<li>' + creatorFirst + '/' + creatorSecond + '</li>')
        } else $('[id*="' + cardBackID + '"]').append('<li>N/A</li>')
    }
    })
}

function addItem(){
    var userAdd = this.parentNode.parentNode.getAttribute('id')
    console.log(userAdd)
    let listItem = $('[id*="' + userAdd + '"]').html()
    console.log(listItem)
}

// var staticSearch = 'spiderman'

// var watchMode = 'https://watchmode.p.rapidapi.com/autocomplete-search/?search_type=1&rapidapi-key=ab82a71388mshb670a9456117badp107e60jsn596c04ae7f2f&s&search_value=' + staticSearch
// var tmdb = 'https://api.themoviedb.org/3/search/multi?api_key=c8db29e99207bfce5e4cc0e7cd218be2&per_page=50&query=' + staticSearch 

// function tmdbSearch () {
//     fetch(tmdb)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })
// }

// function watchSearch () {
//     fetch(watchMode)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })
// }

// tmdbSearch()
// watchSearch()
