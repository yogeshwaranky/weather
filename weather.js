let searchBtn = document.getElementById("search-btn");                      
let countryInput = document.getElementById("country-inp");

searchBtn.addEventListener("click",()=>{
  let countryWeather = countryInput.value;                            //storing the  input value
  let countryName =    countryInput.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryWeather}&appid=7de53c6f56f52faa22d7fbe1351e958e`  //connected two url by the API id
  let url1=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  // Fetch the url with the input value given in the template literals//
 console.log(url)
  console.log(url1);
  fetch(url)
.then((data1)=> data1.json())
.then((data2)=>{
console.log(data2["main"])                                                  //The below details where displayed in the div tag with id name called output1.
output1.innerHTML=`                                                     
<h4><b><u>WEATHER REPORT</b></u></h4><br><br>

<div class="wrapper">
<div class="data-wrapper">
<h4>TEMPERATURE:<h4>
<span>${data2["main"].temp}<span>
</div>
</div>

<div class="wrapper">
<div class="data-wrapper">
<h4>MINIMUM TEMPERATURE:<h4>
<span>${data2["main"].temp_min}<span>
</div>
</div>

<div class="wrapper">
<div class="data-wrapper">
<h4>MAXIMUM TEMPERATURE:<h4>
<span>${data2["main"].temp_max}<span>
</div>
</div>

<div class="wrapper">
<div class="data-wrapper">
<h4>PRESSURE:<h4>
<span>${data2["main"].pressure}<span>
</div>
</div>

<div class="wrapper">
<div class="data-wrapper">
<h4>HUMIDITY:<h4>
<span>${data2["main"].humidity}<span>
</div>
</div>`
})


fetch(url1)
.then((Response)=> Response.json())                            //The following details were displayed before the weather report in the id named output
.then((data)=>{
   output.innerHTML=`
    <img src="${data[0].flags.svg}"
    class="flag-img">
    <h2>${data[0].name.common}<h2>
    <div class="wrapper">
    <div class="data-wrapper">
    <h4>capital:<h4>
    <span>${data[0].capital[0]}<span>
    </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
    <h4>region:<h4>
    <span>${data[0].region[0]}<span>
    </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
    <h4>postalcode:<h4>
    <span>${data[0].postalCode.format}<span>
    </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
    <h4>Latlng:<h4>
    <span>${data[0].latlng}<span>
    </div>
    </div>`

    
    
 
}).catch(()=>{                                                          //To handle the errors by displaying the following lines
  if(countryName.length ==0){
    output.innerHTML=`<h3>The input field cannot be empty</h3>`
  }
  else{
    output.innerHTML=`<h3>please enter a valid country</h3>`;
  }
})
 });
