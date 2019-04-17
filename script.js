//taking one array first to figure out logic, will modify later
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

/*

function shuffle(){
    //word has the letters of first word in chosen array.
    var word = words1[0].split('');
    var counter = word.length - 1;
    while(counter>=0){
        //sw value will determine the index to swap
        var sw = Math.ceil(Math.random() * counter);
        var temp = word[0];
        word[0] = word[sw];
        word[sw] = temp;
        counter--;
    }
    console.log(word);
}
shuffle();

// how to generate the table to render the DOM 
// Stage 1 
function createTable(){
    var body = document.getElementsByTagName("body")[0];
    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
        
    for (var j = 0; j <= 2; j++) {
        var row = document.createElement("tr");
            for (var i = 0; i < 2; i++) {
            
            }
        
    }
    
}

*/


var gameId;
function newGame(){

    // write logic of creating a randomNumber on the basis of the length of the words array. 
    gameId === 0 ? gameId = 1 : gameId = 0;
    createTable(generateTable('crossword', 7, 7, locations[gameId][0]));

    generateTable('paletteA', 1, 6);
    // content
        available = words[gameId][0];
        available = available.split('');
        // shuffle
        available = available.sort((a,b)=> {if(a>b) {return 1 }else if(a<b) {return -1 }else {return 0} } );
        available = available.map((data) => {
            return {
                value: data,
                available: true
            }
        })
        
}

newGame();
newGame();
newGame();

