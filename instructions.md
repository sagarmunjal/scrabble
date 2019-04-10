---------------------------------------------------------
Note: There are requirements for all programming assignments
listed in the syllabus.  You must follow each of them.  They
will count against your grade even though they are not listed
in the assignment rubric.
---------------------------------------------------------

Xelkalai is fascinated with all Terran things.  A few years back
he discovered a unique-to-Earth concept, the anagram.  Back then
he commissioned some of your peers to write a web application
so he could play with anagrams.  Among the long list of things
he likes about this planet (puzzles, gambling, etc.) is when
he can make money doing those things!

Not being bound by Terran-based ethics, he wants to sell
an app to mimic the game "Word Crossy".  This is a cross
between crossword puzzles and anagrams.
Still unfamiliar with Terran-based systems, he has commissioned
you to write a universal web application to play "Drow Syscro"
[he thinks he's funny/clever].

Requirements:
    - You are to implement a simple web application in HTML/
JavaScript.

    - Your application shall have some unique name (ie, make up a
      name) - this is for "security" purposes [Why?]
Specifications:
    - You shall produce (2) total files:
        1) an HTML file containing the appropriate JavaScript
        3) a *text* file named P2.txt  (NOT a PDF file, nor a Word
file!)
    1) HTML file shall:
        - have your name(s) somewhere near the top, as a comment.
        - be a complete HTML document with appropriate HTML tags.
        - not call/access/reference another website
        - have JavaScript that simulates the Word Crossy game in
          the requirements listed below:
 serialized
you shall use the following two data-structures:
var words = [
     ["purple", "pulp", "rue", "pure"],  // game #1
     ["banish", "bash", "nab", "bias"]   // game #2
 ];
 var locations = [
     ["xxxxXxxxxxxXxxxxxxXxxxXXXXXXxXxXxxxxXxXxxxxXxxxxx",
      "2,4,a", "5,1,d", "4,4,d", "2,4,d"],     // game #1
     ["xxxXxxxxxXXXXxXxxXxxxXxxXxxxXXXXxxxxxxXxxxxxxxxxx",
         "4,1,d", "3,2,a", "1,3,d", "1,5,a"]   // game #2
];
 "words" contains the solutions to that individual game's
 anagrams.  You can assume the first word contains all the
 letters for the anagrams.  Do not assume there are only
 4 words to a solution!
 "locations" contains two pieces of information:  a
 7x7 matrix where lowercase x denotes a empty place in the
 board and an uppercase X denotes a place occupied by a
 letter from a word in the "words" list.  The second part
 of the array are coordinates in the 7x7 matrix of the
 beginning of the word and "a" to denote across, and "d"
 to denote down.
 Your HTML document shall contain the following "items".
 Note that an item may contain multiple HTML elements!
 1) a "New Game" button at the top
 2) a 7x7 table of elements (the game board)
 3) a 1x6 table of elements (the anagram letters)
    1 button associated called "Shuffle"
 4) a 1x7 table of elements (the guessing 'palette')
                 [NOTE: technically 7 elements are not
                 since it doesn't hurt, just leave it at 7]
    2 buttons associated called "Try/Place", and "Delete"
 5) an element for in-game messages to the player.
 Your program will present the "New Game" button.  Once
 clicked, your program shall begin the game.  Note, you
 can choose to "layout" the HTML elements manually
 beforehand, or you can create them via JavaScript.
 Your program will start with a 7x7 table of elements.
 The empty elements shall be one color, the elements
needed, but

 "Delete"
containing letters shall be another.  Your choice of
colors.  The "New Game" button shall randomly
pick a game (note that while I only gave you 2
example games, your program should randomly pick
between the number of games in the arrays!
Once the game board is created (or updated) with the
spots denoted, the anagram letters are to be sorted
alphabetically and placed in the 1x6 table.
The first letter of the 1x7 "palette" is changed
in a way to signal "select a letter here".
At this point all 6 letters of the anagram are clickable.
The "Shuffle" button is clickable.  The "Place" and
buttons are clickable.
Your program now begins an algorithm as follows:
"Shuffle" clicked -> shuffles the anagram letters
in some random order (helps the player potentially
see a word).
an individual letter is clicked, then the current
'active' letter in the palette is filled in AND
that letter is now inactive (you can't select the
same letter!)  The next space in the palette is
denoted as 'active'.
"Delete" clicked -> removes last letter from palette
and reactivates is in the anagram letters
"Place" clicked -> this checks the word created to
see if it is in the "words" array.
     If it is NOT: display appropriate message
     If it is:  fill word in game puzzle and reset
                palette to blank.
                If all words are found, denote
                that the puzzle is solved and
                deactivate everything but "New Game".
2) Your P2.txt file shall:
    - contain your name(s).
    - contain any references you used outside of material
      I presented.
    - contain any collaboration that you had with others

students not in your group.
        - the URL for your project (make sure this is correct!)
        - a brief description of the project
        - answer the following questions:
            - Why in the writeup did I say it doesn't really
              mean anything that this project needs to run on
              the www.cs.uky.edu server?
            - Give a reason why I told you to pick a random
              name for your file.  Think, why THIS time when
              I am usually very strict about what you name
              files?
            - If this were a real app to really challenge players,
              why is it silly to write this in JavaScript with
              the data-structures I required?
            - Why can't we select a game from a form, send it
              to a CGI to output the game and fix the problem
              in the previous question?
What to turn in:
    Submit a ZIP file to Canvas.  Do not create an additional
    directory in your ZIP file, just a ZIP file of the 2 files
    above: an HTML/JavaScript file, and the P2.txt text file.
    Call this file P2_lname.zip where lname is your last name.
    If in a group use P2_lname1lname2.zip.
Rubric:
    HTML form is properly constructed:
    JavaScript code (total):
        - does not produce console errors:   10
        - displays game elements properly:   20
        - highlights word placements:         5
        - starts game properly, activating
           appropriate elements only:        10
        - sorts letters from anagram:         5
        - outputs correct/useful messages:   10
        - allows user to select letters:     15
        - "Delete" button correct:            5
        - "Shuffle" button correct:           5
        - "Place" button correct:             5
        - solving puzzle works:               5
15 points
95 points
Text file has all information required:
------------------------------------------------------
 15 points
125 points
