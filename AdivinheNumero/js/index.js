const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit)

let status = document.getElementById('status')
let tentativas = document.getElementById('tentativas')
let result = document.getElementById('result')

const Adivinhe = {
  max: 10,
  tentativasNumber: 0,
  numberDrawn: function randomValue() {
    return Math.round(Math.random() * this.max)
  }
}

let numberDrawn = Adivinhe.numberDrawn()

function uptadeTentativas(tentativas, value) {
  tentativas.innerHTML = 'Tentativa ' + value
}

function handleSubmit(e) {
  e.preventDefault()

  let kick = document.getElementById('kick').value

  if (!kick) {
    alert('Digite algum valor!')
    return
  }

  uptadeTentativas(tentativas, ++Adivinhe.tentativasNumber)

  if (numberDrawn == kick) {
    playAgain()
    status.innerHTML = 'Parabéns, você acertou!'
    result.style.transition = '0.4s'
    result.style.backgroundColor = '#37c978'
    result.style.color = '#fff'
    status.style.color = '#fff'
    clear()
  } else if (numberDrawn > kick) {
    status.innerHTML = 'O número é maior!' 
    status.style.color = '#de4251' 
    clear()
  } else if (numberDrawn < kick) {
    status.innerHTML = 'O número é menor!' 
    status.style.color = '#de4251' 
    clear()
  }
}

function playAgain() {
  document.getElementById('btn-Restart').style.display = 'flex'
}

function restart() {
  document.location.reload(true);
}

function clear() {
  document.getElementById('kick').value = ''
}

/* Background Squares*/
const ulSquares = document.querySelector("ul.squares")

for (let i = 0; i < 11; i++) {
  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min
  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random (5, 0.1);
  const duration = random (24, 12);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;

  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

  
  ulSquares.appendChild(li);
}