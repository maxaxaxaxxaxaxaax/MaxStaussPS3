$(document).ready(function() {
  var previousHover = '';
  var lastColoredDiv = ''; // new variable to keep track of last colored div

  $('#com').hover(function() {
    
    $('aside').css('color', '#6494AA');
    $('#yellow').html('www.example<span style="color:#6494AA">.com</span>');
  });

  $('#de').hover(function() {
    $('aside').css('color', '#90A959');
    $('#yellow').html('www.example<span style="color:#90A959">.de</span>');
  });

  $('#org').hover(function() {
    $('aside').css('color', '#FEA82F');
    $('#yellow').html('www.example<span style="color:#FEA82F">.org</span>');
  });

  $('#net').hover(function() {
    $('aside').css('color', '#DC493A');
    $('#yellow').html('www.example<span style="color:#DC493A">.net</span>');
  });

  $('#info').hover(function() {
    $('aside').css('color', '#9B5094');    $('#yellow').html('www.example<span style="color:#9B5094">.info</span>');
    lastColoredDiv = $('#info');
  });


});
