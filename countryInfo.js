
const getCountryInfo = async (countryName , alpha2code) => {

    const base = `https://restcountries.eu/rest/v2/`;
    const query = countryName ? `name/${countryName}` :  `alpha/${alpha2code}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
}
