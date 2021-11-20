
function incrNumber() {
    var element = document.getElementById("number")
    var currNum = element.innerHTML;
    currNum ++;
    document.getElementById("number").innerHTML = currNum;
    document.getElementById("number").style.color = "blue";
}

function resNumber() {
    var element = document.getElementById("number")
    var currNum = element.innerHTML;
    document.getElementById("number").innerHTML = 0;
    document.getElementById("number").style.color = "green";
}

function decrNumber() {
    var element = document.getElementById("number")
    var currNum = element.innerHTML;
    currNum --;
    document.getElementById("number").innerHTML = currNum;
    document.getElementById("number").style.color = "red";

}
