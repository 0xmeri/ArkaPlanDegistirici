const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
    "yellow", 
    "black", 
    "green",
    "pink", 
    "blue",
    "grey",


];

button.addEventListener("click", changeBackground);

function changeBackground() {
const rastgeleSayi = Math.floor(Math.random() * colors.length);
const secilenRenk = colors[rastgeleSayi];
body.style.backgroundColor =  secilenRenk;

}
