let obj = {
    "type": "one", // text, one, many
    "question": "Сколько будет 5 * 23",
    //"answer": "115",
    "answers": [{
            "answer": "100",
            "correct": false
        },
        {
            "answer": "80",
            "correct": false
        },
        {
            "answer": "115",
            "correct": true
        },
        {
            "answer": "120",
            "correct": false
        }
    ],
}

let question = document.querySelector("h1");
question.innerText = obj.question;

for (let i = 0; i < obj.answers.length; i++) {
    let answer = document.createElement("div");
    let input = document.createElement("input");
    input.type = "radio";
    input.name = `question`;
    input.id = obj.answers[i].correct;
    answer.appendChild(input);
    let label = document.createElement("label");
    label.innerText = obj.answers[i].answer;
    answer.appendChild(label);
    document.body.appendChild(answer);
}
let button = document.createElement("button");
button.innerText = "Отправить";
button.onclick = function() {
    let counter = 0;
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked === (inputs[i].id === "true")) {
            counter++;
        }
    }
    if (counter === inputs.length) {
        alert('Правильно!')
    } else {
        alert('Неправильно!')
    }
}
document.body.appendChild(button);