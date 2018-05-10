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
    $('input').keydown(function (event) {
        if (event.which === 13) {
            guessSubmited();
        }
    })
    $('.guess').on('click', guessSubmited);
    console.log(hiddenNum);
}

function getRandomNum() {
    return Math.ceil(Math.random() * 100);
}

function guessSubmited() {
    if ($('input').val() > hiddenNum) {
        result('To High!!!');

    } else if ($('input').val() < hiddenNum) {
        result('To Low!!!')
    } else {
        result('You guessed it!!!')
    }
}

function result(string) {
    $('#displayText').text(string);
    if (string === 'You guessed it!!!') {
        $('.reset').text('Play Again?');
    }
    $('#displayText').addClass('shake');
    setTimeout(function () {
        $('#displayText').removeClass('shake');
    }, 1000);
}