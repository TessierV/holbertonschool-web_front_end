console.log("Start of the execution queue");

setTimeout(() => {console.log('Final code block to be executed')}, 0)

for (var iteration = 1; iteration <= 100; iteration++) {
    console.log(iteration)
}
console.log('End of the loop printing');