var hiddenNum = getRandomNum();

$(document).ready(initialize());

function initialize() {
    assignClickHandlers();
    console.log(hiddenNum)
}

function assignClickHandlers() {
    $('.reset').on('click', function () {
        //needs to reset game
    });
    $('.guess').on('click', guessSubmited);
}

function getRandomNum() {
    return Math.ceil(Math.random() * 100);
}

function guessSubmited() {
    console.log($('input').val());
    if ($('input').val() > hiddenNum) {
        $('.displayText').text('to high')
    } else if ($('input').val() < hiddenNum) {
        $('.displayText').text('to low')
    } else {
        $('.displayText').text('you guess it')
    }
}