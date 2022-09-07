//<h1>there was once a (adjective) programmer who wanted to use a javascript to [verb] the [noun]</h1>
var adjectives =prompt('please enter any adjectives');
var sentence = "There was once a "+ adjectives;

var verb =prompt('please enter a verb');
var sentence = sentence+" programmer who wanted to use a javascript to "+verb;

var noun = prompt('please enter a noun');
alert("you are done entering words");
var sentence = sentence+" the "+noun;
document.write(sentence);