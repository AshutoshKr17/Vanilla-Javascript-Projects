const colors = ["green", "red","yellow", "rgba(133,122,200)", "f15025"];
const btn = document.getElementById('btn')
const color = document.getElementById("color");


btn.addEventListener('click',function(){
   //get a random no. between 0-3
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

const getRandomNumber =() => Math.floor(Math.random() * colors.length);
