const checkNumbers = uniqueRandomNumber(5, 1, 100);
console.log(checkNumbers);

const numberDisplay = document.getElementById('container');
numberDisplay.innerHTML = checkNumbers;

setTimeout(resetDisplay, 5000);

setTimeout(function() {
    userInput = userNumbers();
    const declaredNumbers = luckyNumbers(checkNumbers, userInput);
}, 6000)


function luckyNumbers (checkNumbers, userNumbers) {
    let numberInputs = [];

    for (let i = 0; i < userNumbers.length; i++) {
        const checkingNumber = userNumbers[i];
        if (!checkNumbers.includes(checkingNumber)) {
            numberInputs.push(checkingNumber);
        }
    }
    return numberInputs;
}

function userNumbers () {
    const declaredNumbers = [];

    while (declaredNumbers.length < 5) {
        const numberprompt = parseInt(prompt('Push your numebrs'));
        if (!declaredNumbers.includes(numberprompt)) {
            declaredNumbers.push(numberprompt);
        }
    }
    return declaredNumbers;
}

function resetDisplay() {
    numberDisplay.innerHTML = "";
}

function uniqueRandomNumber(elementsNumber, min, max) {
  const numbers = [];

  while (numbers.length < elementsNumber) {
    const randomNumber = randomNumberGenerator(min, max);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}

function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
