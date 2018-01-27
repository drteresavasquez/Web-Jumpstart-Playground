var imagesOfPlaces = [
    "https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/630/354/75/wdpromedia.disney.go.com/media/wdpro-assets/parks-and-tickets/tours-and-experiences/walt-disney-marceline-to-magic-kingdom-tour/marceline-to-magic-kingdom-00.jpg?28092012125310",
    "https://cdn.pixabay.com/photo/2017/03/14/02/23/grand-canyon-2141754_960_720.jpg",
    "https://c1.staticflickr.com/5/4036/4257661371_c616f9647b_b.jpg",
    //Holiday World
    "http://santaclausind.org/wp-content/uploads/sites/2/2017/07/Holiday-World-FEAT.jpg",
    //sorry for the wall of crap below this :C
    "data:image/jpeg;base64,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", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yjEHZjXEp4zvSWCGJEpLmKySstXOg73cdYKDiKlv6B4bWTIZ_w",
  //Neuschwanstein Castle
    "https://images.pexels.com/photos/40735/neuschwanstein-castle-germany-disney-40735.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    //Disney Sea
    "https://c1.staticflickr.com/4/3096/2875517758_efa286fa47_b.jpg"
    
  ];
  var namesOfPlaces = [
    "Walt Disney World",
    "The Grand Canyon",
    "Six Flags Magic Mountain",
    "Holiday World",
    "Japan",
    "London, Britain",
    "Germany",
    "Tokyo DisneySea"
  ];
  var beenToPlaces = [true, true, true, true, false, false, false, false, false];
  //var addedClasses = ["disney-world", "grand-canyon", "six-flags", "holiday-world", "japan", "london", "germany", "disney-sea"];
  
  
$("#see-places").click(function() {
    $("#placesCards").html(" ");
    for (var i = 0; i < imagesOfPlaces.length; i++) {
      $("#placesCards").append(
        '<div class="allImages"><img src=" ' +
          imagesOfPlaces[i] +
          ' "><h4> ' +
          namesOfPlaces[i] +
          "</h4></div>"
      );
      if (beenToPlaces[i] === true) {
        $("#placesCards").append("<h5>" + "I've been here!" + "</h5>");
      } else {
        $("#placesCards").append("<h5>" + "I want to visit this place!" + "</h5>");
      }
    }
    //  $("img").addClass("allImages")
  });
  
//   showPlaces();
  
  //var showPlacesBeenRadio = $("#places-i-have-been").click(function()){
   //if (beenToPlaces[i] === true){
     //$(namesOfPlaces[i]).show();
  
  
  //var submitClicked = $("#submitBtn").click(function()){
  //if ("#places-i-have-been")
  //}

   var filterCardsForSearchPhrase = function (currentCard) {
    console.log("filterCardsForSearchPhrase");

    var searchValue = $("#searchBar").val().toLowerCase();

    if (!($(currentCard).find("h4").html().toLowerCase().includes(searchValue))) {
        $(currentCard).hide();
    }
}

   $("#search-places").on("submit", function (event) {
    event.preventDefault();

    $(".allImages").each(function (index) {
        var currentCard = $(".allImages")[index];
        console.log("currentCard", currentCard);
        // filterCardsForBeenThere(currentCard);
        filterCardsForSearchPhrase(currentCard);
    })
});