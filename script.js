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
    ]

// A $( document ).ready() block.
//In the document ready, I need the 6 items in the array to associate themselves in a random order with the 6 items on the page
//I need the germanWord
$(document).ready(function () {
    //randomizer function for numbers
    function randomIndex(optionsArray){
        const index = Math.floor(Math.random() * optionsArray.length);
        return optionsArray[index]
    }
    //trying to get the randomizer to impact the germanFlashcards array index.  I want a random number in the index each time:
    // i.e. germanFlashcards[3], germanFlashcards[0] etc
    const optionsDisplay = randomIndex(germanFlashcards);
    const newIndex = optionsDisplay.id;
    console.log(newIndex);

        $(".cards").on("click", function (){
            $(this).html(`<h2>${germanFlashcards[newIndex].germanWord}</h2>`);
            //so the problem here is, you get the same newIndex each time because there's no loop
            //you need a loop
        })
    });


        



// //     for (let i = 0; i <= germanFlashcards.length; i++){
// //         const shuffleCard = germanFlashcards[i];
// //         if ()
// //     }
// //     $(".cards").html(`<h2>${germanFlashcards[2].germanWord}</h2>`);
// // });



// $(function (){
//     $(".cards").on("click", function(){
//         //when you click on a box something happens
//         //probably it finds out the index of this object in the array germanFlashcards
//         //and thne probably it saves the number of the index in a variable so that you can use it in the next function 
//     })
// });

// $(function(){
//     $("form").on("submit", function(event){
//         event.preventDefault();

//         let userInput = $("input").val();

//         console.log(userInput);

//         //sub the hardcoded index number below with a variable from the function above?
//         let flipCard = $(germanFlashcards[3].englishWord);

//         console.log(flipCard);
//         //why does it stop working right here?
//         if (userInput === flipCard) {
//             debugger;
//             console.log("match!");
//         }
//     })
