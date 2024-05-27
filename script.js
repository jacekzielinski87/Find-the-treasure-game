const start = document.querySelector(".start");
const board = document.querySelector(".board");

start.addEventListener("click", function() {
    if(start) {
        board.style.display = "grid";
        start.style.display = "none";
    }
});
