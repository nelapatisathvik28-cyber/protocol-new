// Simple digital clock with options to show/hide seconds and toggle 24-hour format
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const showSecondsCheckbox = document.getElementById('showSeconds');
const use24HourCheckbox = document.getElementById('use24Hour');


function pad(n) { return n.toString().padStart(2, '0'); }


function updateClock() {
const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();


const use24 = use24HourCheckbox.checked;
const showSeconds = showSecondsCheckbox.checked;


let period = '';
if (!use24) {
period = hours >= 12 ? ' PM' : ' AM';
hours = hours % 12 || 12; // convert 0 -> 12
}


const hh = pad(hours);
const mm = pad(minutes);
const ss = pad(seconds);


timeEl.textContent = showSeconds ? `${hh}:${mm}:${ss}${period}` : `${hh}:${mm}${period}`;


// Date string like: Friday, Nov 28, 2025
const dateOptions = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
dateEl.textContent = now.toLocaleDateString(undefined, dateOptions);
}


// Update once immediately, then every 250ms for snappy seconds, and to keep fast updates when toggling
updateClock();
setInterval(updateClock, 250);


// When user toggles a control, update immediately
showSecondsCheckbox.addEventListener('change', updateClock);
use24HourCheckbox.addEventListener('change', updateClock);