var loser = false;
var cheat = false;
windows.onload = function(){
  $("start").onclick = start;
  $("maze").onmouseover = onCheat;
  $("end").onmouseleave = end;

  var wall = $$("#maze div.boundary");
  for (var i = 0; i < wall.length, i++){
    wall[i].onmouseover = endgame;
  }
}

function endGame() {
    lose = true;
    cheat = false;
    $("status").textContent = "You lose!!";
    var wall = $$("#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        wall[i].addClassName("youlose");
    }
}

function end() {
    if (!lose && !cheat) {
        $("status").textContent = "You win!";
    }
    else if(cheat && !lose){
        $("status").textContent = "You Tried to cheat I see!";
        var wall = $$("#maze div.boundary");
        for (var i = 0; i < boundaries.length; i++) {
            wall[i].addClassName("youlose");
        }
    }
}
function start() {
      lose = false;
      cheat = false;
      $("status").textContent = "Traverse the path to the end!";
      var wall = $$("#maze div.boundary");
      for (var i = 0; i < boundaries.length; i++) {
          wall[i].removeClassName("youlose");
      }
  }
function onCheat(){
  cheat = true;
}
