

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
        $(this).find(`h2`).addClass(`green`);
        $(this).toggleClass(`front`).toggleClass(`back`);
        $(this).addClass(`clicked`);
        // debugger;
        console.log(`clicked!`);
        // debugger;

        console.log(`front`);
        // let flipCard = $(this).germanFlashcards;
       const flipCard = $(`li`).hasClass(`clicked`);
        console.log({flipCard});
        if (flipCard === true){
            console.log(`flipcard is true!`)
            $(this).addClass(`red`);
        
            const front = $(`li`).hasClass(`front`);
            if (front === true) {
                console.log(`has class of front!`)
                $(`.front`).addClass(`blue`);
            }
        }

        let listItem = $(this).find(`h2`).text();
        console.log(listItem);


        $("form").on("submit", function (event) {
            //takes away the default function
            event.preventDefault();

            //saves the user input
            let userInput = $("input").val();
            console.log(userInput);
            //make dynamic 
            let thisCard = $(germanFlashcards[0].englishWord);
            console.log(thisCard);

            if (userInput === thisCard){
                console.log(`correct!`);
                alert(`match!!!`);
                $(`li`).removeClass(`blue`);
            } else{
                alert(`No match`);
            }
                
            

        });
        // } else if(flipCard === false) {
        //     console.log(`flipcard not true!`)
        //     $(`li`).addClass(`blue`);
       
        // debugger;
        // $(this).toggleClass(`front`).toggleClass(`back`);
        

        
        //when you click on a box something happens
        //probably it finds out the index of this object in the array germanFlashcards
        //and thne probably it saves the number of the index in a variable so that you can use it in the next function 
    })
    

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