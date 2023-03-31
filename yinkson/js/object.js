let person={
    firstName: 'abdulkabir',
    secondName: 'olayinka',
    surname: 'sulaiman',
    age:25,
    present:true,
    skills:['css','html','javascript']

};
// ccop
let f = 
''

// you can access object with their key unlike array where you index number
var message='<p>my name is '+person.firstName+'</p>';
person.firstName='olayinka';
message += '<p>but i wish my name was '+person.firstName+'</p>';
person.firstName="ibn zak";
message += '<p>but i wish my name can change back to '+person.firstName+'</p>';
message += '<p> how many skills does  '+f.firstName+' have '+person.skills.length+'</p>';
document.write(message);
