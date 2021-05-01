const texts = [
  'Hello! Welcome to my super cool website that I made using the cool typewriter effect you are seeing right now!', 
  'Maybe I can make a cool text adventure game using this effect.', 
  'Hmm...'
];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

  if (count === texts.length) {
    count = 0;
    
  }
  currentText = texts[count];
  letter = currentText.slice(0, index++);

  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    
    count++;
    index = 0;
    $("body").one("keydown", type)
  } else if (count === 2) {
    setTimeout(type, 200);
  } else {
    setTimeout(type, 30);
  }

}());