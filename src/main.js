var hiddenNum = getRandomNum();

$(document).ready(initialize());

function initialize() {
    assignClickHandlers();
}

function assignClickHandlers() {
    $('.reset').on('click', function () {
        $('input').val('');
        $('.reset').text('Reset');
        hiddenNum = getRandomNum();
        console.log(hiddenNum);
    });
    $('.guess').on('click', guessSubmited);
    console.log(hiddenNum);
}

function getRandomNum() {
    return Math.ceil(Math.random() * 100);
}

function guessSubmited() {
    if ($('input').val() > hiddenNum) {
        $('.displayText').text('to high')
    } else if ($('input').val() < hiddenNum) {
        $('.displayText').text('to low')
    } else {
        $('.displayText').text('you guess it');
        $('.reset').text('Play Again?');
    }
}