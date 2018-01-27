console.log("requests");

let vols = ["Teresa", "Trinity", "Remle", "Gabby", "Olivia", "Gene"];

let pendingVols = ["Rat", "Tails", "Bacon", "Brad"];
let pendingTimes = ["2:00-5:00", "3:00 - 6:00", "6:30-7:34", "5:00-8:00"];

$(".available-volunteers").hide();
$(".pending-requests").hide();

vols.forEach((item) => {
    $(".available-volunteers").append(
        `<div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-header">${item}</div>
            <div class="card-body text-success">
                <p class="card-text">${item}'s request description</p>
            </div>
        </div>`
    );
});

pendingVols.forEach((vol) => {
    pendingTimes.forEach((time) => {
        $(".pending-requests").append(
            `<div class="card border-info mb-3" style="max-width: 18rem;">
                <div class="card-header">${vol}</div>
                <div class="card-body text-info">
                <p class="card-text">Requested Time: ${time}</p>
                </div>
            </div>`
        );
    });
});

$(".volunteers-button").click(function () {
    $(".available-volunteers").toggle();
});

$(".requests-button").click(function () {
    $(".pending-requests").toggle();
});
