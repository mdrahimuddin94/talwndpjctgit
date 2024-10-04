let sliderContainer = document.getElementById("sliderContainer");
let slider = document.getElementById("slider");
let cards = slider.getElementsByTagName('li');
let elmentsToShow = 2;
if(document.body.clientWidth<1000){
    elmentsToShow = 1;
} 
else if(document.body.clientWidth<1500){
    elmentsToShow = 2;
}
let sliderContainerWidth = sliderContainer.clientWidth;


let cardWidth = sliderContainerWidth/elmentsToShow;

slider.style.width = cards.length*cardWidth+"px";
slider.style.transition ="margin";
slider.style.transitionDuration = "1s"
for(let i = 0; i < cards.length; i++){
    const element = cards[i];
    element.style.width = cardWidth+"px";

}
function prev(){
    
    if(+slider.style.marginLeft.slice(0, -2)!=-cardWidth*(cards.length))
    
    
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2))-cardWidth+"px");

}

function next(){
    if(+slider.style.marginLeft.slice(0, -2)!=0)
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2))+cardWidth+"px");

}