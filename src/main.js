var hiddenNum = getRandomNum();

$(document).ready(initialize());

function initialize() {
    assignClickHandlers();
}

function assignClickHandlers() {
    $('.reset').on('click', function () {
        //needs to reset game
    });
    $('.guess').on('click', function () {
        // submit guess
    })
}

function getRandomNum() {
    return Math.ceil(Math.random() * 100);
}