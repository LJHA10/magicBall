const ask = () => {
    //leer Pregunta
    const questionInput = document.getElementById("question");
    const answerInput = document.getElementById('answer');
    if (questionInput.value !== ""){
        //Recibir repuesta al preguntar a bola magica
        let answer = magicBall();
        //Imprimir resultado
        answerInput.value = answer;
    }else{
        answerInput.value = "Pregunta algo!";
    }
    
}

//Funcion Bola Magica
const magicBall = () => {
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber){
  case 0:
    eightBall = "La respues es si";
    break;
  case 1:
    eightBall= "Por su puesto que no";
    break;
  case 2:
    eightBall= "Intentalo de nuevo";
    break;
  case 3:
    eightBall= "Podria ser";
    break;
  case 4:
    eightBall= "Do not count on it";
    break;
  case 5:
    eightBall= "My sources say no";
    break;
  case 6:
    eightBall= "Outlook not so good";
    break;
  case 7:
    eightBall = "Sings point to yes";
    break;
 }
return eightBall
};