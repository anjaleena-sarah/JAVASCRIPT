//DOM = DOCUMENT OBJECT MODEL

document.title="My website";//it will change the title
console.log(document);//It will display the html document
console.dir(document);//It will list all the properties of the object

//to change the theme or background color from light to dark
document.body.style.backgroundColor = "red" //or "hsl(1,0%,99%)"

const username = " ASKR";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;
console.dir(document);
