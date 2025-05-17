let number;



document.getElementById("myRoll").onclick = function() {
    const min=50;
    const max=100;
     number=Math.floor(Math.random()* max) + min;
    document.getElementById("myLabel").textContent= number;

}