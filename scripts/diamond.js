var enterBttn = document.getElementById('enterBttn');
var input = document.getElementById('numberInput');
var outputSec = document.getElementById('outputSection')

enterBttn.addEventListener('click', palindrome);

var colors = ['darkcyan', 'black']
var index = 0;

function changeColors()
{
    outputSec.style.color = colors[index];
    index++;

    if (index >= colors.length) {
        index = 0;
    }
    setTimeout(changeColors, 450);
};

changeColors();

function palindrome (){
    var inputRows = input.value;

    var output = [];

    for(var x = 1; x <= inputRows; x++){
        for(var j = 1; j <= (2 * x -1) ; j++)
            output.push('*');
        output.push('\n');
    }

    for(var x = inputRows - 1; x >= 1; x--){
        for(var j = 1; j <= (2 * x -1); j++)
            output.push('*');
        output.push('\n');
    }

    outputSec.textContent = output.join('');
};