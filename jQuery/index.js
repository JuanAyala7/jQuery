// Pre-Built Website Animations with jQuery

//$("button").on("click", function (){
//  $("h1").hide();
//});




//Adding and Removing Elements with jquery

//$("h1").before("<button>New</button>");
//$("h1").after("<button>New</button>");
//$("h1").prepend("<button>New</button>");
//$("h1").append("<button>New</button>");

//using these ^ will give you more control over where newly
//created HTML elements are going to go.


//To remove all of the button elements ^ inside the
//current webpage, use the following :

//$("button").remove();



// Usual way of adding an Event Listener
//$(document).click(function(event) {
  //$("h1").text(event.key);
//});



//Event Listener withy jQuery
//$("h1").on("click", function(){
  //$("h1").css("color", "purple");
//});




//Adding an Event listener to an element with jQuery
//$("h1").click(function() {
  //$("h1").css("color", "purple");
//});




//from (querySelector)
//for (var i = 0; i<5; i++) {
  //document.querySelectorAll("button")[i].addEventListener("click", function() {
    //document.querySelector("h1").style.color = "purple";
  //});
//}


//To (jQuery)
//$("button").click(function() {
  //$("h1").css("color", "purple");
//})


//$("h1").attr("class");
//$("a").attr("href", "https://www.yahoo.com");
//console.log($("img").attr("src"));
