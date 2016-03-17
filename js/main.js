var pw_field = document.getElementById("password_field");
function switchOffAllCells() {
  switchOffCell(0);
  switchOffCell(1);
  switchOffCell(2);
  switchOffCell(3);
  switchOffCell(4);
}
function indicateStrength(str) {
  text = document.getElementById("strength-text");
  text.innerHTML = str;
}
function decreaseStrengthMeter(score) {
  console.log(score);
  for(var i=0; i < score.length; i++) {
        var cell = document.getElementById('c' + i);
        cell.className = 'cell';
    }
}
function increaseStrengthMeter(score) {
  console.log(score);
  for(var i=0; i < score.length; i++) {
    var cell = document.getElementById('c' + i);
    cell.className = 'cell on';
  }
}

function adjustStrengthMeter() {

}

function getMeterPosition(score) {
  var meterPosition = {
    "0": function() {
      increaseStrengthMeter([0]);
      decreaseStrengthMeter([0,1,2,3,4]);
    },
    "1": function() {
      increaseStrengthMeter([0,1]);
      decreaseStrengthMeter([2,3,4]);
    },
    "2": function() {
      increaseStrengthMeter([0,1,2]);
      decreaseStrengthMeter([3,4]);
    },
    "3": function() {
      increaseStrengthMeter([0,1,2,3]);
      decreaseStrengthMeter([4]);
    },
    "4": function() {
      increaseStrengthMeter([0,1,2,3,4]);
    }
  }
  meterPosition[score]();
}

pw_field.onkeyup = function() {
  var result = zxcvbn(pw_field.value);
  var score = result.score;
  // Call to getMeterPosition function to advance progress bar
  var highlight = getMeterPosition(score);

}
