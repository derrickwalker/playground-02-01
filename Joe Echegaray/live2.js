let numberOfPeople = prompt('How many people are in the room?');
let isMorning = prompt('Is it morning?');
let message = '';

for (let i = 0; i < numberOfPeople.toLowerCase; i++) {
    if (isMorning.toLowerCase === 'yes') {
        message += 'Good Morning!\n';
    } else {
        message += 'Good Afternoon!\n';
    }
}
alert(message); 