$(document).ready(function()  {
    var flavors = ["chocolate", "vanilla", "strawberry"];

    flavors.forEach(function(flavor) {
      // var userInput = $("input#" + flavor).val();
      $('#flavors').text(flavors);
      // alert('I want' + flavor + 'in my whisky');
    });


    // event.preventDefault();
    // var q1 = $("input#q1").val();
    // var q2 = $("input#q2").val();
    // var q3 = $("input#q3").val();
    // var array = [q1, q2, q3];
    // var newArray = [array[1], array[2], array[0]];
    // newArray.push(array[1], array[2], array[0]);

    // $("#result").text(newArray);
    event.preventDefault();
 });
