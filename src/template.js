/*
Create a method that takes 3 input parameters. A template, a character, and a character string.
Example: (XXX)XXX-XXX-XX, "X", 26365858364. 

All the characters in the template that match the character (second parameter) that is passed to the function must be replaced
with the third parameter. 
Examples:
•	(XXX)XXX-XXX-XX, "X", 26365858364 -> (263)658-583-64
•	(XXX)XXX-XXX-XX, "X", 26365858 -> (263)658-58X-XX
•	(XXX)XXX-XXX-XX, "X", 2636585836456 -> (263)658-583-64

Consider validating that the template includes the character and the third parameter is not empty. In the case that one of these conditions 
is not met, the method must return the message "Invalid parameters"
*/

function template(template, character, message) { }

module.exports = template