/*
1. Pseudocode
Goal to display these three numbers:
10 - 40 - 39
Twist: must use three variables with differing operators to produce 
the numbers
Display as alert.

Pseudocode Likely look like

declare variableTEN = a + b
declare variableFOURTY = c - d
declare variableTHIRTYNINE = e * f

output ($variableTEN + " - " + $variableFOURTY + " - " + $variableTHIRTYNINE)

*/

const userPrompt = 
"You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

//3
//declaring lock variables based on different operator operations to later be used in output
//lock combination number of the left
const lockcombinationleft = 2+8

//lock combination number of the middle
const lockcombinationmiddle = 50-10

//lock combination number of the right
const lockcombinationright = 13*3


//5
//Generate an output so that the users can see the code's results
alert(`${userPrompt} ${lockcombinationleft} - ${lockcombinationmiddle} - ${lockcombinationright}`)
