fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => {
    countries(data);
})

const countries = allCountry =>{
    const ul = document.getElementById("countries");
    for (let i = 0; i < allCountry.length; i++) {
        const country = allCountry[i];
        const li = document.createElement("li");
        li.innerText = country.name;
        ul.appendChild(li)
    }
}