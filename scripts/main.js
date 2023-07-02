const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/bread-background.jpg") {
        myImage.setAttribute("src", "images/bread-background-2.jpg");
    }
    else {
        myImage.setAttribute("src", "images/bread-background.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Enter Your Name.");

    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Bread's for, ${myName}`;
    }


}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = "Want some Breads, " + storedName + "?";
}

myButton.onclick = () => {
    setUserName();
};