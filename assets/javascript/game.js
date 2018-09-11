var wins = 0;
var losses = 0;
var targetNumber = getRandomInt;
var target = targetNumber();
var crystalNumber = getRandomIntCrystal;
var red = crystalNumber();
var blue = crystalNumber();
var yellow = crystalNumber();
var purple = crystalNumber();
var total = 0;

function getRandomIntCrystal() {
    return Math.floor(Math.random() * (12 - 1)) + 1;
}

function getRandomInt() {
    return Math.floor(Math.random() * (120 - 19)) + 19;
}


$(document).ready(function () {
    $("#randomNumber").html(target);
    $("#winsAndLosses").html("Wins: " + wins + " Losses: " + losses);
    $("#totalScore").html(total);
    $(".redCrystal").click(function () {
        $(".redCrystal").val(red);
        total = total + red;
        $("#totalScore").html(total);
        if (total ===  target) {
            total = 0;
            target = targetNumber();
            red = crystalNumber();
            blue = crystalNumber();
            yellow = crystalNumber();
            purple = crystalNumber();
            $("#totalScore").html(total);
            $("#randomNumber").html(target);
            wins = wins + 1;
            $("#winsAndLosses").html("Wins: " + wins + " Losses: " + losses);
        }
        if (total > target) {
            total = 0;
            target = targetNumber();
            red = crystalNumber();
            blue = crystalNumber();
            yellow = crystalNumber();
            purple = crystalNumber();
            $("#totalScore").html(total);
            $("#randomNumber").html(target);
            losses = losses + 1;
            $("#winsAndLosses").html("Wins: " + wins + " Losses: " + losses);
        }
    });
    $(".blueCrystal").click(function () {
        $(".blueCrystal").val(blue);
        total = total + blue;
        $("#totalScore").html(total);
        if (total ===  target) {
            total = 0;
            target = targetNumber();
            red = crystalNumber();
            blue = crystalNumber();
            yellow = crystalNumber();
            purple = crystalNumber();
            $("#totalScore").html(total);
            $("#randomNumber").html(target);
            wins = wins + 1;
            $("#winsAndLosses").html("Wins: " + wins + " Losses: " + losses);
        }
        if (total > target) {
            total = 0;
            target = targetNumber();
            red = crystalNumber();
            blue = crystalNumber();
            yellow = crystalNumber();
            purple = crystalNumber();
            $("#totalScore").html(total);
            $("#randomNumber").html(target);
            losses = losses + 1;
            $("#winsAndLosses").html("Wins: " + wins + " Losses: " + losses);
        }
    });
    $(".yellowCrystal").click(function () {
        $(".yellowCrystal").val(yellow);
        total = total + yellow;
        $("#totalScore").html(total);
        if (total ===  target) {
            total = 0;
            target = targetNumber();
            red = crystalNumber();
            blue = crystalNumber();
            yellow = crystalNumber();
            purple = crystalNumber();
            $("#totalScore").html(total);
            $("#randomNumber").html(target);
            wins = wins + 1;
            $("#winsAndLosses").html("Wins: " + wins + " Losses: " + losses);
        }
        if (total > target) {
            total = 0;
            target = targetNumber();
            red = crystalNumber();
            blue = crystalNumber();
            yellow = crystalNumber();
            purple = crystalNumber();
            $("#totalScore").html(total);
            $("#randomNumber").html(target);
            losses = losses + 1;
            $("#winsAndLosses").html("Wins: " + wins + " Losses: " + losses);
        }
    });
    $(".purpleCrystal").click(function () {
        $(".purpleCrystal").val(purple);
        total = total + purple;
        $("#totalScore").html(total);
        if (total ===  target) {
            total = 0;
            target = targetNumber();
            red = crystalNumber();
            blue = crystalNumber();
            yellow = crystalNumber();
            purple = crystalNumber();
            $("#totalScore").html(total);
            $("#randomNumber").html(target);
            wins = wins + 1;
            $("#winsAndLosses").html("Wins: " + wins + " Losses: " + losses);
        }
        if (total > target) {
            total = 0;
            target = targetNumber();
            red = crystalNumber();
            blue = crystalNumber();
            yellow = crystalNumber();
            purple = crystalNumber();
            $("#totalScore").html(total);
            $("#randomNumber").html(target);
            losses = losses + 1;
            $("#winsAndLosses").html("Wins: " + wins + " Losses: " + losses);
        }
    });
});