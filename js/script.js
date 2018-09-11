var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');


function searchCountries() {
    var countryName = $('#country-name').val();    
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty(); 
          
    resp.forEach(function (item) {
        $('<tr>').text(item.name).addClass('table__title').appendTo(countriesList); 
        $('<td>').text('Stolica: ' + item.capital).addClass('table__element').appendTo(countriesList); 
        $('<td>').text('Populacja: ' + item.population).addClass('table__element').appendTo(countriesList);
        $('<td>').text('Położenie geograficzne: ' + item.subregion).addClass('table__element').appendTo(countriesList);  
        $('<td>').text('Język: ' + item.languages).addClass('table__element table__look-last-ele').appendTo(countriesList);
    });

}

function handleKeyPress(e) {                                //obsługa klawisza enter
    var searchButton = document.getElementById("search");
    if (e.keyCode === 13) {
        searchButton.click();
        return false;
    }
}

function init() {                                           
    var searchButton = document.getElementById("search"); 
    searchButton.onclick = searchCountries;
    var guessInput = document.getElementById("country-name"); 
    guessInput.onkeypress = handleKeyPress;

}

window.addEventListener('load', init);

