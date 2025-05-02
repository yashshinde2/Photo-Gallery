$(document).ready(function(){
  $('.filter').on('click', function(){
    const category = $(this).attr('data-filter');

    $('.gallery-item').each(function(){
      const itemCategory = $(this).attr('data-category');

      if(category === 'All' || itemCategory === category){
        $(this).fadeIn(400);
      } else {
        $(this).fadeOut(400);
      }
    });
  });
});
