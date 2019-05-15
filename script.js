

// A $( document ).ready() block.
$(function () {
    
    // An array of objects with english and german values
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

    germanFlashcards.forEach((word) => {
        $(`.cards`).append(`<li class="newCard front card "><h2 class="nobox">${word.germanWord}</h2></li>`);
    })


    $(`.newCard`).on("click", function () {
        $(this).find(`h2`).toggleClass(`nobox`);
        $(this).addClass(`clicked`);
        
        // debugger;
        console.log(`clicked!`);
        // debugger;
        // if ($(this).find(`h2`).hasClass(`nobox`)){
        //     // debugger;
        //     $(this).find(`h2`).removeClass(`nobox`);
        // };
        // debugger;
        console.log(`front`);
        // debugger;
        // $(this).toggleClass(`front`).toggleClass(`back`);
        
        // debugger;
        
        // debugger;
        
        //when you click on a box something happens
        //probably it finds out the index of this object in the array germanFlashcards
        //and thne probably it saves the number of the index in a variable so that you can use it in the next function 
    })


    $("form").on("submit", function (event) {
        event.preventDefault();

        let userInput = $("input").val();
        console.log(userInput);
        let flipCard = $(germanFlashcards[0].englishWord);
        console.log(flipCard);
        if (userInput = flipCard)
            alert(`match!`);

    });

// DON'T DELETE THIS, THIS IS HOW YOUR CODE WORKS
});




        



// //     for (let i = 0; i <= germanFlashcards.length; i++){
// //         const shuffleCard = germanFlashcards[i];
// //         if ()
// //     }
// //     $(".cards").html(`<h2>${germanFlashcards[2].germanWord}</h2>`);
// // });





$(function(){
    
});