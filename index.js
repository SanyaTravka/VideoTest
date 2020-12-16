let obj1 = {
    "type": "one", // text, one, many
    "question": "Сколько будет 5 * 23",
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
let obj2 = {
    "type": "many", // text, one, many
    "question": "Сколько будет 5 * 23",
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
let obj3 = {
    "type": "text", // text, one, many
    "question": "Сколько будет 5 * 23",
    "answer": "115"
}

function randomString() {
    const qwerty = "qwertyuiopasdfghjklzxcvbnm";
    let randStr = "";
    for (let i = 0; i < 5; i++) {
        let idx = Math.floor(Math.random() * (25 - 0) + 0)
        randStr = randStr + alphabet[idx];
    }
}

function goToHtml(obj) {
    let main = document.createElement("div");
    main.id = "mainQuestion"
    let question = document.createElement("h1");
    question.innerText = obj.question;
    main.appendChild(question);
    let button = document.createElement("button");
    button.innerText = "Отправить";

    if (obj.type === "text") {
        let answer = document.createElement("div");
        let input = document.createElement("input");
        input.type = "text";
        answer.appendChild(input);
        main.appendChild(answer);
        button.onclick = function() {
            if (document.querySelector("input").value === obj.answer) {
                alert('Правильно!')
            } else {
                alert('Неправильно!')
            }
        }
    } else {
        for (let i = 0; i < obj.answers.length; i++) {
            let answer = document.createElement("label");
            answer.append(obj.answers[i].answer);
            answer.classList.add("container-input");
            let input = document.createElement("input");
            input.type = "radio";
            if (obj.type === "many") {
                input.type = "checkbox";
            }
            input.name = `question`;
            input.id = obj.answers[i].correct;
            answer.appendChild(input);
            let span = document.createElement("span");
            if (obj.type === "many") {
                span.classList.add("checkmark-checkbox");
            } else {
                span.classList.add("checkmark");
            }
            answer.appendChild(span);
            main.appendChild(answer);
        }
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
                document.getElementById("mainQuestion").style.display = "none";
                document.getElementById("video-container").style.display = "block";
                video.play();
                testAppended = false;
                step++;

            } else {
                alert('Неправильно!')
                document.getElementById("mainQuestion").style.display = "none";
                document.getElementById("video-container").style.display = "block";
                video.currentTime = 0;
                video.play();
                testAppended = false;
                step--;
            }
        }
    }
    main.appendChild(button);
    return main
}