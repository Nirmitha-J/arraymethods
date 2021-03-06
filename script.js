// create a request variable from XMLHttpRequest
var request = new XMLHttpRequest();
// make a new connection (flag = true: if any problem in data being called show affect the rest of the procedure)
// line is non-blocking (flag = true)
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
    //send a request
request.send();
// load the data (onload is a event)
request.onload = function() {
    // var countryData = JSON.parse(request.response); or below
    var countryData = JSON.parse(this.response);
    var asianCountries = countryData.filter(item => {
        return item.region === 'Asia';
    }).map(item => item.name);
    var countriesWithLessThan2Lac = countryData.filter(item => {
        return item.population < 200000;
    }).map(item => item.name);
    // Get all the countries from Asia continent / “region” using Filter method
    console.log("List of asian countries: " + asianCountries);
    // Get all the countries with population of less than 2 lacs using Filter method
    console.log("List of countries with less than 2 lacs population: " + countriesWithLessThan2Lac);
    // Print the following details name, capital, flag using forEach
    countryData.forEach(item => {
        console.log({ "countryName": item.name, "capital": item.capital, "flag": item.flag });
    })

    // Print the total population of countries using the reduce method.
    var populationArray = countryData.map(item => item.population)
    var totalPopulation = populationArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log("TotalPopulation: " + totalPopulation);

    // Print the country which uses US Dollars as currency.
    let final = countryData.filter(item => {
        for (i in item.currencies) {
            if (item.currencies[i].name === "United States dollar") {
                return item;
            }
        }
    }).map(item => item.name);
    console.log(final);
}