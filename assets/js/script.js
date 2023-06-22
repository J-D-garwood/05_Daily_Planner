// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var date_display = $('#currentDay')
date_display.text(dayjs().format("dddd, MMMM D"))

var NINE = $('#hour-9')
NINE.attr('style', 'background-color: ')
var TEN = $('#hour-10')
var ELEVEN = $('#hour-11')
var TWELVE = $('#hour-12')
var ONE = $('#hour-13')
var TWO = $('#hour-14')
var THREE = $('#hour-15')
var FOUR = $('#hour-16')
var FIVE = $('#hour-17')

// 9am Code

function PPF(timeblock, digit) {
  var hour = moment().hours()
  hour = hour + 13
  if ((hour - digit)>0) {
    timeblock.attr('style', 'background-color: grey')
  } else if ((hour - digit)==0) {
    timeblock.attr('style', 'background-color: red')
  } else {
    timeblock.attr('style', 'background-color: lime')
  }
}

PPF(NINE, 9)
PPF(TEN, 10)
PPF(ELEVEN, 11)
PPF(TWELVE, 12)
PPF(ONE, 13)
PPF(TWO, 14)
PPF(THREE, 15)
PPF(FOUR, 16)
PPF(FIVE, 17)



/*
var hour = moment().hours()
if ((hour - 9)>0) {
  NINE.attr('style', 'background-color: grey')
} else if ((hour - 9)==0) {
  NINE.attr('style', 'background-color: red')
} else {
  NINE.attr('style', 'background-color: lime')
}


$(function() {
  PPF = function(timeblock, digit) {
    var hour = moment().hours()
    if ((hour - digit)>0) {
      timeblock.attr('style', 'background-color: grey')
    } else if ((hour - digit)==0) {
      timeblock.attr('style', 'background-color: red')
    } else {
      timeblock.attr('style', 'background-color: lime')
    }
  }
})

PPF(NINE, 9)
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
*/