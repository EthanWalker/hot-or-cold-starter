
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

});


