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

    console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
}

countPrimeNumbers();
