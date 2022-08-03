console.log("here")
var pressB = document.querySelector("#button1")
var box = document.querySelectorAll("td")

function move(){
  if(this.textContent === "")
    this.textContent = "X";
  else if (this.textContent === "X")
    this.textContent = "O";
  else
      this.textContent = "";
}
function restart(){
  for(var i = 0; i < box.length; i++){
    box[i].textContent = ""

  }
}


for(var i = 0; i < box.length; i++){
  box[i].addEventListener('click', move)

}
pressB.addEventListener('click', restart)
