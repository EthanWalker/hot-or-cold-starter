
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*Variable Declarations*/
    var userGuess = 1;
    var guessCount = 0;
    var magicNumber = Math.floor((Math.random() * 100) + 1);
    console.log(magicNumber); // Output magic number to console for testing

    /*Sets up new game*/
    function startNewGame()
    {
        //alert("New Game Firing!");        
        $('#feedback').html("Make your Guess!")
        magicNumber = Math.floor((Math.random() * 100) + 1);
        $("#guessList").empty();
        $('#count').html("0")
        guessCount = 0;
        $("#userGuess").focus();
    }
    /*Give Feedback to the User*/
    function giveUserFeedback(userGuess)
    {      

        if (userGuess > 100 || userGuess < 1 || !userGuess) {
            alert("Try again, that wasn't a number between 1 and 100.")
            return false;
        }
        else
        {
            $("#guessList").append("<li>" + userGuess + "</li>");        
            var guessDifference = Math.abs(userGuess - magicNumber);
            guessCount++;
            $('#count').html(guessCount); 

            if(magicNumber === userGuess) 
            {
                $('#feedback').html("CORRECT!")
            }
            else if(guessDifference >= 50) 
            {
                $('#feedback').html("Ice cold")
            }
            else if(guessDifference >= 30)
            {
                $('#feedback').html("Cold")
            }
            else if(guessDifference >= 20)
            {
                $('#feedback').html("Warm")
            }
            else if(guessDifference >= 10)
            {
                $('#feedback').html("Hot")
            }
            else
            {
                $('#feedback').html("Very Hot!")
            }
        }
    }

    /*MAIN*/
    $( "#guessButton" ).click(function(e) {
        e.preventDefault();
        userGuess = parseInt($("#userGuess").val());
        giveUserFeedback(userGuess);
        $("#userGuess").focus();
    });
    $( ".new" ).click(function() {
        startNewGame();
        console.log(magicNumber);
    });
});


