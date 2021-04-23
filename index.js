
//setting up click events
$(".aboutMeClick").add(".portfolioClick").add(".contactClick").on("click", function(){
    var navItem = $(this).text()

    navItem = navItem.toLowerCase()

    console.log(navItem)


    displayStuff(navItem);

})


//sorting out using switch statements
function displayStuff (navItem){
    switch (navItem) {
        case "about me":
            console.log("test")
            $(".aboutMe").attr("hidden", false)
            $(".portfolio").attr("hidden", true)
            $(".contact").attr("hidden", true)
            displayAbout()
            break;
        case "portfolio":

            $(".aboutMe").attr("hidden", true)
            $(".portfolio").attr("hidden", false)
            $(".contact").attr("hidden", true)
            // console.log("other test")
            displayPort()
            break;
        case "contact":
            console.log("contact test")

            $(".aboutMe").attr("hidden", true)
            $(".portfolio").attr("hidden", true)
            $(".contact").attr("hidden", false)
            displayContact()
            break;
    }
}


function displayAbout (){

    var aboutMeLabel = "About Me"

    $(".label").text("")

    $(".label").append(aboutMeLabel)
}

function displayPort() {

    var portLabel = "Portfolio"

    console.log("portfolio test")

    $(".label").text("")

    $(".label").append(portLabel)

}

function displayContact(){
    var contactLabel = "Contact Me"

    console.log("contect test")
    
    $(".label").text("")

    $(".label").append(contactLabel)

    
}




//Target H2 to change whats viewing
//target a card on the index to switch info showing
//makes images view properly or something i dunno
//working links to projects that view need 3
//