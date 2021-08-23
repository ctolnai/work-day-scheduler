var currentDay = document.querySelector("#currentDay");
var saveBtn = $(".saveBtn");
var hour = $(".hour");
var form = document.querySelector(".form");
var notes = $(".notes");


function displayTime() {
    var rightNow = moment().format("dddd, MMMM Do");
    currentDay.innerHTML = rightNow;

}


saveBtn.click(() => {
    
    for (let i = 9; i < 18; i++) {
      
      localStorage.setItem(i, $(`#${i}`).val())
    }
  
})

displayTime()


var currentHour = moment().format("H");

    for (let i = 9; i < 18; i++) {

        if (currentHour > i)
        $(`#${i}`).addClass("past");

        else if (currentHour < i)
        $(`#${i}`).addClass("future");

        else $(`#${i}`).addClass("present");
    }
      
// console.log(currentHour)


for (let i = 9; i < 18; i++) {
      
    $("#i").append(localStorage.getItem($(`#${i}`)));
  }




    // $(`#${i}`).textContent=(i, $(`#${i}`));