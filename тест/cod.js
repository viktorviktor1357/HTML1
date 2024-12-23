var title = "Срез по первому блоку";
var subtitle = "Этот тест позволяет оценить Ваши знания";
var questions1 = [
    {
        text: " Какая функция позволяет очищать конечную анимацию:",
        answers: ["setInterval", "clearTimeout", "setTimeout"],
        correctAnswer: 0,
    },
    {
        text: " Какое ключевое слово позволяет создавать объекты общего вида:?",
        answers: ["object ", "this", "prototype"],
        correctAnswer: 1,
    },
    {
        text: "Что, из ниже перечисленного, относится к событию:",
        answers: [
            "начало загрузки web-страницы",
            "сохранение кодировки пользователем",
            "завершение загрузки web-страницы",
        ],
        correctAnswer: 2,
    },
    { text: " Что, из ниже перечисленного, относится к событию:", answers: ["изменение кодировки пользователем ", "начало загрузки web-страницы"], correctAnswer: 0 },
    {
        text: " Какой оператор служит для создания нового экземпляра из класса однотипных объектов:",
        answers: ["this", "new ", "prototype"],
        correctAnswer: 1,
    },

];

var questions2 = [
    {
        text: "  В какой строке создастся новый объект Array:",
        answers: ["var pattern = /s&/", "var pattern = new Array[a,b,c]", "var pattern = [a,b,c];"],
        correctAnswer: 2,
    },
    {
        text: "Какой метод позволяет изменять порядок элементов массива на противоположный",
        answers: ["reverse() ", "join()", "sort()"],
        correctAnswer: 0,
    },
    {
        text: " Объекты, отвечающие за то, что содержится на Web-странице в окне браузера, называются",
        answers: [
            "пользовательскими",
            "клиентскими ",
            "встроенными",
        ],
        correctAnswer: 2,
    },
    {
        text: " Какой AJAX-транспорт позволит отправить файл на сервер без перезагрузки страницы:",
        answers: ["только использование фреймов(IFrame) ", "XmlHttpRequest справится!", "невозможно ввиду ограничений безопасности javascript"], correctAnswer: 0
    },
    {
        text: " Что нельзя сделать с помощью XmlHttpRequest:",
        answers: ["передать запрос другого типа кроме GET и POST", "сделать запрос с http://yandex.ru на http://google.com ", "произвести запрос так, чтобы ответ был готов до следующей строки скрипта"],
        correctAnswer: 1,
    },

];
var yourAns = new Array();
var score = 0;

questions3 = [questions1, questions2]

function Engine(question, answer) {
    yourAns[question] = answer;
}


let variant;
function startTest() {
    const firstname = document.getElementById('firstName').value;
    const secondname = document.getElementById('lastName').value;
    localStorage.setItem('firstname',  JSON.stringify(firstname)); 
    localStorage.setItem('secondname', JSON.stringify(secondname));
    console.log("start")
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const variantNumber = document.getElementById("variantSelect").value;
    if (firstName && lastName && variantNumber) {
        alert(`Начинаем тест для ${firstName} ${lastName} вариант ${variantNumber}`);
        if (variantNumber == 1) {
            variant = 0
            console.log(variant)

        }
        if (variantNumber == 2) {
            variant = 1
            console.log(variant)
        }
        window.location.href = 'test1.html' ;   
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
   localStorage.user = JSON.stringify({ value: variant})
}

function Undo(){
    window.location.href = 'testRegistr.html';  
    console.log("conss")
}

