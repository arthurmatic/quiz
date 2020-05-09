let quiz = [
    {
        question: "how old are you?",
        options: {
            a: 10,
            b: 12,
            c: 9,
            d: 16,
            e: 13
        },
        answer: "b"
    },
    {
        question: "where do you live?",
        options: {
            a: "abuja",
            b: "lagos",
            c: "port harcourt",
            d: "uyo",
            e: "kano"
        },
        answer: "d"
    },
    {
        question: "where do you school?",
        options: {
            a: "kings college",
            b: "trinity college",
            c: "pegasus secondary",
            d: "Air Force Secondary",
            e: "federal Govt college"
        },
        answer: "c"
    },
    {
        question: "who is the president of Nigeria?",
        options: {
            a: "buhari",
            b: "obasanjo",
            c: "GEJ",
            d: "gowon",
            e: "atiku"
        },
        answer: "a"
    },
    {
        question: "who is the governor of the CBN?",
        options: {
            a: "charles Soludo",
            b: "emem isong",
            c: "ngozi Iwela",
            d: "sanusi lamido",
            e: "Godwin emefele"
        },
        answer: "e"
    }
]
let questionOne = document.getElementById('question1');
let questionTwo = document.getElementById('question2');
let questionThree = document.getElementById('question3');
let questionFour = document.getElementById('question4');
let questionFive = document.getElementById('question5');
let next = document.getElementById('next'); 
let previous = document.getElementById('previous'); 

next.addEventListener('click', () => {
    if (questionOne.style.display = "block") {
        questionOne.style.display = "none";
        questionTwo.style.display = "block";
        previous.style.display = "inline-block";
    } else if (questionTwo.style.display = "block"){
        questionThree.style.display = "block";
        questionTwo.style.display = "none";
        previous.style.display = "inline-block";
    } else if (questionThree) {
        questionThree.style.display = "none";
        questionFour.style.display = "block";
        previous.style.display = "inline-block";
        return next;
    } else if (questionFour) {
        questionFive.style.display = "block";
        questionFour.style.display = "none";
        previous.style.display = "inline-block";
        return next;
    } else {
        questionFive.style.display = "block";
        questionFour.style.display = "none";
        previous.style.display = "inline-block";
    }
    
});
previous.addEventListener('click', () => {
    questionOne.style.display = "block";
    questionTwo.style.display = "none";
})
for (let i = 0; i < quiz.length; i++) {
    let questions = quiz[0][0];
}
