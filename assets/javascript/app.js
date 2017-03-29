$( document ).ready(function() {

var correctAnswers = 0;
var incorrectAnswers = 0; 

// ===================Hidden elements on home page===============================
  $('#done').hide();
  $('#results').hide();
  $('#form1').hide();
  $('#timer').hide();

// ===================Start Button function .on Click===========================================        
  $('#start').on('click', function() {
    $('#timer').text(count);
    var formOne = $('#container').html();
    $('#parent-one').html(formOne);
    $('#start').hide();
    $('#done').show();
    $('#form1').show();
    $('#timer').show();
    var count=60;
    var counter=setInterval(timer, 1000); //1000 will run it every 1 seconds
  // ===================60 Second Timer===========================================
    function timer() {
      count=count-1;
      if (count <= 0) {
        count = 60;
        clearInterval(counter);
        gradeIt();
        timeOut(); //timeOut function resets the timer and displays the results page
      } 
      $('#timer').html("<p>Timer: " + count + "</p>");
    }
  });
 // ===================Done button function .on Click=========================================== 
  $('#done').on('click', function() {
    
    gradeIt();    
    $('#results').show();
    $('#correct-count').text(correctAnswers);
    $('#incorrect-count').text(incorrectAnswers);
    $('#form1').hide();
    $('#done').hide();
    $('#timer').hide();
  });
// ===========gradeIt function wraps 5 functions for each question qOne-qFive()=============
  function gradeIt () {
  
    function qOne() {
      if ($(".answerOne:checked").val() == "B") {
        correctAnswers++;
      }else if ($(".answerOne:checked").val() == null) {
        unAnswered++;
      }else if ($(".answerOne:checked").val() != "B") {
        incorrectAnswers++;
      }
    }
    function qTwo() {
      if ($(".answerTwo:checked").val() == "C") {
        correctAnswers++;
      }else if ($(".answerTwo:checked").val() == null) {
      }else if ($(".answerTwo:checked").val() != "C") {
        incorrectAnswers++;
      }
    }
    function qThree() {
      if ($(".answerThree:checked").val() == "D") {
        correctAnswers++;
      }else if ($(".answerThree:checked").val() == null) {
      }else if ($(".answerThree:checked").val() != "D") {
        incorrectAnswers++;
      }
    }
    function qFour() {
      if ($(".answerFour:checked").val() == "C") {
        correctAnswers++;
      }else if ($(".answerFour:checked").val() == null) {
      }else if ($(".answerFour:checked").val() != "C") {
        incorrectAnswers++;
      }
    }
    function qFive() {
      if ($(".answerFive:checked").val() == "A") {
        correctAnswers++;
      }else if ($(".answerFive:checked").val() == null) {
      }else if ($(".answerFive:checked").val() != "A") {
        incorrectAnswers++;
      }
    } 
    // call functions
    qOne();
    qTwo();
    qThree();
    qFour();
    qFive();
  };
  // =====================timeOut function========================
  function timeOut () {
    $('#done').hide();
    $('#results').show();
    $('#form1').hide();
    $('#timer').hide();
    $('#correct-count').text(correctAnswers);
    $('#incorrect-count').text(incorrectAnswers);
    $('#unanswered-count').text(unAnswered);
  }
});
