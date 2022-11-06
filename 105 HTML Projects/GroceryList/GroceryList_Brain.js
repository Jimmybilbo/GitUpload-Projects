function theButton() {
    var value = document.getElementById("inputText").value; //get value from input

    if (value === "") { //alert that the text box is empty
        alert("Invalid Input. Can't Submit Nothing, Try Again") }
    else {
    var li = document.createElement("li");  //create a list item element
    var textNode = document.createTextNode(value);  //Assigning value (input) to variable

    li.appendChild(textNode);  //append value to list item
    document.getElementById("list").appendChild(li);
    li.className = "item"; }
}

//when an item with "item" class is clicked toggle class which either adds or removes linethrough
document.body.addEventListener("click", function(event) { if (event.target.className === "item" || event.target.className === "item strikethrough") { event.target.classList.toggle("strikethrough"); } });
    
function showLists(value) {
    if (value === "1") { //All Items
        let allItems = document.getElementsByClassName("item") //get all items
        for (i = 0; i < allItems.length; i ++) { allItems[i].style.display = ""; } } //display all items

    else if (value === "2") { //Purchased
        let strikeD = document.getElementsByClassName("strikethrough"); //get all items with "item strike" class
        let unPurch = document.getElementsByClassName("item") //get all items with "item" class

        for (i = 0; i < unPurch.length; i++) { unPurch[i].style.display = "none"; } //go through particular found items and hide all other items
        for (j = 0; j < strikeD.length; j++) { strikeD[j].style.display = ""; } }//go through particular found items and hide all other items

    else if (value === "3") { //Unpurchased
        let unPurch = document.getElementsByClassName("item") //get all items with "item" class
        let strikeD = document.getElementsByClassName("strikethrough"); //get all items with "item strike" class

        for (h = 0; h < unPurch.length; h++) { unPurch[h].style.display = ""; } //go through particular found items and hide all other items
        for (k = 0; k < strikeD.length; k++) { strikeD[k].style.display = "none"; } }//go through particular found items and hide all other items
}

function enter(event) { //Sumbits on Enter key
    if (event.keyCode === 13) {
    document.getElementById("button").click()
    }
}