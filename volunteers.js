console.log("volunteers");

console.log($("#select-volunteer-request").val());
$(".volunteer-form").hide();
$(".request-form").hide();

$("#selection").on("submit", function(event){
    event.preventDefault();

    if($("#select-volunteer-request").val() === "volunteer"){
        console.log("VOL");
        $(".volunteer-form").show();
        $(".request-form").hide();
    }else{
        console.log("NOPE");
        $(".volunteer-form").hide();
        $(".request-form").show();
    }
});