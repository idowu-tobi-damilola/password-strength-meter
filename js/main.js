var pw_field = document.getElementById("password_field");

pw_field.onkeyup = function() {
  // get the score from the zxcvbn library
  var result = zxcvbn(pw_field.value);
  var score = result.score;
  // Call to getMeterPosition function to advance progress bar
  var highlight = getMeterPosition(score);
}

/* Display password strength text */
function indicateStrength(str) {
  text = document.getElementById("strength-text");
  text.innerHTML = str;
}

/* Update progressbar */
function adjustStrengthMeter(percentage, color) {
  document.getElementById('progressbar').style.visibility = "visible";
  document.getElementById('progressbar').style.width = percentage + "%";
  document.getElementById('progressbar').style.backgroundColor = color;
}

// none red yellow green
function getMeterPosition(score) {
  /* meter position object */
  var meterPosition = {
    "0": function() {
      adjustStrengthMeter(20, "#d50014");
      indicateStrength("");
    },
    "1": function() {
      adjustStrengthMeter(40, "#d50014");
      indicateStrength("Weak");
    },
    "2": function() {
      adjustStrengthMeter(60, "#e8ba00");
      indicateStrength("Moderate");
    },
    "3": function() {
      adjustStrengthMeter(80, "#88af0e");
      indicateStrength("Strong");
    },
    "4": function() {
      adjustStrengthMeter(100, "#88af0e");
      indicateStrength("Very Strong");
    }
  }
  meterPosition[score]();
}
