//Adding and Removing Elements with jQuery

//$("h1").before("<button>New</button>");
//$("h1").after("<button>New</button>");
//$("h1").prepend("<button>New</button>");


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


//from
//for (var i = 0; i<5; i++) {
  //document.querySelectorAll("button")[i].addEventListener("click", function() {
    //document.querySelector("h1").style.color = "purple";
  //});
//}

//To
//$("button").click(function() {
  //$("h1").css("color", "purple");
//})


//$("h1").attr("class");
//$("a").attr("href", "https://www.yahoo.com");

//console.log($("img").attr("src"));

//$("h1").addClass("big-title margin-50");

//$("button");
//$("button").html("<em>Hey</em>");
//$("button").text("Don't click me");
