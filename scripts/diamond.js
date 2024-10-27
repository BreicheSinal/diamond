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
    setTimeout(changeColors, 700);
};

changeColors();

function palindrome (){
    var inputRows = input.value;
    console.log(inputRows);

    var output = [];

    //pattern of *(1,3,5...)

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

    //console.log(output.join(''));
    outputSec.textContent = output.join('');
};

//C++ LOGIC
/*
 for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= rows - i; j++) 
            cout << " ";
        
        for (int j = 1; j <= (2 * i - 1); j++)
            cout << "*";
        
        cout << endl;
    }

for (int x = inputRows - 1; x >= 1; x--) {
    for (int y = 1; y <= inputRows - x; y++) {
        cout << ' '; 
    }

    for (int j = 1; j <= (2 * x - 1); j++) {
        cout << '*';
    }

    cout << endl; 
}
*/ 
