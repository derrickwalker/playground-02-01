let numberOfPeople = prompt('How many people are in the room?');
let isMorning = prompt('Is it morning?');
let message = '';

for (let i = 0; i < numberOfPeople; i++) {
    let n = i;
    if (isMorning === 'yes') {
        message += 'Good Morning!\n';
    } else {
        message += 'Good Afternoon!\n';
    }
}
alert(message); 