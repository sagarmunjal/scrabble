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