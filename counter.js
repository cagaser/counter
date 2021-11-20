
function incrNumber() {
    var element = document.getElementById("number")
    var currNum = element.innerHTML;
    currNum ++;
    document.getElementById("number").innerHTML = currNum;
    document.getElementById("number").style.color = "cornflowerblue";
    document.getElementById("title").style.color = "cornflowerblue";
}

function resNumber() {
    var element = document.getElementById("number")
    var currNum = element.innerHTML;
    document.getElementById("number").innerHTML = 0;
    document.getElementById("number").style.color = "rgb(113, 145, 113)";
    document.getElementById("title").style.color = "rgb(113, 145, 113)";
}

function decrNumber() {
    var element = document.getElementById("number")
    var currNum = element.innerHTML;
    currNum --;
    document.getElementById("number").innerHTML = currNum;
    document.getElementById("number").style.color = "tomato";
    document.getElementById("title").style.color = "tomato";

}
