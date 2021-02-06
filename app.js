fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        countries(data);
       
    })

const countries = allCountry => {
    const countriesDiv = document.getElementById("countries");
    for (let i = 0; i < 250; i++) {
        const countryDiv = allCountry[i];
        const div = document.createElement("div");
        const h2 = document.createElement("h3");
        const h4 = document.createElement("h5");
        const image = document.createElement("img");
        

        h2.innerText = countryDiv.name;
        h4.innerText = countryDiv.capital;
        image.src = allCountry[i].flag;
        

        div.appendChild(h2);
        div.appendChild(h4);
        div.appendChild(image);

        countriesDiv.appendChild(div)

        divStyle(div);
    }
}

const divStyle = div => {
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.boxShadow = "0px 0px 6px gray";
    div.style.padding = "10px"
    div.style.margin = "10px"
    div.style.float = "left"
    
}