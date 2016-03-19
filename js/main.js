var pw_field = document.getElementById("password_field");

pw_field.onkeyup = function() {
  // get the score from the zxcvbn library
  var result = zxcvbn(pw_field.value);
  var score = result.score;

  adjustStrengthMeter(score);
}

/* Update progressbar */
function adjustStrengthMeter(score) {
  var color = [
    "#d50014",
    "#d50014",
    "#e8ba00",
    "#88af0e",
    "#88af0e"
  ];

  var strengthText = [
    "",
    "Weak",
    "Moderate",
    "Strong",
    "Very Strong"
  ];

  var percentage = (score * 20) + 20;

  // Call to add text
  indicateStrength(strengthText[score]);

  // increase and decrease progress bar
  document.getElementById('progressbar').setAttribute("style",
                                                        "visibility: visible; width: "
                                                        + percentage + "%; background-color: "
                                                        + color[score]);

}

/* Display password strength text */
function indicateStrength(str) {
  text = document.getElementById("strength-text");
  text.innerHTML = str;
}
