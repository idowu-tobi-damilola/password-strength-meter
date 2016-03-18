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
function adjustStrengthMeter(score) {
  var color = {
    "0": "#d50014",
    "1": "#d50014",
    "2": "#e8ba00",
    "3": "#88af0e",
    "4": "#88af0e"
  }

  var strengthText = {
    "0": "",
    "1": "Weak",
    "2": "Moderate",
    "3": "Strong",
    "4": "Very Strong"
  }

  var percentage = (score * 20) + 20;

  indicateStrength(strengthText[score]);
  document.getElementById('progressbar').style.visibility = "visible";
  document.getElementById('progressbar').style.width = percentage + "%";
  document.getElementById('progressbar').style.backgroundColor = color[score];
}

// none red yellow green
function getMeterPosition(score) {
  /* meter position object */
  var meterPosition = {
    "0": function() {
      adjustStrengthMeter(0);
    },
    "1": function() {
      adjustStrengthMeter(1);
    },
    "2": function() {
      adjustStrengthMeter(2);
    },
    "3": function() {
      adjustStrengthMeter(3);
    },
    "4": function() {
      adjustStrengthMeter(4);
    }
  }
  meterPosition[score]();
}
