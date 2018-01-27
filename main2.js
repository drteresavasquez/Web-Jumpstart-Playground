console.log("main.js");

var placeNames = ["Motherboy XXX", "A Boat", "The Hospital", "Jail", "The Moon", "The Ocean"];

var placeImages = ["https://vignette3.wikia.nocookie.net/arresteddevelopment/images/e/e0/Arrested_Development_-_Motherboy_theme_tune/revision/latest/scale-to-width-down/600?cb=20141206202315", "http://completepr.net/wp-content/uploads/2016/04/buster_bluth.jpg", "http://vignette1.wikia.nocookie.net/arresteddevelopment/images/e/e7/2x12_Hand_to_God_%2817%29.png/revision/latest?cb=20130123233400", "https://m.popkey.co/afdd28/DD8r_f-maxage-0.gif", "https://i2.wp.com/upload.wikimedia.org/wikipedia/commons/0/09/Apollo_14_Shepard.jpg", "http://thesecondtake.com/wp-content/uploads/2013/05/ad-seal.jpg"];

var haveIBeenThere = [true, true, true, true, false, true];

var printCards = function () {
    var domHtmlString = "";
    for (var i = 0; i < placeNames.length; i++) {
        domHtmlString += '<div class="card places-card">';
        domHtmlString += '<div class="image-container">';
        domHtmlString += '<img src="' + placeImages[i] + '">';
        domHtmlString += '</div>';
        domHtmlString += '<div class="description-container">';
        domHtmlString += '<h3 class="place-title">' + placeNames[i] + '</h3>';
        if (haveIBeenThere[i]) {
            domHtmlString += '<p class="been-there">Been there!</p>';
        } else {
            domHtmlString += '<p class="been-there">Want to go there!</p>';
        }
        domHtmlString += '</div>';
        domHtmlString += '</div>';
    }

    $("#place-card-holder").append(domHtmlString);
};

printCards();


$("#search-places").on("submit", function (event) {
    event.preventDefault();
    reset();

    $(".places-card").each(function (index) {
        var currentCard = $(".places-card")[index];
        console.log("currentCard", currentCard);
        filterCardsForBeenThere(currentCard);
        filterCardsForSearchPhrase(currentCard);
    })

    $(".place-card-holder").fadeOut(0);
    $(".place-card-holder").fadeIn(500);
});

var filterCardsForBeenThere = function (currentCard) {
    console.log("filterCardsForBeenThere");

    var beenThereFromSearch = $("input[name=been-there]:checked").val();

    var beenThereValue = $(currentCard).find(".been-there").html();
    var beenThereBooleanValue;

    if (beenThereValue === "Been there!") {
        beenThereBooleanValue = true;
    } else {
        beenThereBooleanValue = false;
    }

    if ((!(beenThereBooleanValue.toString() == beenThereFromSearch)) && beenThereFromSearch) {
        $(currentCard).hide();
    }

}

var filterCardsForSearchPhrase = function (currentCard) {
    console.log("filterCardsForSearchPhrase");

    var searchValue = $("#search-field").val().toLowerCase();

    if (!($(currentCard).find(".place-title").html().toLowerCase().includes(searchValue))) {
        $(currentCard).hide();
    }
}

var reset = function () {
    $(".places-card").each(function (card) {
        $($(".places-card")[card]).show();
    })
}