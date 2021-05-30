function fetchdata(){
    fetch("https://mawaqif.herokuapp.com/api/checks")
//     fetch("https://mawaqif.herokuapp.com/api/subscribers")
    .then(response => {
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    })
//     .then(data =>{
//         console.log(data.data);
//         const html = data.data.map(user =>{
//             is_empty = user.is_empty ? 'vacant' : 'occupied'
//             return `<div class="col-lg-4 g-mb-30"><article class="g-pa-25 u-shadow-v11 rounded"><h2 class="h4 g-mb-15"><a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Parking Space ${user.packing_space_id}</a></h2><ul class="list-inline d-flex justify-content-between g-mb-20"><li class="list-inline-item"><i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> ${user.plate_number}</li><li class="list-inline-item"><i class="icon-info g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i><span style="color:green;">${is_empty}</span> </li></ul><p class="g-mb-15"><i class="icon-clock g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> ${user.created_at}</p></article></div>`
//           })
//             .join("");
//         console.log(html);
//         document.querySelector("#app_template").insertAdjacentHTML("afterbegin", html);})
//         .catch(error =>{
//             console.log(error);
//         });
    
    .then(data =>{
        console.log(data.data);
        const html = data.data.map(user =>{
            is_empty = user.is_empty ? 'Unpaid' : 'Paid'
            return `<div class="col-lg-4 g-mb-30"><article class="g-pa-25 u-shadow-v11 rounded"><h2 class="h4 g-mb-15"><a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Parking Space ${user.packing_space_id}</a></h2><ul class="list-inline d-flex justify-content-between g-mb-20"><li class="list-inline-item"><i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> ${user.plate_number}</li><li class="list-inline-item"><i class="icon-info g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i><span style="color:green;">${is_empty}</span> </li></ul><p class="g-mb-15"><i class="icon-clock g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> ${user.created_at}</p></article></div>`
          })
            .join("");
        console.log(html);
        document.querySelector("#app_template").insertAdjacentHTML("afterbegin", html);})
        .catch(error =>{
            console.log(error);
        });
}

fetchdata();
