//----------------------------------------------------------------------

$(document).ready(function(){

  console.log("hhhhahahaa");

  $("#button1").click(function(){

    var name1 = $("#name").val();
    var character1 = $("#character").val();
    var adverb1 = $("#adverb").val();
    var adjective1 = $("#adjective").val();

    console.log(name1);

    $("#hh2")[0].innerHTML = "Sad West Side Story";
    $("#text_telling_story1")[0].innerHTML = name1 + " was doing a post-match interview for CNN. An interviewer named " + character1 + " asked a couple of tricky questions. " + character1 + " tried to piss him off and as a result " + name1 + " felt slightly " + adjective1 + ". " + name1 + " suddenly fell to the floor unconscious, his heart stopped. " + character1 + " realized he was dead and " + adverb1 + " got upset."

    $("#name")[0] = null;
    $("#character")[0] = null;
    $("#adverb")[0] = null;
    $("#adjective")[0] = null;




  });



});


//-----------------------------------------------------------------------

//---------------------------------------------------------


$(document).ready(function(){

  console.log("hhhhahahaa");

  $("#button2").click(function(){

    var width1 = $("#width").val();
    var height1 = $("#height").val();
    var num_colors1 = $("#num_colors").val();

    var sizeFile = width1 * height1 * Math.log(num_colors1);
    sizeFile = sizeFile/8;
    sizeFile = sizeFile.toFixed(1);


    if(sizeFile <= 8000){

      $("#hh2")[0].innerHTML = "Result";
      $("#text_telling_story2")[0].innerHTML = "File size is: " + sizeFile + " Bytes, which is OK";

    }
    else{
      $("#hh2")[0].innerHTML = "Result";
      $("#text_telling_story2")[0].innerHTML = "File size is: " + sizeFile + " Bytes, which is NOT OK";
    }


    $("#name")[0] = null;
    $("#character")[0] = null;
    $("#adverb")[0] = null;
    $("#adjective")[0] = null;




  });



});


//--------------------------------------------------------
