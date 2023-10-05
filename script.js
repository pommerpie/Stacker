$('#search').on('click', search)

function search (event) {

    event.preventDefault()
    // var userSearch = $("input[name='search']")
    
    var movieNight = 'https://streaming-availability.p.rapidapi.com/search/title?country=us&show_type=all&output-language=en&rapidapi-key=ab82a71388mshb670a9456117badp107e60jsn596c04ae7f2f&title=' + userSearch
    
    fetch(movieNight)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)

    })
}
