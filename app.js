
let home = 0
let away = 0


function updatedScore(){
  document.getElementById("home-score").innerText = home.toString().padStart(2,"0");
  document.getElementById("away-score").innerText = away.toString().padStart(2,"0");


}

function homeBtn(){
  console.log("Button Connected");
  home++;
  updatedScore();
}
function homeBtnthree(){
  home+=3;
  updatedScore();
}

function awayBtn(){
  console.log("Button Connected");
  away++;
  updatedScore();
}

function awayBtnthree(){
  away+=3;
  updatedScore();
}
function resetScore(){
  home=0;
  away=0;
  updatedScore();
}

