
//============== QUESTION TEN A ====================
function extractDay(givenSeconds){
// Calculate how many seconds are in a day, hour, and minute
const SECONDS_IN_DAY = 24 * 60 * 60;
const SECONDS_IN_HOUR = 60 * 60;     
const SECONDS_IN_MINUTE = 60;   

// Extract days and find the remaining seconds
const days = Math.floor(givenSeconds / SECONDS_IN_DAY);
let remainingSeconds = givenSeconds % SECONDS_IN_DAY;

// Extract hours from the remainder, then update the remainder
const hours = Math.floor(remainingSeconds / SECONDS_IN_HOUR);
remainingSeconds = remainingSeconds % SECONDS_IN_HOUR;

// Extract minutes and find the leftover seconds
const minutes = Math.floor(remainingSeconds / SECONDS_IN_MINUTE);
const seconds = remainingSeconds % SECONDS_IN_MINUTE;

//Output strings
const dayStr = days === 1 ? "1 day" : `${days} days`;
const hourStr = hours === 1 ? "1 hour" : `${hours} hours`;
const minuteStr = minutes === 1 ? "1 minute" : `${minutes} minutes`;
const secondStr = seconds === 1 ? "1 second" : `${seconds} seconds`;

return `${dayStr}, ${hourStr}, ${minuteStr}, ${secondStr}`;
}

console.log(extractDay(200000))


//================QUESTION TEN B ===============
// Initiallizing total
let total = 0;

// Adding 3 item prices
total += 10000;
total += 15000;
total += 20000;
console.log(total.toFixed(2))

// Applying 10%(0.9) discount
let discount = (10 / 100) * total;
total -= discount;
console.log(total)

// Adding 7.5%(0.075) VAT
let VAT = (7.5 / 100) * total;
total += VAT;
console.log(total)

// splitting the bill equally between 3 people
total /= 3;

console.log(total)