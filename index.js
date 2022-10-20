const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const event = `surprise`

function writeCards(names, event) {
    const thankYouCards = [names.length]
    for (let i = 0; i < names.length; i++) {
        thankYouCards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }

    return thankYouCards;

}

function countDown(number) {
    let countDown = number;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}

countDown(4) 