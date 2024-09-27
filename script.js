function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if(!option.checked){
            option.disabled = true;
        }
    });
}

function playsound(){
    let clicksound = document.getElementById('selecionasom');
    clicksound.play();
}

function submitQuiz(){

    let correctAnswers ={
        q1: "D",
        q2: "B",
        q3: "C",
        q4: "B",
        q5: "A",
        q6: "B",
        q7: "A",
        q8: "A",
        q9: "B",
        q10:"B",

        // adicione as respostas corretas para outras perguntas
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for(let key in correctAnswers){
        let userAnswer = form.elements[key].value;
        if(userAnswer === correctAnswers[key]){
            score++;
        }
    }


    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`;

    document.getElementById('enviar').setAttribute('disabled', true);
    document.getElementById('reiniciar').removeAttribute('disabled');

    // tocar somr se todas as respostas estiverem corretas
    if (score ===7) {
        let sucessSound = document.getElementById('venceusom');
        sucessSound.play();
    }

    if(score!=7){
        let failSound = document.getElementById('perdeusom');
        failSound.play();
    }

}

function botao() {
    score = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('enviar').removeAttribute('disabled');
    result.innerHTML = " ";
    document.getElementById('quiz-form').reset();

    let options=document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
 
}