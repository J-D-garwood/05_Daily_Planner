//code that displays current date at the top of the page
var date_display = $('#currentDay')
date_display.text(dayjs().format("dddd, MMMM D"))

//list of local storage names
var storageLs = ['nine', 'ten', 'eleven', 'twelve', 'one', 'two', 'three', 'four', 'five']

//collecting event elements
var NINE = $('#hour-9')
var TEN = $('#hour-10')
var ELEVEN = $('#hour-11')
var TWELVE = $('#hour-12')
var ONE = $('#hour-13')
var TWO = $('#hour-14')
var THREE = $('#hour-15')
var FOUR = $('#hour-16')
var FIVE = $('#hour-17')

//listed event elements
var HOURS = [NINE, TEN, ELEVEN, TWELVE, ONE, TWO, THREE, FOUR, FIVE]

//function to set saved events to their respective time blocks
function returnSavdTxt(hour, store) {
  hour.children("textarea").text(localStorage.getItem(store))
} 

//loop to implement above function to all timeblocks
for (i=0;i<HOURS.length;i++) {
  returnSavdTxt(HOURS[i], storageLs[i])
}

//function to color code events based on whether they are in the past, present or future
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

//loop to implement above function to all timeblocks
for (i=0;i<HOURS.length;i++) {
  PPF(HOURS[i], (i+9))
}

//function to save contents of text area to local storage element
function save_btn(hour, store) {
hour.children("button").on("click", function(event) {
  event.preventDefault()
  text = hour.children("textarea").val()
  localStorage.setItem(store, text)
})
}

//loop to implement above function to all timeblocks
for (i=0;i<HOURS.length;i++) {
  save_btn(HOURS[i], storageLs[i])
}
