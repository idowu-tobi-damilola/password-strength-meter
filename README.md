# Password Strength Meter  

Password strength meter using dropbox zxcvbn password strength estimator.  
Completed using vanilla Javascript and CSS.  

Just load the page (index.html) and start typing a password. It grabs the score from zxcvbn and increases the bar as the score gets higher (from 0 - 4).  

See live demo here  
http://jslnriot.github.io/password-strength-meter/    


password-meter-config.js is a config file that is included and will hold colors, text, and element names for the password meter. If you need to change any of these, change them in this config file and they should automatically change.   

For elements, I am calling them this way  
```
passwordMeterConfig.elements[0]
```  
This will obviously match up with "password_field" from index.html.  You can adjust or set these as you wish.  
