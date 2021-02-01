// reference the container where the numbered divs will be appended as children
const board = document.getElementById("board");

// array declaration for counting the number of blocks to be added
const countArr = Array.from(Array(9).keys());

// fill the board with divs containing numbers from 1 to 9
countArr.forEach(item => {
  board.innerHTML +=
    `<div id='block${item + 1}' class='sortable'>` +
    `<p>` +
    (item + 1) +
    `</p>` +
    `</div>`;
});

// reference the div elements previously created
const sortable = document.getElementsByClassName("sortable");

// general purpose function of sorting that takes a callback as argument - see HTML button declarations
const sort = callback => {
  const arr = [].slice.call(sortable);
  arr.sort(callback);
  arr.forEach(item => board.appendChild(item));
};
