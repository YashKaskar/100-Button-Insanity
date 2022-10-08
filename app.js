// Without touching index.html, please use JavaScript to create exactly
// 100 new button elements! Add each new button inside the container element provided in index.html.
    

// Create exactly 100 new button elements

// Each button must have some text inside of it (it doesn't matter what)

// Each button must be appended inside the container div.




// WRITE YOUR CODE IN HERE:
const yash = document.querySelector('#container');
for(let container = 0; container < 100; container ++){ 
    const button = document.createElement('button');
    button.innerText = 'Hey!';
    yash.appendChild(button);
}
