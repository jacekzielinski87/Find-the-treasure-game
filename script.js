const start = document.querySelector(".start");
const board = document.querySelector(".board");
const treasure = document.querySelector(".treasure");
const click = document.querySelector(".this");

start.addEventListener("click", function() {
    if(start) {
        board.style.display = "grid";
        start.style.display = "none";
    }
});

let buttons = document.querySelectorAll(".this")
for( let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        treasure.style.display = "block";
        click.style.display = "none";
    })
}
