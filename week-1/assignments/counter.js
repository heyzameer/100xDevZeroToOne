// This countdown function starts at 30 and counts down to 0, logging each second.


function countdown(start = 30) {
    let counter = start;
    const interval = setInterval(() => {
        console.log(counter);
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            console.log("Countdown complete!");
        }
    }, 1000);
}

countdown(); // Starts the countdown from 30 to 0
