

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
        //it starts with a class of front, but that will be taken off
        //THIS will receive a class of back, all other lis will still have a class of front
        $(this).toggleClass(`front`).toggleClass(`back`);

        //if THIS has a class of "clicked", then it is stored in FlipCard
        $(this).addClass(`clicked`);


        const flipCard = $(`li`).hasClass(`clicked`);
        //if flipCard is true, is a class of clicked, then it gets a class of red (which is the transform property, it gets big etc)
        if (flipCard === true){
            console.log(`flipcard is true!`)
            $(this).addClass(`red`);
            //since all the other lis still have a class of front, they can be selected so that all lis that have a class of front, are not clicked, have a class of blue (which disables the clicking possibility)
            const front = $(`li`).hasClass(`front`);
            if (front === true) {
                console.log(`has class of front!`)
                $(`.front`).addClass(`blue`);
            }
        }



        $("form").on("submit", function (event) {
            //takes away the default function
            event.preventDefault();

            //saves the user input
            let userInput = $("input").val();
            console.log(userInput);

            //this finds the german text between the h2s
            const listItem = $(`.clicked`).find(`h2`).text();
            console.log(listItem);


            //this variable takes the listItem above and compares it to the germanWord for each array object but it prints the associated english word once it finds a match
            //You need to put this in a function or something so that you can transfer it to the submit event listener
            germanFlashcards.forEach((property) => {
                thisCard = ``;
                debugger;
                if (listItem == property.germanWord) {
                    debugger;
                    console.log(`${property.englishWord}`);
                    debugger;
                }
            })
            console.log(thisCard); //the problem is right now thisCArd isn't actually being defined.  Where to define the variable???
            // //make dynamic 

            
            debugger;

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
        

        // DON'T DELETE THIS, THIS IS HOW YOUR CODE WORKS
    });

        
        //when you click on a box something happens
        //probably it finds out the index of this object in the array germanFlashcards
        //and thne probably it saves the number of the index in a variable so that you can use it in the next function 
    })
    









$(function(){
    
});