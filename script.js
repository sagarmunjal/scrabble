var words = [
    ["purple", "pulp", "rue", "pure"], // game #1
    ["banish", "bash", "nab", "bias"] // game #2
];
var locations = [
    ["xxxxXxxxxxxXxxxxxxXxxxXXXXXXxXxXxxxxXxXxxxxXxxxxx",
        "2,4,a", "5,1,d", "4,4,d", "2,4,d"], // game #1
    ["xxxXxxxxxXXXXxXxxXxxxXxxXxxxXXXXxxxxxxXxxxxxxxxxx",
        "4,1,d", "3,2,a", "1,3,d", "1,5,a"] // game #2
];

attempt = [];
available = [];
filled = [];

// gnerate inital tables
generateTable('crossword', 7, 7);
generateTable('paletteA', 1, 6);
generateTable('paletteB', 1, 7);



function checkIfWon(){
    won = true;
    words[gameId].forEach((word) => {
        if(filled.indexOf(word) == -1)
            won = false
    })
    
    return won;
}


/* ----------------------------------------------------------------------------------------------------------
    @param id
    @param rows
    @param columns
    @param positions String 
*/
function generateTable(id, rows, columns, positions){
    let tableref = document.getElementById(id);
    let tbl = [];
   
    let positionArr = []

    if(positions){
        for(var k =0; k<7; k++){
            // follow hint positionArr in the end
            positionArr.push(positions.split('',7))
            positions = positions.substr(7)
        }
    }

    for ( var i =1; i<= rows; i++) {
        tbl.push("<tr>");
            for (var j = 1 ; j<= columns; j++){
                className = ''
                if(positionArr.length > 0 && positionArr[i-1][j-1] == 'X'){
                    className = 'hasLetter'
                }
                tbl.push(`<td data-table=${id} data-x=${j} data-y=${i} class="${className }">   </td>`)
            }
        tbl.push("</tr>")
    }

    tableref.innerHTML = tbl.join('');
}

function handleShuffleClick(){
    // this function takes up the array of element and returns a shuffled string everytime when invoked.
    // your assignment is to log the shuffled string in the console, everytime the shuffle button is pressed
}

function handlePlaceClick(){

}

function move(target){
    if(target){
        let val = target.innerHTML;
        console.log(val);
    }
}

var gameId;

function pickAGame(){
    do{
        random = Math.floor(locations.length * Math.random())   
    }while(random == gameId){
        gameId = random
        game = locations[random]
        console.log(game);
        return game;
    }
}

function newGame(){
    attempt = [];
    // remove the disabled classes from 
    document.getElementById('shuffle').classList.remove('disabledClick');
    shuffle.addEventListener('click', handleShuffleClick);
    document.getElementById('place').classList.remove('disabledClick');
    //placeButton.addEventListener('click', handlePlaceClick);

    // pick a game returns any one game locations
    game = pickAGame();

    // gnerate 7x7 table
    generateTable('crossword', 7, 7, game[0]);


}



// ------------------------------------------------------------------------------------------------------------------------
            // Set event listeners
            newGameButton = document.getElementById('new-game')
            newGameButton.onclick = () => {
                    newGame()
            }  
// --------------------------------------------------------------------------------------------------------






// HINTS SECTION 
// Run the hints below after uncommenting in a separate about:blank page


/*-----------------------------------------

Hint positionArr 
    var locations = [
        ["xxxxXxxxxxxXxxxxxxXxxxXXXXXXxXxXxxxxXxXxxxxXxxxxx",
            "2,4,a", "5,1,d", "4,4,d", "2,4,d"], // game #1
        ["xxxXxxxxxXXXXxXxxXxxxXxxXxxxXXXXxxxxxxXxxxxxxxxxx",
            "4,1,d", "3,2,a", "1,3,d", "1,5,a"] // game #2
    ];

    var positions = locations[0][0];

    var positionArr = [];

    for(i=0;i<7;i++){
        positionArr.push(positions.split('',7));
        // cuts the first 7 characters fo the string
        console.log(positions = positions.substr(7));
    }
    console.log(positionArr);
------------------------------------------*/