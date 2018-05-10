var hiddenNum = getRandomNum();

$(document).ready(initialize());

function initialize() {
    assignClickHandlers();
}

function assignClickHandlers() {
    $('.reset').on('click', resetGame);
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
    if ($('input').val() < 1 || $('input').val() > 100) {
        result('Invalid Please Enter a Number Between 1 -100!!!')
    } else if ($('input').val() > hiddenNum) {
        result('To High!!!');
    } else if ($('input').val() < hiddenNum) {
        result('To Low!!!');
    } else {
        result('You guessed it!!!');
    }
}

function result(string) {
    $('#displayText').text(string);
    if (string === 'You guessed it!!!') {
        $('.reset').text('Play Again?');
    }
    $('h3').addClass('shake');
    setTimeout(function () {
        $('h3').removeClass('shake');
    }, 1000);
}

function resetGame() {
    $('input').val('');
    $('.reset').text('Reset');
    $('#displayText').text('Guess a number between 1 - 100')
    hiddenNum = getRandomNum();
    console.log(hiddenNum);
}