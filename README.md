# Mawaqif Dashboard

This is the Module of this project which provides an interface for the Parking Space Management Company to monitor the Parking Lots.
The Page which houses the User Interface is home.html.
At every point in time, the current status of each parking space is kept updated with a number of information about the vehicle in it.
Such information include:
### 1. Occupied or Empty
   This is a status which informs on whether there is currently a vehicle in a specific parking space or not.
### 2. Licence Plate Number
   This is the Licence Plate of the vehicle detected by the OCR software from Azure.
### 3. Paid or Unpaid
   This is a status which informs on whether or not a Vehicle whose licence plate has been detected in a particular parking Space has actually made payment for parking.
### 4. Date and Time
   This shows the exact time at which the last check on the Parking Space was carried out by the Robot.
   
 
 All of this Checks information is fetched from one of the endpoints of the API built for this project( https://mawaqif.herokuapp.com/api/checks ). This GET API call is made in assets/api2.js like this:
 ## JavaScript API call
 
 ```
 function fetchdata(){
    fetch("https://mawaqif.herokuapp.com/api/checks")
    .then(response => {
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data =>{
        console.log(data.data);
        const html = data.data.map(user =>{
            is_empty = user.is_empty ? 'vacant' : 'occupied'
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

```

As shown above, some of the information obtained from the endpoint https://mawaqif.herokuapp.com/api/checks include 
### 1. is_empty
   This gives information on whether the Parking Space is Occupied or Empty. Occupied or Empty is then displayed on home.html
### 2. plate_number
   This gives the plate number of the vehicle detected present in the parking space. Its value is set to empty is there is no vehicle there at a given time.
### 3. packing_space_id
   This piece of information identifies the exact parking space whose report is being displayed at    a given time. eg Parking Space "1"
### 4. created_at
   This shows the time at which the check was made. It also includes the date.
### 5. paid_or_unpaid???


Below is a sample response when a GET request is made to the (https://mawaqif.herokuapp.com/api/checks) API:
```
{
    "status": true,
    "code": 200,
    "data": [
        {
            "id": 184,
            "plate_number": "67P-78PL",
            "start_time": "2020-03-09T22:18:27Z",
            "status": false
        },
        {
            "id": 594,
            "plate_number": "67P-908PL",
            "start_time": "2021-05-17T18:18:27Z",
            "status": false
        }
    ]
}
```

## Below is how the data is displayed in home.html 
```
<div class="row" id="app_template">

</div>
```
The __app_template__ element is a template container for each Parking Space being displayed. Hence, 5 parking spaces would have 5 app_template displayed based on the [Javascript API call](https://github.com/JosephAdewole/mawaqif_dashboard/blob/main/README.md#javascript-api-call)
