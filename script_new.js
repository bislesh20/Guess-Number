let score = 7;
let highScore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (guess == randomNumber) {
    document.querySelector('.number').textContent = guess;
    displayMessage('Correct Guess!');
    document.querySelector('.heading').textContent = 'Correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != randomNumber) {
    if (score > 1) {
      displayMessage(guess < randomNumber ? 'Too Low' : 'Too High');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost!');
      document.querySelector('.score').textContent = '0';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.score').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.heading').textContent = 'Guess My Number !';
});
