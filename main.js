let Attempts = 0;
let Score = 0;

function guess(userGuess) {
  Attempts++;
  document.getElementById("attempts").innerHTML = Attempts;
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctanswer = randomNumber % 2 == 0 ? "even" : "odd";

  function sfx(isCorrect) {
    audio = isCorrect
      ? document.getElementById("correct")
      : document.getElementById("wrong");
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  if (userGuess == correctanswer) {
    document.getElementById("display").innerHTML =
      "Correct! the number is " + randomNumber;
    Score++;
    document.getElementById("userscore").innerHTML = Score;
    sfx(true);
  } else {
    document.getElementById("display").innerHTML =
      "Wrong! the number is " + randomNumber;
    sfx(false);
  }
}
