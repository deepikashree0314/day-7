// Fetch data from the REST API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Problem 1: Get all countries from Asia continent/region using filter
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', asiaCountries);

    // Problem 2: Get all countries with a population of less than 2 lakhs using filter
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

    // Problem 3: Print details using forEach
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital ? country.capital[0] : 'Not available');
      console.log('Flag:', country.flags ? country.flags.svg : 'Not available');
      console.log('-----------------------');
    });

    // Problem 4: Print the total population of countries using reduce
    const totalPopulation = data.reduce((acc, country) => acc + (country.population || 0), 0);
    console.log('Total population of countries:', totalPopulation);

    // Problem 5: Print the country that uses US dollars as currency.
    const usDollarCountry = data.find(country => country.currencies && country.currencies.USD);
    console.log('Country using US dollars:', usDollarCountry ? usDollarCountry.name.common : 'Not found');
  })
  .catch(error => console.error('Error fetching data:', error));
