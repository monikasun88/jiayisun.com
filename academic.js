$( "a.fade" ).mouseover(function() {
  $( this ).fadeTo(100, 1, function() {
  });
});
$( "a.fade" ).mouseout(function() {
  $( this ).fadeTo(100, 0.7, function() {
  });
});

$('nav > ul > li > a').click(function() {
    $('li').removeClass();
    $(this).parent().addClass('active');
});
