function fetchInfo () {
    window.fetch('https://restcountries.eu/rest/v2/all') 
      .then(response => response.json())
      .then(jsonObj => displayUi(jsonObj))
      .catch(() => window.alert('API Could not be reached at this time'))
}

// This displays the data on the page
function displayUi (country) {
    const { name, capital, languages, currencies, population, region } = country[Math.floor(Math.random() * 150)]
    const template = `
    <div>
    <h1 id="head">${name}</h1>
    <p id="content"> This is a country with its capital in ${capital}. 
    The language(s) spoken here are ${languages[0].name}. The nation of ${name} is 
    located in the ${region} region with a population of ${population} and uses ${currencies[0].name} as it's currency</P>
    </div>


    <div class="col-lg-4 g-mb-30">
        <article class="g-pa-25 u-shadow-v11 rounded">
            <h2 class="h4 g-mb-15">
                <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Parking Space 1</a>
            </h2>

            <ul class="list-inline d-flex justify-content-between g-mb-20">
            <li class="list-inline-item">
                <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 722AQ53GY8
            </li>
            <li class="list-inline-item">
                <i class="icon-info g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i><span style="color:green;">PAID</span> 
            </li>
            </ul>

            <p class="g-mb-15">
            <i class="icon-clock g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 04:54:12 Tuesday 22 July, 2021
            </p>

        </article>
        </div>

    `
    // did this so i would avoid the process of having a refrsh/update button
    document.getElementById('template').innerHTML = template
}