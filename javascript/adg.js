var user = prompt("What's your name?").toLowerCase();
var x = true
var y = false
switch(user) {
    case 'rob':
        if(x && y) {
            console.log("sweet");
        }
        else {
            console.log("Hey, Rob!");
        }
        break;
    case 'brittany':
        if(x || y) {
            console.log("awesome");
        }
        break;
    case 'devin':
        console.log("Hey, Brittany!");
        break;
    default:
        console.log("Hmm, I don't believe we have been acquainted!");
        break;
}
