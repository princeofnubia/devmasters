alert("A program to find a random number between the given range of number where you enter the first number and last number and it print out the number beween the range of the numbers you entered");
var input=prompt('please enter the first digit');
var intFirstNum=parseInt(input);
var input2=prompt('please enter the second digit');
var intSecondNum=parseInt(input2);
var ranNumber =Math.floor( Math.random ()*(intSecondNum-intFirstNum + 1))+ intFirstNum;
//var ranNumber =Math.floor( Math.random ()*int)+1;
//document.write(''+ranNumber+'is a number between 1 and'+int+' ')
document.write(''+ranNumber+' is a number between '+intFirstNum+'and '+intSecondNum+' ')