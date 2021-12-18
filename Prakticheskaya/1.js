function ClickQ() {
    var red = getRandomInt(255)
    var green = gerRandomInt(255)
    var blue = getRandomInt(255)
    console.log(red? green? blue);
    document.getElementById("q").style.backgroundColor = "rgb(" + red + "," + green +"," + blue + ")"

    var stringShadow = "0 0 5px rgba(" + red + "," + green +"," + blue + ",1)," +
"0 0 25px rgba(" + red + "," + green +"," + blue + ",1)," +
"0 0 50px rgba(" + red + "," + green +"," + blue + ",1)," +
"0 0 100px rgba(" + red + "," + green +"," + blue + ",1)," +
"0 0 150px rgba(" + red + "," + green +"," + blue + ",1)," +
"0 0 200px rgba(" + red + "," + green +"," + blue + ",1)," 
document.getElementById("q").style.boxShadow = stringShadow;
}

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}