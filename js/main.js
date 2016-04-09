var pw_field = document.getElementById(passwordMeterConfig.elements.passwordField);

pw_field.onkeyup = function() {
  // get the score from the zxcvbn library
  var result = zxcvbn(pw_field.value);
  var score = result.score;
  adjustStrengthMeter(score);

  if(pw_field.value === "") {
    clearMeter();
  }
}

/* Update progressbar */
function adjustStrengthMeter(score) {
  var percentage = (score * 20) + 20;
  // Call to add text, weak, moderate, etc ...
  indicateStrength(passwordMeterConfig.strengthText[score]);
  // increase and decrease progress bar
  document
    .getElementById(passwordMeterConfig.elements.progressBar)
    .setAttribute("style",
                  "visibility: visible;" +
                  "width: " + percentage + "%;" +
                  "background-color: " + passwordMeterConfig.color[score]);
}

function clearMeter(){
    document
      .getElementById(passwordMeterConfig.elements.progressBar)
      .setAttribute("style","visibility: none;");
}

/* Display password strength text */
function indicateStrength(str) {
  text = document.getElementById(passwordMeterConfig.elements.strengthText);
  text.innerHTML = str;
}
