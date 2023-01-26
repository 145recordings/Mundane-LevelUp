//need to replace all setting cookies to setCookie function
//and add comments

//version 1.0.0
//created by Franklin
//1-25-2023


//stats variables
var experience;
var level;
var strength;
var discipline;
var mind;
var fun;
//toggle for options drop down menu
var optionsToggle = false;
//this variable is used in the formula experience divided by levelDivison to determine level
const LEVELDIVISION = 16;
//this variable is used to cycle through avatars
var counter;
//date variables, sets expiration date for cookies
var expireDate = new Date();
expireDate.setUTCFullYear(2030);
var expires = "expires=" + expireDate.toUTCString();
//this variables is true if the user consents to cookies
var cookies = false;


//function for the cookie waiver
function agree(){
    cookies = true;
    setCookie("cookies","true");
    document.getElementById("cookieAgreement").style.display = "none";
    location.reload();
}
function disagree(){
    cookies = false;
    document.getElementById("cookieAgreement").style.display = "none"; 
}

function getCookie(cname) {
    var cookieArray = document.cookie.split(";");   
    
    for (let i = 0; i < cookieArray.length; i++) {
        var cookiePair = cookieArray[i].split("=");
        
        if(cookiePair[0].trim() == cname){
            return cookiePair[1];
        }         
    }
    console.log("error getting cookie");
    return "";    
}

function setCookie(cname,value){
    if(cookies == "false" || cookies == false){
        return;
    }
    document.cookie = cname + "=" + value + "; " + expires + "; path=/";
}

//this function executes every time the page loads
function masterOnLoad() {
    cookies = getCookie("cookies");

    if(cookies == "true" || cookies == true){
        getsetNamePrompt();
        getsetLevelExperience();
        getsetStats();
        getsetAvatar();
        changeTree();
        document.getElementById("cookieAgreement").style.display = "none";

    }
    
}

//gets and sets the avatar on load
function getsetAvatar(){
    if(cookies == "false" || cookies == false){
        return;
    }
    
    counter = getCookie("avatar");
    if(counter == "" || counter == null){
        counter = 1;
        document.cookie = "avatar=" + counter + ";" + expires + ";path=/";
    }
    console.log("getsetAvatar " + counter);
    setAvatar();
    
}
//gets and sets the name on load
function getsetNamePrompt() {
    if(cookies == "false" || cookies == false){
        return;
    }
    
    var user = getCookie("username");

        
    if(user == "" || user == null){
        user = prompt("Please enter a username: ","");
        if(user != "" && user != null){
            setCookie("username",user);
        }   
    }
    //set welcome message using username
    document.getElementById("welcome").innerHTML = "Welcome,<br>" + user;
        
}
//gets and sets the level and experience on load
function getsetLevelExperience(){
    if(cookies == "false" || cookies == false){
        return;
    }
    
    experience = getCookie("experience");
    level = getCookie("level");
    
    if(experience == "" || experience == null){
        experience = 0;
        level = 0;   
    }
    
    level = parseInt(experience) / LEVELDIVISION;
    level = Math.round(level);
     
    //set level and experience to correct level
    setCookie("experience",experience);
    setCookie("level",level);

    document.getElementById("experience").innerHTML = "Experience = " + experience;
    document.getElementById("level").innerHTML = "Level = " + level;
}
//gets and sets the stats on load
function getsetStats(){
    if(cookies == "false" || cookies == false){
        return;
    }
    
    strength = getCookie("strength");
    discipline = getCookie("discipline");
    mind = getCookie("mind");
    fun = getCookie("fun");
    
    if(strength == "" || strength == null){
        strength = 0;
        setCookie("strength",strength);
    }
    if(discipline == "" || discipline == null){
        discipline = 0;
        setCookie("discipline",discipline);
    }
    if(mind == "" || mind == null){
        mind = 0;
        setCookie("mind",mind);
    }
    if(fun == "" || fun == null){
        fun = 0;
        setCookie("fun",fun);
    }
    
    document.getElementById("strength").innerHTML = "Strength = " + strength;
    document.getElementById("discipline").innerHTML = "Discipline = " + discipline;
    document.getElementById("mind").innerHTML = "Mind = " + mind;
    document.getElementById("fun").innerHTML = "Fun = " + fun;
    
}

function optionsButtonToggle(){
    if(optionsToggle == false){
        document.getElementById("options-content").style.display = "block";
        optionsToggle = true;
    }
    else{
        document.getElementById("options-content").style.display = "none";
        optionsToggle = false;
    }
}

function resetButton(){
    if(cookies == "false" || cookies == false){
        return;
    }
    
    experience = "";
    level = "";
    strength = "";
    discipline = "";
    mind = "";
    fun = "";
    user="";
    counter = "";
    
    setCookie("username",user);
    setCookie("strength",strength);
    setCookie("discipline",discipline);
    setCookie("mind",mind);
    setCookie("fun",fun);
    setCookie("experience",experience);
    setCookie("level",level);
    setCookie("avatar",counter);

    location.reload();   
}

function howtoplayAlert(){
    alert("Press the + button when you complete an associated activity IRL, watch the plant grow overtime!")
}

//this function adds 4 to experience, calculates the level and sets the cookie and html
function updateLevelExperience(){
    if(cookies == "false" || cookies == false){
        return;
    }

    experience = parseInt(experience) + 4;
    level = experience / LEVELDIVISION;
    level = Math.round(level);
    
    setCookie("experience",experience);
    document.getElementById("experience").innerHTML = "Experience = " + experience;
    setCookie("level",level);
    document.getElementById("level").innerHTML = "Level = " + level;
    
    changeTree();
}

//these "plus" functions are used to increase the corresponding stat, updating cookie and html
function plusStrength(){
    if(cookies == "false" || cookies == false){
        return;
    }
    
    strength = parseInt(strength) + 1;
    setCookie("strength",strength);
    document.getElementById("strength").innerHTML = "Strength = " + strength;
    
    updateLevelExperience();
}

function plusDiscipline(){
    if(cookies == "false" || cookies == false){
        return;
    }
    
    discipline = parseInt(discipline) + 1;
    setCookie("discipline",discipline);
    document.getElementById("discipline").innerHTML = "Discipline = " + discipline;
    
    updateLevelExperience();
    
}

function plusMind(){
    if(cookies == "false" || cookies == false){
        return;
    }
    
    mind = parseInt(mind) + 1;
    setCookie("mind",mind);
    document.getElementById("mind").innerHTML = "Mind = " + mind;
    
    updateLevelExperience();
    
}

function plusFun(){
    if(cookies == "false" || cookies == false){
        return;
    }
    
    fun = parseInt(fun) + 1;
    setCookie("fun",fun);
    document.getElementById("fun").innerHTML = "Fun = " + fun;
    
    updateLevelExperience();
    
}

//is called to update the tree image according to the level cookie
function changeTree(){
    level = getCookie("level");
    level = parseInt(level);

    console.log("level: " + level);

    if(level == 0){
        document.getElementById("treeImage").src = "images/trees/pixel-level0.png";
        return;
    }
    if(level >= 1 && level <= 4){
        document.getElementById("treeImage").src = "images/trees/pixel-level1.png";
        return;
    }
    if(level >= 5 && level <= 9){
        document.getElementById("treeImage").src = "images/trees/pixel-level5.png";
        return;
    }
    if(level >= 10 && level <= 19){
        document.getElementById("treeImage").src = "images/trees/pixel-level10.png";
        return;
    }
    if(level >= 20 && level <= 29){
        document.getElementById("treeImage").src = "images/trees/pixel-level20.png";
        return;
    }
    if(level >= 30 && level <= 39){
        document.getElementById("treeImage").src = "images/trees/pixel-level30.png";
        return;
    }
    if(level >= 40 && level <= 49){
        document.getElementById("treeImage").src = "images/trees/pixel-level40.png";
        return;
    }
    if(level >= 50 && level <= 74){
        document.getElementById("treeImage").src = "images/trees/pixel-level50.png";
        return;
    }
    if(level >= 75 && level <= 99){
        document.getElementById("treeImage").src = "images/trees/pixel-level75.png";
        return;
    }
    if(level >= 100){
        document.getElementById("treeImage").src = "images/trees/pixel-level100.png";
        return;
    }
}

function setAvatar(){
    if(cookies == "false" || cookies == false){
        return;
    }
    counter = parseInt(counter);

    if(counter == 1){
        document.getElementById("avatar").src = "images/avatars/pixel-none-purple.png";
    }
    if(counter == 2){
        document.getElementById("avatar").src = "images/avatars/pixel-guy-brownhair.png";
    }
    if(counter == 3){
        document.getElementById("avatar").src = "images/avatars/pixel-girl-bluehair.png";
    }
    if(counter == 4){
        document.getElementById("avatar").src = "images/avatars/pixel-long-blackhair.png";
    }
    if(counter == 5){
        document.getElementById("avatar").src = "images/avatars/pixel-short-blackhair.png";
    }
    
}


function changeAvatar(){
    if(cookies == "false" || cookies == false){
        return;
    }
    
    counter = parseInt(counter) + 1;
    if(isNaN(counter)){
        counter = 2;
    }
    
    if(counter == 1){
        document.getElementById("avatar").src = "images/avatars/pixel-none-purple.png";
    }
    if(counter == 2){
        document.getElementById("avatar").src = "images/avatars/pixel-guy-brownhair.png";
    }
    if(counter == 3){
        document.getElementById("avatar").src = "images/avatars/pixel-girl-bluehair.png";
    }
    if(counter == 4){
        document.getElementById("avatar").src = "images/avatars/pixel-long-blackhair.png";
    }
    if(counter == 5){
        document.getElementById("avatar").src = "images/avatars/pixel-short-blackhair.png";
    }
    if(counter == 6){
        counter = 0;
        changeAvatar();
    }
    setCookie("avatar",counter);
    
}