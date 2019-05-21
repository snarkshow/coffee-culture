$(function () {


    let score = {
        right: 0,
        wrong: 0,
    };

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

//Fisher Yates shuffle
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

//New array order each time
    tempArray = shuffle(germanFlashcards);
    console.log(tempArray);

//Take new array, insert objects into cards 
    tempArray.forEach((word) => {
        $(`.cards`)
            .append(`<li class="newCard back card" tabindex="0">
                    <h2 class="nobox" lang="de-DE">${word.germanWord}</h2>
                    <h3 class="nobox" lang="en">${word.englishWord}</h3></li>`);
    })

//function for ensuring keypress option (https://karlgroves.com/2014/11/24/ridiculously-easy-trick-for-keyboard-accessibility)
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

//Open instruction modal
    $(`.help`).on(`click`, function(){
        $(`.modalOpen`).removeClass(`visuallyhidden`);
            if ($(`.modalOpen`).not(`visuallyhidden`)){ //if modal is visible 
                $(`.cards`).addClass(`.disableCardsOpen`); //disable the cards
            if (($`.modalOpen`).hasClass(`visuallyhidden`)){
                $(`.cards`).removeClass(`disableCardsOpen`)
            }
        }
    })

 // Close the modal with the X, OR close the modal by clicking outside of it
    let modal = document.getElementById('modal1');

    window.addEventListener("click", function () {
        if (event.target === modal) {
            $(`.modalOpen`).addClass(`visuallyhidden`);
        }
    })

    $(`.closeModal`).on(`click`, function () {
        $(`.modalOpen`).addClass(`visuallyhidden`);
    })


//Flip a card over, reveal a word
    $(`.back`).on("click keypress", function () {
        if (a11yClick(event) === true){
            $(this).find(`h2`).toggleClass(`nobox`);
            $(this).toggleClass(`back`).toggleClass(`front`);
            $(this).removeClass(`clicked`);
            $(`li.back`).removeClass(`inactive`);      
        }
    });
        
//Other cards become inactive when one card is flipped
    $(`.cards`).on("click keypress", ".front", function () {
        if (a11yClick(event) === true) {
            $(this).addClass(`clicked`);         
            const flippedCard = $(`li`).hasClass(`clicked`);
            if (flippedCard === true) {
                const back = $(`li`).hasClass(`back`);
                if (back === true) {
                    $(`.back`).addClass(`inactive`);
                }
            }
        }
    });

//Function to keep score of right/wrong answers
    function keepScore(answer) {
        console.log(score);
        if (answer === `right`){
            score.right = score.right + 1;
            $(`.rightAnswer`).text(`${score.right} right`);
        } else {
            score.wrong = score.wrong + 1;
            $(`.wrongAnswer`).text(`${score.wrong} wrong`);
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
        } else if (correction === `noshow`) {
            $(`.clicked`).addClass(`correct`);
        } 
    }
    
//Upon form submit, many things happen 
    $("form").on("submit", function (event) {
        if (a11yClick(event) === true){
            event.preventDefault();

            $(`li.front`).addClass(`complete`);
            $(`li.back`).removeClass(`inactive`);

            let userInput = $("input").val();
            userInput = userInput.trim();

//find the english word associated with the german card, compare it to the user's english input
            let listItem = $(`.clicked`).find(`h2`).text();
            let thisCard = germanFlashcards.filter((property) => { 
                if (listItem === property.germanWord) {
                    return property.englishWord
                }
            })
            thisCard = thisCard[0].englishWord;

             if (userInput.toLowerCase() === thisCard){
                keepScore(`right`);
                rightAnswer(`noshow`);
                $(`li`).removeClass(`inactive`);
                $(`li`).removeClass(`clicked`);
                $(`h2`).addClass(`nobox`);
                $("input").val("");
            } else {
                keepScore(`wrong`);
                rightAnswer(`show`);
                $(`li`).removeClass(`clicked`);
                $(`h2`).addClass(`nobox`);
                $("input").val("");
            }
        }

//End once the score == the length of the array
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

//reload the cards
            $(`.reload`).on(`click`, function () {
                location.reload();
            })
        })    
    });



    

