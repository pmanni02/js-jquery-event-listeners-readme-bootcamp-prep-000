//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!")
  });
}

function frameIt(){
  $(document).on('load', function(){
    $('img').addClass("tasty")
  });
}

function pressIt(){
  $('form').on('keydown', function(){
    
  });
}

$(document).ready(function(){
// call functions here
  getIt();
  frameIt();

});
