const studentHogwarts = () => {
    var privateScore = 0;
    var name = null;

    const changeScoreBy = (points) => {
        privateScore += points;
    }

    return {
        setName: (newName) => {
            name = newName;
        },
        rewardStudent: () => changeScoreBy(1),
        penalizeStudent: () => changeScoreBy(-1),
        getScore: () => `${name}: ${privateScore}`,

    }
}

const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

const drago = studentHogwarts();
drago.setName('Drago');
drago.rewardStudent();
drago.penalizeStudent();
drago.penalizeStudent();
drago.penalizeStudent();

console.log(harry.getScore());
console.log(drago.getScore());
