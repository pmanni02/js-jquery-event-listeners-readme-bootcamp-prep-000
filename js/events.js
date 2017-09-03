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
  $('form').on('keydown', function(key){
    if(key.which == 71){
      alert('G pressed!')
    }
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
