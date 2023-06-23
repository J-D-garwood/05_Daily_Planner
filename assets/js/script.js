// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var date_display = $('#currentDay')
date_display.text(dayjs().format("dddd, MMMM D"))

var NINE = $('#hour-9')
var TEN = $('#hour-10')
var ELEVEN = $('#hour-11')
var TWELVE = $('#hour-12')
var ONE = $('#hour-13')
var TWO = $('#hour-14')
var THREE = $('#hour-15')
var FOUR = $('#hour-16')
var FIVE = $('#hour-17')

var HOURS = [NINE, TEN, ELEVEN, TWELVE, ONE, TWO, THREE, FOUR, FIVE]

function PPF(timeblock, digit) {
  var hour = dayjs().hour()
  if ((hour - digit)>0) {
    timeblock.attr('class', 'row time-block past')
  } else if ((hour - digit)==0) {
    timeblock.attr('class', 'row time-block present')
  } else {
    timeblock.attr('class', 'row time-block future')
  }
}

for (i=0;i<HOURS.length;i++) {
  PPF(HOURS[i], (i+9))
}




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
  //DONE

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  //DONE
});