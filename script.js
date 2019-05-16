

// A $( document ).ready() block.
$(function () {



    // An array of objects with english and german values
    let score = {
        right: 0,
        wrong: 0,
    };

    const germanFlashcards = [
        {
            id: 0,
            germanWord: "kaffee",
            englishWord: "coffee"
        },
        {
            id: 1,
            germanWord: "milch",
            englishWord: "milk"
        },
        {
            id: 2,
            germanWord: "schwarz",
            englishWord: "black"
        },
        {
            id: 3,
            germanWord: "heiß",
            englishWord: "hot"
        },
        {
            id: 4,
            germanWord: "schokolade",
            englishWord: "chocolate"
        },
        {
            id: 5,
            germanWord: "bitte",
            englishWord: "please"
        },
        {
            id: 6,
            germanWord: "zucker",
            englishWord: "sugar"
        },
        {
            id: 7,
            germanWord: "klein",
            englishWord: "small"
        },
        {
            id: 8,
            germanWord: "zum mitnehmen",
            englishWord: "to go"
        },
        {
            id: 9,
            germanWord: "entschuldigung",
            englishWord: "excuse me"
        },

        
    ]

    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Used like so
    tempArray = shuffle(germanFlashcards);
    console.log(tempArray);

    // germanFlashcards.forEach((word) => {
    //     $(`.cards`).append(`<li class="newCard back card "><h2 class="nobox">${word.germanWord}</h2></li>`);
    // })

    tempArray.forEach((word) => {
        console.log(tempArray.word);
        $(`.cards`).append(`<li class="newCard back card "><h2 class="nobox">${word.germanWord}</h2></li>`);
    })


    $(`.back`).on("click", function () {
        //click on a box, reveal the h2 text in german
        $(this).find(`h2`).toggleClass(`nobox`);
        console.log(`reveal the words!`);
        //this is just a test for making sure that the H2 is selected
        $(this).find(`h2`).addClass(`green`);
        console.log(`h2 is green`);
        //it starts with a class of back, but that will be taken off
        //THIS will add a class of front, all other lis will still have a class of back
        $(this).toggleClass(`back`).toggleClass(`front`);
        console.log(`class back is now class front`);

        //if THIS thing that you clicked, now gets a class of "clicked", then it is stored in FlippedCard variable
        $(this).addClass(`clicked`);
        console.log(`class of clicked`);
        //flipcard is an li wth a class of clicked
        const flippedCard = $(`li`).hasClass(`clicked`);
        console.log(`the flipped card is the clicked card!`);
        //if flipCard is true, and has  a class of clicked, then console log it
        if (flippedCard === true){
            console.log(`card is flipped!`)
            //since all the other lis still have a class of back, they can be selected
            //this means that all lis that have a class of back, are not clicked or flipped, so they get a class of blue (which disables the clicking possibility)
            const back = $(`li`).hasClass(`back`);
            console.log(`other cards are not flipped`);
            if (back === true) {
                console.log(`has class of back!`)
                $(`.back`).addClass(`blue`);
                console.log(`other cards can't be clicked!`);
            }
        
        }
        
        //click on the card you just flipped over, because you want to try a different card
        $(`.front`).on("click", function () {
            $(this).removeClass(`clicked`);
            $(`li.back`).removeClass(`blue`);
        })

        function keepScore(answer) {
            console.log(score);
            if (answer === `right`){
                score.right = score.right + 1;
            } else {
                score.wrong = score.wrong + 1;
            }
            console.log(score);
        }

        $("form").on("submit", function (event) {
            //takes away the default function
            event.preventDefault();
            //when you submit the match, the flipped card is taken out of play
            $(`li.front`).addClass(`complete`);
             //when you submit the match, the other cards that were inactive come back into play
            $(`li.back`).removeClass(`blue`);
   
            //saves the user input
            let userInput = $("input").val();
            console.log(userInput);

            //this finds the german text between the h2s
            let listItem = $(`.clicked`).find(`h2`).text();
            console.log(listItem);

            //this variable takes the listItem above and compares it to the germanWord for each array object but it prints the associated english word once it finds a match
            //You need to put this in a function or something so that you can transfer it to the submit event listener
            //How can I store the result of this forEach loop in a variable that I can use?
            let thisCard = germanFlashcards.filter((property) => {
                // console.log(listItem, property.germanWord, listItem === property.germanWord)
                // if (listItem === property.germanWord) {
                //     // return (`${property.englishWord}`);
                //     listItem = `${property.englishWord}`;
                // }
                if (listItem === property.germanWord){
                    return property.englishWord
                }
            })
            thisCard = thisCard[0].englishWord;


            if (userInput.toLowerCase() === thisCard){
                keepScore(`right`);
                alert(`match!!!`);
                $(`li`).removeClass(`blue`);
                $(`li`).removeClass(`clicked`);
                $(`h2`).addClass(`nobox`);
                $("input").val("");
            } else {
                keepScore(`wrong`);
                alert(`No match`);
                $(`h2`).addClass(`nobox`);
                $(`li`).removeClass(`clicked`);
                $("input").val("");
            }   

            if (score.right + score.wrong === 6){
                alert(`you're done! you got ${score.right} right!`)
            }
            
       
        });


        // DON'T DELETE THIS, THIS IS HOW YOUR CODE WORKS
    });

        
        //when you click on a box something happens
        //probably it finds out the index of this object in the array germanFlashcards
        //and thne probably it saves the number of the index in a variable so that you can use it in the next function 
})
    









$(function(){
    
});