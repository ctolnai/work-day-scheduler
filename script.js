var currentDay = document.querySelector("#currentDay");
var saveBtn = $(".saveBtn");

function displayTime() {
    var rightNow = moment().format("dddd, MMMM Do");
    currentDay.innerHTML = rightNow;

}


saveBtn.click(() => {
    for (let i = 9; i < 17; i++) {
      
        
        localStorage.setItem(i, $(`#${i}`).val())
    }
})

displayTime()