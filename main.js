$('#button__menu').on('click', function() {
  $('#menu-teste').slideToggle('slow');
});

$('.menu-link').each(function() {
  $(this).on('click', function() {
    $('#menu-teste').slideToggle('slow');
  });
});
