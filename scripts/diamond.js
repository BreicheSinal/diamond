var enterBttn = document.getElementById('enterBttn');
var input = document.getElementById('numberInput');
var outputSec = document.getElementById('outputSection')

enterBttn.addEventListener('click', palindrome);

function palindrome (){
    var inputRows = input.value;
    console.log(inputRows);

    var output = [];

    for(var x = 1; x <= inputRows; x++){
        for(var y = 1; y <= inputRows - x ; y++)
            output.push(' ');
        
        for(var j = 1; j <= (2 * x - 1); j++)
            output.push('*');
        output.push('\n');
    }

    for(var x = inputRows - 1; x >= 1; x--){
        for(var y = 1; y <= inputRows - x ; y++)
            output.push(' ');
        
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
