function fetchInfo () {
    fetch('https://mawaqif.herokuapp.com/api/checks') 
      .then(response => response.json())
      .then(jsonObj => displayUi(jsonObj))
      .catch(() => window.alert('Checks API Could not be reached at this time'))
}

// This displays the data on the page
function displayUi (check) {
    const { plate_number, packing_space_id, is_empty } = check[1]
    const template = `
    


    <div class="col-lg-4 g-mb-30">
        <article class="g-pa-25 u-shadow-v11 rounded">
            <h2 class="h4 g-mb-15">
                <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Parking Space ${packing_space_id}</a>
            </h2>

            <ul class="list-inline d-flex justify-content-between g-mb-20">
            <li class="list-inline-item">
                <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> ${plate_number}
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
    console.log('Done')
}


fetchInfo ()
