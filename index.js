const cardName = [];

function writeCards(cardName) {
    let thankYou = [];
    let c = 0;
    while (c < cardName.length) {
        let message = (`Thank you, ${cardName[c]}, for the wonderful surprise gift!`);
        thankYou.push(message);
        c++;
    }

    return thankYou
}
let messages = writeCards(cardName);
console.log(messages);

let numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

function countDown(numbers) {
    let i = numbers;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

countDown(numbers);