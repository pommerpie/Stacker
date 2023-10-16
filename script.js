var staticSearch = 'Star wars'

// var mdb = 'https://mdblist.p.rapidapi.com/?rapidapi-key=ab82a71388mshb670a9456117badp107e60jsn596c04ae7f2f&s=' + staticSearch

function ratingSearch () {
    fetch(mdb)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}

$('#search').on('click', search)
// $('.addMovie').on('click', addItem)

// search()
function search () {
    $('#searchList').empty()

    var userSearch = $('input[name="movieSearchInput"]').val()
    var movieNight = 'https://streaming-availability.p.rapidapi.com/search/title?country=us&show_type=all&output-language=en&rapidapi-key=ab82a71388mshb670a9456117badp107e60jsn596c04ae7f2f&title=' + userSearch

    fetch(movieNight)
    .then(function (response){
        return response.json()
    })
    .then(function(data){
        // console.log(data.result)

        if ($('input[name="movieSearchInput"]').val() != '') {
        $('#searchList').removeAttr('hidden')
        }
        for (let i=0; i<data.result.length; i++) {
            // console.log('data', data.result[i])
            if (data.result[i].type == 'movie') {

            var movieCardID = 'movie' + [i]    
            var title = data.result[i].title
            var mediaType = data.result[i].type
            var releaseDate = data.result[i].year
            var genreFirst = data.result[i].genres[0].name
            var genreSecond = data.result[i].genres[1].name
            var directors = data.result[i].directors
            var director = directors.slice(0, 1)

            // console.log('title', title)
            // console.log('type', mediaType)
            // console.log('year', releaseDate)
            // console.log('first genre', genreFirst)
            // console.log('second genre', genreSecond)
            // console.log('director', director)
            }

            if (data.result[i].type == 'series') {

            var movieCardID = 'series' + [i]
            var title = data.result[i].title
            var mediaType = data.result[i].type
            var releaseDate = data.result[i].firstAirYear
            var recentDate = data.result[i].lastAirYear
            var genreFirst = data.result[i].genres[0].name
            var genreSecond = data.result[i].genres[1].name
            var creators = data.result[i].creators
            var creatorFirst = creators.slice(0, 1)
            var creatorSecond = creators.slice(1)

            // console.log('title', title)
            // console.log('type', mediaType)
            // console.log('released',releaseDate)
            // console.log('last', recentDate)
            // console.log('first genre', genreFirst)
            // console.log('second genre', genreSecond)
            // console.log('creator 1', creatorFirst)
            // console.log('creator 2', creatorSecond)
                
            }
        if (releaseDate === recentDate || mediaType == 'movie') {
            recentDate = ''
        }
        
        $('#searchList').append('<div class="columns is-multiline" id="cardDeck"></div>')
        $('#cardDeck').append('<div class ="column is-one-quarter"><div class ="movie-card"><div class="movie-front"><h3 class="movie-title">' + title + '</h3></div><ul class="movie-back" id="' + movieCardID + '"></ul></div></div>')
        $('[id*="' + movieCardID + '"]').append('<li>' + mediaType + '</li>')
        $('[id*="' + movieCardID + '"]').append('<li>' + releaseDate + ' ' + recentDate + '</li>')
        $('[id*="' + movieCardID + '"]').append('<li>' + genreFirst + '/' + genreSecond + '</li>')
        if (mediaType == 'movie' && director) {
            $('[id*="' + movieCardID + '"]').append('<li>' + director + '</li>')
        } else if (creatorFirst && ! creatorSecond == '') {
            $('[id*="' + movieCardID + '"]').append('<li>' + creatorFirst + '</li>') 
        } else if (creatorFirst && creatorSecond) {
            $('[id*="' + movieCardID + '"]').append('<li>' + creatorFirst + '/' + creatorSecond + '</li>')
        } else $('[id*="' + movieCardID + '"]').append('<li>N/A</li>')
    }
    })
}

// addItem()
// function addItem () {
//     fetch(movieNight)
//     .then(function (response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data)
//         var title = data.result[1].title
//         var mediaType = data.result[1].type
//         var releaseDate = data.result[1].firstAirYear
//         var recentDate = data.result[1].lastAirYear
//         var genreFirst = data.result[1].genres[0].name
//         var genreSecond = data.result[1].genres[1].name
//         var creators = data.result[1].directors
//         var creatorFirst = creators.slice(0, 1)
//         var creatorSecond = creators.slice(1)

//         if (releaseDate === recentDate) {
//             recentDate = ''
//         }

//         $('.movie-back').append('<li>' + title + '</li>')
//         $('.movie-back').append('<li>' + mediaType + '</li>')
//         $('.movie-back').append('<li>' + releaseDate + ' ' + recentDate + '</li>')
//         $('.movie-back').append('<li>' + genreFirst + ' ' + genreSecond + '</li>')
//         $('.movie-back').append('<li>' + creatorFirst + ' ' + creatorSecond + '</li>')
//     })
// }