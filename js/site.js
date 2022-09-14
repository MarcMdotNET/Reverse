//Get the string from the textbox
//controller function
function getValue() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let reversedString = reverseString(userString);
    displayString(reversedString);
}

//Reverse the string
//logic function
function reverseString(userString) {
    let reversedString = [];

    //reverse a string using a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        reversedString += userString[i];
    }

    return reversedString;
}

//Display the reversed string
//view function
function displayString(reversedString) {

    //Write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${reversedString}`;
    //Show the alert box
    document.getElementById("alert").classList.remove("invisible");
}