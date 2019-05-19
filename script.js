

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
            germanWord: "ein",
            englishWord: "one"
        },
        {
            id: 4,
            germanWord: "groß",
            englishWord: "large"
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
        {
            id: 10,
            germanWord: "sahne",
            englishWord: "cream"
        },
        {
            id: 11,
            germanWord: "haselnuss",
            englishWord: "hazelnut"
        },
        {
            id: 12,
            germanWord: "soja milch",
            englishWord: "soy milk"
        },
        {
            id: 13,
            germanWord: "mit",
            englishWord: "with"
        },
        {
            id: 14,
            germanWord: "mit milch",
            englishWord: "with milk"
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

    tempArray = shuffle(germanFlashcards);
    console.log(tempArray);

    // germanFlashcards.forEach((word) => {
    //     $(`.cards`).append(`<li class="newCard back card "><h2 class="nobox">${word.germanWord}</h2></li>`);
    // })

    tempArray.forEach((word) => {
        $(`.cards`)
            .append(`<li class="newCard back card" tabindex="0">
                    <h2 class="nobox" lang="de-DE">${word.germanWord}</h2>
                    <h3 class="nobox" lang="en">${word.englishWord}</h3></li>`);
    })

    function a11yClick(event) {
        if (event.type === 'submit' || event.type === `click`) {
            return true;
        }
        else if (event.type === 'keypress') {
            var code = event.charCode || event.keyCode;
            if (code === 13) {
                return true;
            }
        }
        else {
            return false;
        }
    }

    // Close the modal with the X, OR close the modal by clicking outside of it
    let modal = document.getElementById('modal1');

    window.addEventListener("click", function () {
        if (event.target === modal) {
            $(`.modalOpen`).addClass(`visuallyhidden`);
        }
    })

    $(`.closeModal`).on(`click`, function(){
        $(`.modalOpen`).addClass(`visuallyhidden`);
    })

    $(`.help`).on(`click`, function(){
        $(`.modalOpen`).removeClass(`visuallyhidden`);
            if ($(`.modalOpen`).not(`visuallyhidden`)){ //if modal is visible 
                $(`.cards`).addClass(`.disableCardsOpen`); //disable the cards
            if (($`.modalOpen`).hasClass(`visuallyhidden`)){
                $(`.cards`).removeClass(`disableCardsOpen`)
            }
        }
    })

    // Flip a card over
    $(`.back`).on("click keypress", function () {
        if (a11yClick(event) === true){
        //click on a box, reveal the h2 text in german
            $(this).find(`h2`).toggleClass(`nobox`);
  
        //it starts with a class of back, but that will be taken off
        //THIS will add a class of front, all other lis will still have a class of back
        
            $(this).toggleClass(`back`).toggleClass(`front`);
            $(this).removeClass(`clicked`);
            $(`li.back`).removeClass(`inactive`);
        
        }
    });
        
        //click on the card you just flipped over, because you want to try a different card
    $(`.cards`).on("click keypress", ".front", function () {
        if (a11yClick(event) === true) {
            $(this).addClass(`clicked`);
         
            const flippedCard = $(`li`).hasClass(`clicked`);
            //if flipCard is true, and has  a class of clicked, then console log it
            if (flippedCard === true) {
                const back = $(`li`).hasClass(`back`);
                if (back === true) {
                    $(`.back`).addClass(`inactive`);
                }
            }
        }
    });

    function keepScore(answer) {
        console.log(score);
        if (answer === `right`){
            score.right = score.right + 1;
            $(`.rightAnswers`).text(`${score.right} right`);
        } else {
            score.wrong = score.wrong + 1;
            $(`.wrongAnswers`).text(`${score.wrong} wrong`);
        }
        console.log(score);
    }

//this function reveals the right answer if you got it wrong 
    function rightAnswer(correction){
        if (correction ===`show`){
            let germanCard = $(`.clicked`).find(`h2`).text();
            germanFlashcards.filter((property) => {
                if (germanCard === property.germanWord) {
                    let englishCard = property.englishWord;
                    $(`.clicked`).find(`h3`).removeClass(`nobox`);
                    $(`.clicked`).addClass(`incorrect`);
                }
            })
        } else{
            if (correction === `noshow`){
                $(`.clicked`).addClass(`correct`);
            }
        }
    }

    function required(inputtx) {
        if (inputtx.value.length == 0) {
            return false;
        }
        return true;
    } 

    $("form").on("submit keypress", function (event) {
        if (a11yClick(event) === true) {
            event.preventDefault();
            //when you submit the match, the flipped card is taken out of play
            $(`li.front`).addClass(`complete`);
                //when you submit the match, the other cards that were inactive come back into play
            $(`li.back`).removeClass(`inactive`);
            //saves the user input
            let userInput = $("input").val();
 
            let listItem = $(`.clicked`).find(`h2`).text();
            let thisCard = germanFlashcards.filter((property) => {
                if (listItem === property.germanWord) {
                    return property.englishWord
                }
            })
            thisCard = thisCard[0].englishWord;
            if (userInput.toLowerCase() === thisCard) {
                // adds to your correct score
                keepScore(`right`);
                rightAnswer(`noshow`);
                alert(`match!!!`);
                //takes off disabled class
                $(`li`).removeClass(`inactive`);
                //no longer in a clicked state
                $(`li`).removeClass(`clicked`);
                //the h2 disappears
                $(`h2`).addClass(`nobox`);
                //clears the input
                $("input").val("");
            } else {
                keepScore(`wrong`);
                rightAnswer(`show`);
                $(`li`).removeClass(`clicked`);
                $(`h2`).addClass(`nobox`);
                $("input").val("");
            }
        }
    
        if (score.right + score.wrong === germanFlashcards.length) {
            $(`.cards`).addClass(`visuallyhidden`);
            $(`form`).addClass(`visuallyhidden`);
            $(`.endMessage`).removeClass(`visuallyhidden`);
            $(`.endMessage`).append
                (`<h2><span>You're done!</span></h2>
                <h2>You got ${score.right} answer(s) right and ${score.wrong} answer(s) wrong.</h2>
                <h3>Need more than coffee? Check out <a href="https://www.duolingo.com/course/de/en/Learn-German" target="_blank"> Duolingo's German module!</a></h3>
                <button type="reload" class="reload">I want to try again!</button>`);
        }


        $(`.reload`).on(`click`, function () {
            console.log(`button clicked`)
            location.reload();
        })

    });

    
    

})
    

