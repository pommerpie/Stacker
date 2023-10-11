// var userSearch = 'Small Soldiers'

// var movieNight = 'https://streaming-availability.p.rapidapi.com/search/title?country=us&show_type=all&output-language=en&rapidapi-key=ab82a71388mshb670a9456117badp107e60jsn596c04ae7f2f&title=' + userSearch

$('#search').on('click', search)
// $('.addMovie').on('click', addItem)

// search()
function search () {
    var userSearch = $('input[id="movieSearchInput"]').val()
    var movieNight = 'https://streaming-availability.p.rapidapi.com/search/title?country=us&show_type=all&output-language=en&rapidapi-key=ab82a71388mshb670a9456117badp107e60jsn596c04ae7f2f&title=' + userSearch

    fetch(movieNight)
    .then(function (response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        $('#searchList').removeAttr(hidden)
        for (i=0; i<30; i++) {
            var title = data.result[i].title
            var mediaType = data.result[i].type
            var releaseDate = data.result[i].firstAirYear
            var recentDate = data.result[i].lastAirYear
            var genreFirst = data.result[i].genres[0]
            var genreSecond = data.result[i].genres[1]
            var creators = data.result[i].creators
            var creatorFirst = creators.slice(0, 1)
            var creatorSecond = creators.slice(1)

        if (releaseDate === recentDate) {
            recentDate = ''
        }
        
        $('.movie-back').append('<li>' + title + '</li>')
        $('.movie-back').append('<li>' + mediaType + '</li>')
        $('.movie-back').append('<li>' + releaseDate + ' ' + recentDate + '</li>')
        $('.movie-back').append('<li>' + genreFirst + ' ' + genreSecond + '</li>')
        $('.movie-back').append('<li>' + creatorFirst + ' ' + creatorSecond + '</li>')
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