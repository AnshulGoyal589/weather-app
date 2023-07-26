const xhr=new XMLHttpRequest();

let address=document.getElementById("location");
let button=document.querySelector("#searchBar");
let ul=document.getElementById("wr");
let block=document.getElementById("block");
button.addEventListener( "click",()=>{

    xhr.open( 'get', `https://api.openweathermap.org/data/2.5/weather?q=${address.value}&appid=7e1dfced00e352855c083aa0b29b3add` );
    xhr.send();
} )
let blockChildContainer=document.createElement('div');
blockChildContainer.className="blockChild-container";
let info1=document.createElement('div');
let info11=document.createElement('div');
let imageholder=document.createElement('div');
let info22=document.createElement('div');
let info2=document.createElement('div');
let info33=document.createElement('div');
let info3=document.createElement('div');
let info4=document.createElement('div');
let info5=document.createElement('div');
let info6=document.createElement('div');
let image1=document.createElement('img');
let image2=document.createElement('img');
let image3=document.createElement('img');
let image4=document.createElement('img');
image2.src="https://www.citypng.com/public/uploads/preview/download-wind-blue-icon-png-11637144702itck1srdfm.png";
image3.src="https://p1.hiclipart.com/preview/389/899/774/moisture-logo-humidifier-humidity-relative-humidity-temperature-data-logger-weather-symbol-png-clipart.jpg";
image4.src="https://thumbs.dreamstime.com/z/weather-cloud-symbol-blue-color-isolated-20213003.jpg?w=768";
const array2=[ info1 , info2 , info3 ];
imageholder.className="blockImage";
info33.className="logo-details";
info22.className="logo-details";
info11.className="logo-details";
for(let info of array2){
    info.className="blockChild";
}
image2.className="logo";
image3.className="logo";
image4.className="logo";
info4.className="blockChild2";
info5.className="blockChild3";
info6.className="blockChild4";



xhr.onload=function(){

    address.value="";
    let jsondata=this.response;
    let weather=JSON.parse(jsondata);
    let weatherIcon=weather.weather[0].icon;
    
    // console.log(weather);
    image1.src = `http://openweathermap.org/img/w/${weatherIcon}.png`;
    info6.textContent=(parseInt(weather.main.temp)-273).toString()+"°C";
    info11.textContent="Temperature: "+(parseInt(weather.main.temp)-273).toString()+"°C";
    info22.textContent="Humidity: "+weather.main.humidity;
    info33.textContent="Wind Speed: "+weather.wind.speed;
    info4.textContent=weather.name.toUpperCase();
    info1.append(image3);
    info1.append(info11);
    info2.append(image4);
    info2.append(info22);
    info3.append(image2);
    info3.append(info33);
    info5.textContent=weather.weather[0].main;
    block.appendChild(info4);
    block.appendChild(info5);
    imageholder.append(image1);
    block.appendChild(imageholder);
    block.appendChild(info6);
    block.append(blockChildContainer);
    blockChildContainer.appendChild(info1);
    blockChildContainer.appendChild(info2);
    blockChildContainer.appendChild(info3);
    
    image1.style="width:100px ; display:inlineBlock";
    imageholder.style="display:inlineBlock";
}
xhr.onerror=function(){
    
    console.log("error aa raha hai");
    
}