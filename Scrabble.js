//taking one array first to figure out logic, will modify later
var words1 = ["purple", "pulp", "rue", "pure"];      
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
