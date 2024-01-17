function countPrimeNumbers() {
    const isPrime = i => {
        if (i <= 1) return false;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                return false;
            }
        }
        return true;
    };

    const start = performance.now();

    let count = 0;
    for (let j = 2; j <= 100; j++) {
        if (isPrime(j)) {
            count++;
        }
    }

    const end = performance.now();
    return end - start;
}


function runCountPrimeNumbersMultipleTimes(times) {
    let result = 0;

    for (let i = 0; i < times; i++) {
        result += countPrimeNumbers();
    }
    console.log(`Execution time of calculating prime numbers ${times} times was ${result} milliseconds.`);
}

runCountPrimeNumbersMultipleTimes(100);