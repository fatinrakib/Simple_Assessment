//to get value by ID

const A5 = parseFloat(document.getElementById('A5').innerText);
const A7 = parseFloat(document.getElementById('A7').innerText);
const A12 = parseFloat(document.getElementById('A12').innerText);
const A13 = parseFloat(document.getElementById('A13').innerText);
const A15 = parseFloat(document.getElementById('A15').innerText);
const A20 = parseFloat(document.getElementById('A20').innerText);


// Calculate and display results in Table 2

const alpha = A5 + A20;
const beta = A15 / A7;
const charlie = A13 * A12;

// Display results in Table 2
document.getElementById('alphaValue').innerText = alpha;
document.getElementById('betaValue').innerText = beta;
document.getElementById('charlieValue').innerText = charlie;