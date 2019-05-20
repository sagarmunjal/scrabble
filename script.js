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
generateTable('paletteAvailable', 1, 6);
generateTable('paletteSubmit', 1, 7);



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

    // generate a 1x6 table
    generateTable('paletteAvailable', 1, 6);

    // content 

    available = words[gameId][0];
    available = available.split('');
    available = available.sort((a,b)=> {if(a>b) {return 1 }else if(a<b) {return -1 }else {return 0} } )
    available = available.map(data =>{
        return {
            value:data,
            available:true
        }
    })

    setDataInAvailable('paletteAvailable', available);

    generateTable('paletteSubmit',1,7);
}


    function setDataInAvailable(){
        setContent("paletteAvailable",available);

        var count = 0;
        var paletteAvailableButtons = document.querySelectorAll(`[data-table='paletteAvailable']`);
        available.forEach(function(data){
            data.button = paletteAvailableButtons[count++]
        })
        available.forEach(function(data){
            console.log(data)
            data.button.addEventListener('click',handleButtonClick);
        })
    }

    function setContent(id, content, direction='a', startx=1, starty=1){
        
        if(id=="paletteAvailable"){
            for(i=0;i<=5;i++){
                let cell = document.querySelectorAll(`[data-table='${id}'][data-x='${i+1}'][data-y='1']`)
                cell[0].innerHTML = ""
                cell[0].classList.remove('disabledClick')
            }
        }
        if(id == 'paletteSubmit'){
            // need to clean the table
            for(i = 0; i<=6 ; i++){
                let cell = document.querySelectorAll(`[data-table='${id}'][data-x='${i+1}'][data-y='1']`);
                cell[0].innerHTML = ''
            }
        }

        console.log(`${content[0]}`)

        var letterBoxesData = content.map((letter)=>{
            return {
                x: (() => {
                    if(direction == 'a')
                        return startx++
                    else
                        return startx
                })(),
                y: (() => {
                    if(direction == 'd')
                        return starty++
                    else
                        return starty 
                })(),
                val: letter.value,
                available: letter.available,
            }
        })
    




        // filling this data in the DOM 
            letterBoxesData.forEach(function(letterBoxData){
                var letterBoxesDOM = document.querySelectorAll(`[data-table='${id}'][data-x='${letterBoxData.x}'][data-y='${letterBoxData.y}']`)

                if( letterBoxData.available == false ){
                    letterBoxesDOM[0].classList.add('disabledClick');
                    letterBoxesDOM[0].removeEventListener('click',handleButtonClick)
                }
                letterBoxesDOM[0].innerHTML = letterBoxData.val;
                

            })
    }

// handle clicking the letters button to submit
        function handleButtonClick(e){
            attemptToSubmit(e.target);
        }

deleteButton = document.getElementById('delete')

    function handleDeleteClick(){
        unmove();
    }

    function unmove(){
        let popped = attempt.pop();
        available.forEach((data)=>{
            if(data.button == popped.target){
                data.available = true
            }
        })
        if(attempt.length == 0){
            // disbale delete button
            document.getElementById('delete').classList.add('disabledClick');
            deleteButton.removeEventListener('click', handleDeleteClick);
        }

        // set new content
        setContent('paletteSubmit', attempt);

        setDataInAvailable();

        // logic for highlighting
        let length = attempt.length;
        if(length >=0 && length <= 6){
            document.querySelectorAll('[data-table="paletteSubmit"]')[length].classList.add('nextLetter')
        }
        if((length+1) >=0 && length+1 <= 6){
            document.querySelectorAll('[data-table="paletteSubmit"]')[length+1].classList.remove('nextLetter')
        }
    }

// ------------------------------------------------------------------------------------------------------------------------
        // attempt to submit panel handles all the button clicks from the available panel then added to the submit panel
        function attemptToSubmit(target){
            console.log(`finally....`)
            if(target){
                let val = target.innerHTML;
                console.log(val)
                available.forEach((data)=>{
                    if(data.button == target){
                        data.available = false
                        attempt.push({value:val,target:data.button})
                    }
                })
            }
            if(attempt.length > 0) {
                // enable delete button
                document.getElementById('delete').classList.remove('disabledClick');
                deleteButton.addEventListener('click', handleDeleteClick);
            }                
            
            // logic for highlighting the correct box in Palette B
            let length = attempt.length;
            if(length >=0 && length <= 6){
                document.querySelectorAll('[data-table="paletteSubmit"]')[length].classList.add('nextLetter')
            }
            if((length-1) >=0 && length-1 <= 6){
                document.querySelectorAll('[data-table="paletteSubmit"]')[length-1].classList.remove('nextLetter')
            }

            setContent('paletteSubmit', attempt)
            setContent('paletteAvailable', available)

        }



// ------------------------------------------------------------------------------------------------------------------------



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