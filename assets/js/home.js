////////////////////////////////////////////////////////////////////////////////////////////////////////
// description background
$("#description").on('click', function(){
    $(this).css("background-color","rgb(228, 228, 231)");
    $("#description-form").css("background-color","rgb(228, 228, 231)");
});

$("#description").on('mouseleave', function(){
    $(this).css("background-color","white");
    $("#description-form").css("background-color","white");
});

// category background
$("#category-div").on('click', function(){
    $(this).css("background-color","rgb(228, 228, 231)");
    $("#category").css("background-color","rgb(228, 228, 231)");
});

$("#category-div").on('mouseleave', function(){
    $("#category").css("background-color","white");
    $(this).css({
        "background-color":"white",
        "border-bottom": "1px solid black"
    });
});

//due_date background
$("#due_date-div").on('click', function(){
    $(this).css("background-color","rgb(228, 228, 231)");
    $("#due_date").css("background-color","rgb(228, 228, 231)");
});

$("#due_date-div").on('mouseleave', function(){
    $("#due_date").css("background-color","white");
    $(this).css({
        "background-color":"white",
        "border-bottom": "1px solid black"
    });
});

// /////////////////////////////////////////////////////////////////////////////////////////

// strike-through on checkedd checkbox
$('.todo-checkbox').change(function() {

    if (this.checked) {
      $(this).parent().css({
        "text-decoration": "line-through",
        "opacity": "0.5"
      });
    } else {
      $(this).parent().css({
        "text-decoration": "none",
        "opacity": "1"
      });
    }
  });

//   ///////////////////////////////////////////////////////////////////////////////////////////////

