//<h1>there was once a (adjective) programmer who wanted to use a javascript to [verb] the [noun]</h1>
var num=3;
var numLeft=num-1;  
var adjectives =prompt('please enter any adjectives'+'['+numLeft+' questions left]out of '+num+'');
var sentence = "There was once a "+ adjectives;
numLeft+=-1; 
var verb =prompt('please enter a verb'+'['+numLeft+' questions left]out of '+num+'');
var sentence = sentence+" programmer who wanted to use a javascript to "+verb;
numLeft+=-1;
var noun = prompt ('please enter a noun'+'['+numLeft+' questions left]out of '+num+'');
var sentence = sentence+" the "+noun;
alert("you are done entering words");
document.write(sentence);