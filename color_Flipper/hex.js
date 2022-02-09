const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn")
const color = document.getElementById("color")

btn.addEventListener('click', function(){
    
    let colorCode = getColor();
    console.log(colorCode);
    
    document.body.style.background = colorCode;
    color.textContent = colorCode;

});

const getRandomNumber =() => Math.floor(Math.random()*hex.length);

const getColor= ()=>{
    let str = "#";    
    for(let i =0; i< 6; i++){
        str += hex[getRandomNumber()];
    }
    return str;
}