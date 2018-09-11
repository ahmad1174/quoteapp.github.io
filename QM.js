
$(document).ready(function () {
// alert("Press <b>New Qoute button</b> to get a quote");
    $("#box").draggable();

    $("#qb").click(function(){
        $getQuote();
    });

    $("#tweet").click(function(){
        $tweet();
    });

var $getQuote=function () {
  $.ajax({
      url:'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
      dataType: 'jsonp',
      // successful request

      success: function (data){

          // Add the quote to the #quoteText element
          $('h1').html(data.quoteText);
          if (data.quoteAuthor !== ''){
              // Author
              $('cite').html(data.quoteAuthor);
          }
          else{
              // When there is no author
              $('cite').html('Unknown');
          }
      },
      // Set up a way to gracefully handle errors
      error: function (xhr, status, error){
          $('h1').text('I\'m not sure what happened there. Click again and let\'s see if that does the trick!');
          $('cite').text('Your Sincere Browser');
      }


  });
};

var $tweet=function () {
    window.open('https://twitter.com/intent/tweet?hashtags= AHMADfreecodecamp &text='
        + encodeURIComponent($("h1").text(  )));
};
});
