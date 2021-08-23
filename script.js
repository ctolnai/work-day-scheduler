var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var hour = $(".hour");
var form = $(".form");
var notes = $(".notes");


// Display day and date on the header
function displayTime() {
    var rightNow = moment().format("dddd, MMMM Do");
    currentDay.text(rightNow);

}

// Save notes into local storage
saveBtn.click(() => {
    
    for (let i = 9; i < 18; i++) {
      
      localStorage.setItem(i, $(`#${i}`).val())
    }
  
})

displayTime()

// Displays different colors depending on the time of day
var currentHour = moment().format("H");

    for (let i = 9; i < 18; i++) {

        if (currentHour > i)
        $(`#${i}`).addClass("past");

        else if (currentHour < i)
        $(`#${i}`).addClass("future");

        else $(`#${i}`).addClass("present");
    }
      

// Load notes from local storage
for (let i = 9; i < 18; i++) {
    
    var id = $(`#${i}`);
    id.val(localStorage.getItem(i));

  }

  

