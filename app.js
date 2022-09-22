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
    eightBall= "Si";
    break;
  case 5:
    eightBall= "No";
    break;
  case 6:
    eightBall= "En mi opinion no es posible";
    break;
  case 7:
    eightBall = "Es obvio que si";
    break;
 }
return eightBall
};