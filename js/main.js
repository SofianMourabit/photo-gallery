// Lightbux Plugin (Vanilla JS)
baguetteBox.run('.gallery', {
    // Custom options
});

// Search filter (jQuery plugin)
/* var options = {
    valueNames: [
      { name: 'item', attr: 'title' }
    ]
};

var galleryList = new List('gallery', options);
*/

// Extra credit : Create a search box in jQuery
/*
  1. Get Input box by id and value for each change
  2. For each anchor element Get title attributes
  3. If InputText can't be found in captionText hide the parent list item
*/

$( "#search" ).keyup(function() {
    var inputText= "";
    inputText = $(this).val().toLowerCase();

    $( ".item" ).each(function( index ) {
        var captionText = $( this ).attr("title").toLowerCase();

        if (!~captionText.indexOf(inputText)){
          $(this).parent().hide();
          console.log("you are a genius");
        }else {
          $(this).parent().show();
        }
     // console.log( index + ": " + $( this ).attr("title") );
    });

    console.log(inputText);
});
