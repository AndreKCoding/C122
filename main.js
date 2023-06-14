x = 0;
y = 0;

drawApple = "";

screenWidth = 0;
screenHeight = 0;

apple = "";

speakData = "";
toNumber = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 

function preload()
{
  apple = loadImage('apple.png');
}
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

    toNumber = Number(content);
    if(Number.isInteger(toNumber))
    {
      console.log("Reconhecido");
      document.getElementById("status").innerHTML = "A maçã começou a ser desenhada";
      drawApple = "set";
      console.log(drawApple);
    }
    else
    {
      document.getElementById("status").innerHTML = "O número não foi reconhecido";
      console.log("Desconhecido");
    }

}

function setup() {
 screenWidth = window.innerWidth;
 screenHeight = window.innerHeight;

 canvas = createCanvas(screenWidth, screenHeight - 150);
 console.log("Canvas Criado");
 canvas.position(0);
}

function draw() {
  if(drawApple == "set")
  {
    for(var i = 1; i <= toNumber; i++)
    {
      console.log(i);
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
      console.log("Desenhado");
    }
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
