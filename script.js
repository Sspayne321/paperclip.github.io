// Resource counters
let paperclips = 0;
let wire = 100;
let money = 0;

// Automation counters
let autoClippers = 0;
let autoClipperCost = 10;

// DOM elements
const paperclipsDisplay = document.getElementById('paperclips');
const wireDisplay = document.getElementById('wire');
const moneyDisplay = document.getElementById('money');
const autoClippersDisplay = document.getElementById('autoclippers');

// Manual paperclip production
document.getElementById('make-paperclip').addEventListener('click', () => {
  if (wire > 0) {
    paperclips++;
    wire--;
    money += 0.25; // Each paperclip earns $0.25
    updateDisplay();
  } else {
    alert("Out of wire! Buy more to continue.");
  }
});

// Buy Auto-Clipper
document.getElementById('buy-autoclipper').addEventListener('click', () => {
  if (money >= autoClipperCost) {
    autoClippers++;
    money -= autoClipperCost;
    autoClipperCost = Math.floor(autoClipperCost * 1.2); // Increase cost
    updateDisplay();
  } else {
    alert("Not enough money to buy Auto-Clipper.");
  }
});

// Auto-Clipper production
setInterval(() => {
  if (autoClippers > 0 && wire > 0) {
    const produced = autoClippers;
    paperclips += produced;
    wire -= produced;
    money += produced * 0.25;
    updateDisplay();
  }
}, 1000);

// Update display
function updateDisplay() {
  paperclipsDisplay.textContent = paperclips;
  wireDisplay.textContent = wire;
  moneyDisplay.textContent = money.toFixed(2);
  autoClippersDisplay.textContent = autoClippers;
}

