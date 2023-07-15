const xhr=new XMLHttpRequest();

let address=document.getElementById("location");
let button=document.getElementById("submit-button");
let ul=document.getElementById("wr");
let block=document.getElementById("block");
// let blockParent=document.getElementById("block-parent");

button.addEventListener( "click",()=>{

    xhr.open( 'get', `https://api.openweathermap.org/data/2.5/weather?q=${address.value}&appid=7e1dfced00e352855c083aa0b29b3add` );
    xhr.send();
} )

let info1=document.createElement('div');
let info2=document.createElement('div');
let info3=document.createElement('div');
let info4=document.createElement('div');
let image1=document.createElement('img');
let image2=document.createElement('img');
let image3=document.createElement('img');
let image4=document.createElement('img');
let image5=document.createElement('img');
const array=[image1 , image2 , image3 , image4 , image5];
const array2=[ info1 , info2 , info3 ];
for(let image of array){
    image.className="blockImage";
}
for(let info of array2){
    info.className="blockChild";
}
info4.className="blockChild2";

xhr.onload=function(){
    block.display="block";
    let jsondata=this.response;
    let weather=JSON.parse(jsondata);
    let weatherIcon=weather.weather[0].icon;
    console.log(weather);
    for(let image of array){
        image.src = `http://openweathermap.org/img/w/${weatherIcon}.png`;
    }
    info1.textContent="Temperature: "+(parseInt(weather.main.temp)-273).toString()+"°C";
    info2.textContent="Humidity: "+weather.main.humidity;
    info3.textContent="Wind Speed: "+weather.wind.speed;
    info4.textContent=weather.name.toUpperCase();
    for(let image of array){
        block.appendChild(image);
    }
    block.appendChild(info4);
    for(let info of array2){
        block.appendChild(info);
    }


}
xhr.onerror=function(){
    
    console.log("error aa raha hai");
    
}
