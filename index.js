// Write your code here!

//Make sure you remove the <main> with id 'main'
// let main = document.getElementById('main');
main.remove();

//Make sure you create an <h1> with id 'victory'
let newHeader = document.createElement('h1');
newHeader.id = "victory";

//"the 'newHeader' variable points to a node 'h1#victory', has \"YOUR-NAME is the champion\" inside"
newHeader.textContent = "YOUR-NAME is the champion";
// document.body.append(newHeader);
