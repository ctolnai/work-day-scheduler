var currentDay = document.querySelector("#currentDay");
var saveBtn = $(".saveBtn");
var hour = $(".hour");
var form = document.querySelector(".form");
var notes = $(".notes");

// Display day and date on the header
function displayTime() {
    var rightNow = moment().format("dddd, MMMM Do");
    currentDay.innerHTML = rightNow;

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
      
    form.append(localStorage.getItem($(`#${i}`)));
  }

  


