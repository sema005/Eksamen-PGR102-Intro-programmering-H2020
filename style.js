var background = document.querySelector("#background");
var body = document.querySelector("#body");
var information = document.querySelector("#information");
const quizStyle = document.querySelector("#quiz");


/*
    Eminem
*/
var imageStyle = document.querySelector("#image");
var eminemStyle = document.querySelector("#eminem");
var hiddenStyle = document.querySelector("#hidden1");

/*
    Avicii
*/ 
const aviciiStyle = document.querySelector("#avicii");
const imageStyle2 = document.querySelector("#image2");
const hiddenStyle2 = document.querySelector("#hidden2");





/*
    BODY
*/
body.style.margin = "0px";
body.style.backgroundColor = "#1b1b30";
body.style.color = "white";
body.style.fontFamilie = "arial";


/*
    BACKGROUND
*/
background.style.width = "80vw";
background.style.backgroundColor = "rgba(0,0,0,0.5)";
background.style.margin = "auto";
background.style.textAlign ="center";
background.style.padding = "50px";


/*
INFORMATION
*/ 

information.style.height = "100%";
information.style.textAlign = "center";
information.style.width= "80vw";
information.style.margin = "auto";
information.style.display = "grid";
information.style.gridTemplateColumns = "1fr 1fr"
information.style.padding = "20px";
information.style.gap = "20px";


/*
EMINEM
*/
eminemStyle.style.display ="grid";
eminemStyle.style.gridTemplateColumns = "300px 300px";

imageStyle.style.width = "300px";
imageStyle.style.height = "300px";

hiddenStyle.style.textAlign = "left";
hiddenStyle.style.fontSize = "17px";
hiddenStyle.style.display = "none";


/*
    AVICII
*/

aviciiStyle.style.display ="grid";
aviciiStyle.style.gridTemplateColumns = "300px 300px";

imageStyle2.style.width = "300px";
imageStyle2.style.height = "300px";

hiddenStyle2.style.textAlign = "left";
hiddenStyle2.style.fontSize = "17px";
hiddenStyle2.style.display = "none";

/*
    QUIZ
*/
quizStyle.style.height = "40vh";
quizStyle.style.width = "60vh";
quizStyle.style.display = "grid";
quizStyle.style.justifyContent = "center";
quizStyle.style.margin = "auto";
quizStyle.style.fontSize = "30px";