fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => {
    countries(data);
})

const countries = allCountry =>{
    const countriesDiv = document.getElementById("countries");
    for (let i = 0; i < 100; i++) {
        const countryDiv = allCountry[i];
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const h4 = document.createElement("h4");

        h2.innerText = countryDiv.name;
        h4.innerText = countryDiv.capital;

        div.appendChild(h2);
        div.appendChild(h4);

        countriesDiv.appendChild(div)
        
    }
}
