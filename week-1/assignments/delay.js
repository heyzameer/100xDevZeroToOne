// This program measures the delay (in milliseconds) between when setTimeout is scheduled and when it actually runs.
function measureDelay(delay = 1000) {
    const startTime = Date.now();

    setTimeout(() => {
        const endTime = Date.now();
        const actualDelay = endTime - startTime;
        console.log(`Expected delay: ${delay}ms, Actual delay: ${actualDelay}ms`);
    }, delay);
}

measureDelay(1000); // Measures the delay for a 1-second timeout
