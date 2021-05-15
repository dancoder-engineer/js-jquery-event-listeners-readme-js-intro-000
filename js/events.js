//define functions here

$(document).ready(function(){

// call functions here

<<<<<<< HEAD
getIt()
submitIt()
pressIt()
frameIt()
=======
>>>>>>> a17f5174ed55340153fe2d06b7a870610e54e065

});


function getIt() {
  $('p').on("click", function() {alert("Hey!") });
}

function submitIt() {
  
  $("form").on("submit", function() { 
    alert("Your form is going to be submitted now.")
  })
}




function pressIt() {  
  
  $(document).on('keydown', function(key) { 
<<<<<<< HEAD
    console.log(key.which)
    if (key.which == 71){   alert('You have pressed the G key.');}
    
  });
}

function frameIt() {
  
  $('img').on('load', function(){ 
    
    $("img").addClass("tasty")
  });
=======
    if (key.value == 'g'){   alert('You have pressed the G key.');}
    
  });
>>>>>>> a17f5174ed55340153fe2d06b7a870610e54e065
}