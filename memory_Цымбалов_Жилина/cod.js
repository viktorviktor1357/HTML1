let mas = []
let masC = [, , , , , , , , , , , , , , ,]
let count = 0
let masColor = ["#FBCEB1", "#FF2400", "#44944A", "#6A5ACD", "#A5A5A5", "#003153", "#3D2B1F", "#FFDC33"]

function start() {
    box3.style.display = "none"
    box2_2.style.display = ""
    box2.style.display = ""
    text.innerHTML = ""
    mas = []
    count = 0
    for (let i = 0; i < 16; i++) {
        let num = random_()
        mas.push(num)
    }

    let colo = document.querySelectorAll('.colo');
    colo.forEach(el => {
        $(document).ready(function () {
            $(el).css("background-color", masColor[mas[count]]);
            count++
        });
    });
    let colorWhite = document.querySelectorAll('.colorWhite');
    colorWhite.forEach(el => {
        $(document).ready(function () {
            $(el).css("background-color", "white");
            count++
        });
    });
    clearInterval(hide)
 setInterval(hide,4000)
 setInterval(result,180000)
};

function hide(){
    box2_2.style.display = "none"
}

let countNum = 0
function random_() {
    countNum = 0
    let rand = Math.floor(Math.random() * 8)
    for (var i = 0; i < mas.length; i++) {
        if (mas[i] === rand) {
            countNum++
        }
    }
    if (countNum > 1) {
        rand = random_()
    }
    return rand
}

let color = 0

$(document).ready(function () {
    $("#button1").click(function () {
        color = 0;
    });
    $("#button2").click(function () {
        color = 1;
    });
    $("#button3").click(function () {
        color = 2;
    });
    $("#button4").click(function () {
        color = 3;
    });
    $("#button5").click(function () {
        color = 4;
    });
    $("#button6").click(function () {
        color = 5;
    });
    $("#button7").click(function () {
        color = 6;
    });
    $("#button8").click(function () {
        color = 7;
    });
});

$(document).ready(function () {
    $("#col1").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[0] = color
    });
    $("#col2").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[1] = color
    });
    $("#col3").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[2] = color
    });
    $("#col4").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[3] = color
    });
    $("#col5").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[4] = color
    });
    $("#col6").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[5] = color
    });
    $("#col7").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[6] = color
    });
    $("#col8").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[7] = color
    });
    $("#col9").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[8] = color
    });
    $("#col10").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[9] = color
    });
    $("#col11").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[10] = color
    });
    $("#col12").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[11] = color
    });
    $("#col13").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[12] = color
    });
    $("#col14").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[13] = color
    });
    $("#col15").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[14] = color
    });
    $("#col16").click(function () {
        $(this).css("background-color", masColor[color]);
        masC[15] = color
    });
});

let resultCount = 0


let resultText = ["Абсолютный 0", "Есть повод задуматься", "Есть повод задуматься", "Тренируй память", "Тренируй память", "Призер", "Призер", "Победитель", "Абсолютный победитель"]
function result() {
     box3.style.display = ""
    let masCount = [0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 16; i++) {
        if (mas[i] == masC[i]) {
            masCount[mas[i]]++
        }
    }
    resultCount = 0
    for (let i = 0; i < 8; i++) {
        if (masCount[i] == 2) {
            resultCount++
        }
    }
    document.getElementById("text").innerHTML = "У вас " + resultCount + " баллов: "+ resultText[resultCount]
}

