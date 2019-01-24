'use strict';

$( document ).ready(function() {
  $('select').on('change', event => {
    let selection = event.target.value;
    
    let arr = selection.split(' ');
    
    $('#label-base').text(arr[0]);
    $('#label-result').text(arr[2]);
    $('form').attr('action', '/convert/' + arr.join('-').toLowerCase());
    $('#base-input').val('');
    $('#result-input').val('');
  });
  
  $('form').submit( event => {
    const number = $('form :input[name="base"]').val();
    
    if (number === '') event.preventDefault();
    
  });
  
  $('#base-input').on('change', event => {
    $('#result-input').val('');
  });
  
});