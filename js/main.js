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

// $( "#search" ).keyup(function() {
//     let inputText = $(this).val().toLowerCase();
//     $( ".item" ).each(function( index ) {
//         let captionText = $( this ).attr("title").toLowerCase();
//         if (!~captionText.indexOf(inputText)){
//           $(this).parent().hide();
//         }else {
//           $(this).parent().show();
//         }
//     });
// });


// Same code but using Vanilla JS instead of jQuery
let search = document.querySelector('.search');
let empty = document.querySelector('.empty');
let a = document.querySelectorAll('.item');
search.addEventListener("keyup", () => {
  let inputText = search.value.toLowerCase();
  let j = 0;
  for(let i=0; i < a.length; i++ ) {
    let captionText = a[i].getAttribute("title").toLowerCase();
    if (captionText.includes(inputText)){
      a[i].parentElement.style.display = "block";
      empty.style.display = "none";
      j--;
    }else{
      a[i].parentElement.style.display = "none";
      j++;
      if(j == a.length){
        empty.style.display = "block";
      }
    }
  }
});
