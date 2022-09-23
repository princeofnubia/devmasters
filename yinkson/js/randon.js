var input=prompt('please enter any number');
var int=parseInt(input);
var randomNumber =Math.floor( Math.Random()*int)+1;
document.write(''+randomNumber+'is a number between 1 and'+int+' ')