var pw_field = document.getElementById(passwordMeterConfig.elements[0]);

pw_field.onkeyup = function() {
  // get the score from the zxcvbn library
  var result = zxcvbn(pw_field.value);
  var score = result.score;

  adjustStrengthMeter(score);
}

/* Update progressbar */
function adjustStrengthMeter(score) {
  var percentage = (score * 20) + 20;
  // Call to add text, weak, moderate, etc ...
  indicateStrength(passwordMeterConfig.strengthText[score]);
  // increase and decrease progress bar
  document.getElementById(passwordMeterConfig.elements[1]).setAttribute("style",
                                                        "visibility: visible; width: "
                                                        + percentage + "%; background-color: "
                                                        + passwordMeterConfig.color[score]);
}

/* Display password strength text */
function indicateStrength(str) {
  text = document.getElementById(passwordMeterConfig.elements[2]);
  text.innerHTML = str;
}
