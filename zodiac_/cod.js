let massiv_image = ["https://content3.flowwow-images.com/data/blog/70/1672064860_43376970.png",
    "https://content3.flowwow-images.com/data/blog/77/1672065904_34217477.png",
    "https://content3.flowwow-images.com/data/blog/21/1672066116_11335321.png",
    "https://content3.flowwow-images.com/data/blog/66/1672066361_43890566.png",
    "https://content2.flowwow-images.com/data/blog/79/1672072582_2177579.png",
    "https://content3.flowwow-images.com/data/blog/82/1672073061_30238882.png",
    "https://content3.flowwow-images.com/data/blog/24/1672073195_11167224.png",
    "https://content3.flowwow-images.com/data/blog/35/1672073489_31360535.png",
    "https://content3.flowwow-images.com/data/blog/45/1676053611_81539945.png",
    "https://content3.flowwow-images.com/data/blog/01/1672074476_86309701.png",
    "https://content3.flowwow-images.com/data/blog/23/1672074775_15248123.png",
    "https://content3.flowwow-images.com/data/blog/31/1672074918_95895331.png"]
let countImage = 0
let countCircle = 0
let circle = ["circle0.style.fill", "circle1.style.fill", "circle2.style.fill", "circle3.style.fill", "circle4.style.fill"]
// 17 task slider
circle_()
function right() {
    circle_no()
    countImage += 1
    if (countImage == 12) { countImage = 0 }
    center.src = massiv_image[countImage]
    circle_()
}
function left() {
    circle_no()
    countImage -= 1
    if (countImage == -1) { countImage = 11 }
    center.src = massiv_image[countImage]
    circle_()
}
//circle0.style.fill = "blue"
function circle_() {
    switch (countImage) {
        case 0:
            circle0.style.fill = "blue";
            break;
        case 1:
            circle1.style.fill = "blue";
            break;
        case 2:
            circle2.style.fill = "blue";
            break;
        case 3:
            circle3.style.fill = "blue";
            break;
        case 4:
            circle4.style.fill = "blue";
            break;
        case 5:
            circle5.style.fill = "blue";
            break;
        case 6:
            circle6.style.fill = "blue";
            break;
        case 7:
            circle7.style.fill = "blue";
            break;
        case 8:
            circle8.style.fill = "blue";
            break;
        case 9:
            circle9.style.fill = "blue";
            break;
        case 10:
            circle10.style.fill = "blue";
            break;
        case 11:
            circle11.style.fill = "blue";
            break;
    }
}

function circle_no() {
    switch (countImage) {
        case 0:
            circle0.style.fill = "gray";
            break;
        case 1:
            circle1.style.fill = "gray";
            break;
        case 2:
            circle2.style.fill = "gray";
            break;
        case 3:
            circle3.style.fill = "gray";
            break;
        case 4:
            circle4.style.fill = "gray";
            break;
        case 5:
            circle5.style.fill = "gray";
            break;
        case 6:
            circle6.style.fill = "gray";
            break;
        case 7:
            circle7.style.fill = "gray";
            break;
        case 8:
            circle8.style.fill = "gray";
            break;
        case 9:
            circle9.style.fill = "gray";
            break;
        case 10:
            circle10.style.fill = "gray";
            break;
        case 11:
            circle11.style.fill = "gray";
            break;
    }
}

setInterval(right, 3000)

box2.style.display = "none"
box3.style.display = "none"
box4.style.display = "none"
box5.style.display = "none"


function yes1() {
    box2.style.display = "flex"
    box1.style.display = "none"
}
let flagYear = true;
function year() {
    box3.style.display = "flex"
    box2.style.display = "none"
    flagYear = false;
}

function zodiak() {
    box3.style.display = "flex"
    box2.style.display = "none"
    flagYear = true;
}
flagYear = true;
let imagesZod = ["http://www.zodiack.ru/images/boss/aries.png",
    "http://www.zodiack.ru/images/boss/taurus.png",
    "http://www.zodiack.ru/images/boss/gemini.png",
    "http://www.zodiack.ru/images/boss/cancer.png",
    "http://www.zodiack.ru/images/boss/leo.png",
    "http://www.zodiack.ru/images/boss/virgo.png",
    "http://www.zodiack.ru/images/boss/libra.png",
    "http://www.zodiack.ru/images/boss/scorpio.png",
    "http://www.zodiack.ru/images/boss/sagittarius.png",
    "http://www.zodiack.ru/images/boss/capricorn.png",
    "http://www.zodiack.ru/images/boss/aquarius.png",
    "http://www.zodiack.ru/images/boss/pisces.png"]
let zod = ["Овен", "Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец", "Козерог", "Водолей", "Рыбы"]

let Yea = ["Крыса", "Бык", "Тигр", "Кролик", "Дракон", "Змея", "Лошадь", "Коза", "Обезьяна ", "Петух", "Собака", "Свинья"]

let imagesYear = ["https://my-calend.ru/data/east-calendar/564dacbe65e32.png",
    "https://my-calend.ru/data/east-calendar/564dacc5ab91c.png",
    "https://my-calend.ru/data/east-calendar/564dacca9fb83.png",
    "https://my-calend.ru/data/east-calendar/564dacd1cb87f.png",
    "https://my-calend.ru/data/east-calendar/564dacd7534e7.png",
    "https://my-calend.ru/data/east-calendar/564dace01aa11.png",
    "https://my-calend.ru/data/east-calendar/564dace6da197.png",
    "https://my-calend.ru/data/east-calendar/564dacf05ad62.png",
    "https://my-calend.ru/data/east-calendar/564dacf661faf.png",
    "https://my-calend.ru/data/east-calendar/564dacfda65d6.png",
    "https://my-calend.ru/data/east-calendar/564dad0412b18.png",
    "https://my-calend.ru/data/east-calendar/564dad1c06918.png"]

const m1 = [
    "В этом месяце вы будете полны романтических идей.",
    "Не бойтесь открывать свое сердце новым людям.",
    "Скоро вас ждет приятное свидание.",
    "Ваши отношения укрепятся благодаря общим интересам.",
    "Обратите внимание на знаки, которые посылает судьба.",
    "Не забывайте о важности общения с партнером.",
    "Скоро вы получите признание в любви.",
    "Ваши чувства станут более глубокими.",
    "Не бойтесь проявлять свои эмоции.",
    "Скоро вас ждет приятный сюрприз в личной жизни.",
    "Ваши старания в отношениях принесут плоды.",
    "Не забывайте радоваться мелочам в любви."
];

const m2 = [
    "Этот месяц будет удачным для карьерного роста.",
    "Не бойтесь проявлять инициативу в работе.",
    "Скоро вас ждет важный проект.",
    "Ваши усилия будут оценены руководством.",
    "Обратите внимание на возможности для обучения.",
    "Скоро вы получите предложение о повышении.",
    "Ваши идеи будут востребованы.",
    "Не забывайте о командной работе.",
    "Скоро вас ждет интересное сотрудничество.",
    "Ваши старания принесут результаты.",
    "Не бойтесь брать на себя ответственность.",
    "Скоро вас ждет встреча с влиятельным человеком."
];

const m3 = [
    "Этот месяц будет удачным для заботы о здоровье.",
    "Не забывайте уделять время физическим упражнениям.",
    "Скоро вас ждет зарядка бодрости.",
    "Обратите внимание на свое питание.",
    "Не бойтесь посещать врачей для профилактики.",
    "Скоро вы почувствуете прилив сил.",
    "Ваши старания в заботе о себе принесут плоды.",
    "Не забывайте о важности отдыха.",
    "Скоро вас ждет возможность заняться любимым хобби.",
    "Ваши эмоции будут влиять на общее состояние.",
    "Не бойтесь делиться своими переживаниями.",
    "Скоро вас ждет возможность улучшить свое здоровье."
];

const m4 = [
    "Этот месяц принесет финансовую стабильность.",
    "Не забывайте планировать свои расходы.",
    "Скоро вы получите неожиданный доход.",
    "Ваши инвестиции начнут приносить плоды.",
    "Обратите внимание на возможности для заработка.",
    "Не бойтесь рисковать, но будьте осторожны.",
    "Скоро вас ждет выгодная сделка.",
    "Ваши старания в финансовых вопросах будут оценены.",
    "Не забывайте о важности накоплений.",
    "Скоро вы сможете позволить себе что-то желаемое.",
    "Ваши финансовые цели станут более достижимыми.",
    "Не бойтесь обращаться за советом к экспертам."
];

const m5 = [
    "Этот месяц будет удачным для путешествий.",
    "Не бойтесь открывать новые горизонты.",
    "Скоро вас ждет интересная поездка.",
    "Обратите внимание на возможность отдыха.",
    "Ваши планы на отпуск будут осуществлены.",
    "Не забывайте о важности планирования поездок.",
    "Скоро вы встретите интересных людей в путешествиях.",
    "Ваши приключения принесут радость.",
    "Не бойтесь исследовать новые места.",
    "Скоро вас ждет возможность путешествовать с друзьями.",
    "Ваши старания в организации поездки будут вознаграждены.",
    "Не забывайте наслаждаться каждым моментом."
];

const m6 = [
    "Этот месяц будет удачным для самосовершенствования.",
    "Не бойтесь выходить из зоны комфорта.",
    "Скоро вас ждет возможность учиться новому.",
    "Ваши старания в развитии принесут плоды.",
    "Обратите внимание на свои сильные стороны.",
    "Не забывайте о важности самоанализа.",
    "Скоро вы получите вдохновение для новых идей.",
    "Ваши усилия в личностном росте будут оценены.",
    "Не бойтесь делиться своими знаниями с другими.",
    "Скоро вас ждет возможность изменить свою жизнь к лучшему.",
    "Ваши мечты станут более достижимыми.",
    "Не забывайте радоваться каждому шагу на пути к цели."
];

mass = [m1,m2,m3,m4,m5,m6]

let day
let month
let yyear
let countZod = 0
let countYear = 0
function dategod() {
    let date = new Date(time.value);
    day = date.getDate();
    month = date.getMonth() + 1;
    yyear = date.getFullYear();
    box5.style.display = "flex"
    box4.style.display = "flex"
    box3.style.display = "none"
    if (month == 1) {
        if (day > 20) {
            countZod = 10
        }
        else {
            countZod = 9
        }
    }
    if (month == 2) {
        if (day > 20) {
            countZod = 11
        }
        else {
            countZod = 10
        }
    }
    if (month == 3) {
        if (day > 20) {
            countZod = 0
        }
        else {
            countZod = 11
        }
    }
    if (month == 4) {
        if (day > 19) {
            countZod = 1
        }
        else {
            countZod = 0
        }
    }
    if (month == 5) {
        if (day > 20) {
            countZod = 2
        }
        else {
            countZod = 1
        }
    }
    if (month == 6) {
        if (day > 21) {
            countZod = 3
        }
        else {
            countZod = 2
        }
    }
    if (month == 7) {
        if (day > 21) {
            countZod = 4
        }
        else {
            countZod = 3
        }
    }
    if (month == 8) {
        if (day > 22) {
            countZod = 5
        }
        else {
            countZod = 4
        }
    }
    if (month == 9) {
        if (day > 23) {
            countZod = 6
        }
        else {
            countZod = 5
        }
    }
    if (month == 10) {
        if (day > 23) {
            countZod = 7
        }
        else {
            countZod = 6
        }
    }
    if (month == 11) {
        if (day > 21) {
            countZod = 8
        }
        else {
            countZod = 7
        }
    }
    if (month == 12) {
        if (day > 20) {
            countZod = 9
        }
        else {
            countZod = 8
        }

    }

    countYear = (yyear - 4) % 12

    Year()
}


function Year() {
    if (flagYear) {
        znak.innerHTML = "Ваш знак - " + zod[countZod]
        predskazania()
        imgyes.src = imagesZod[countZod]
    }
    else {
        znak.innerHTML = "Ваш знак - " + Yea[countYear]
        predskazania()
        imgyes.src = imagesYear[countYear]
    }
}

function predskazania(){
    texty.innerHTML = ""
    for (i=0;i<6;i++){
        let j =  Math.floor(Math.random() * 12);
        texty.innerHTML +=  mass[i][j] + "<br>"
    }
}

function yes2() {
    box5.style.display = "none"
    box4.style.display = "none"
    box3.style.display = "flex"
}

function no1() { alert("Жаль а могли бы узнать много нового") }


function clean() {
    box5.style.display = "none"
    box4.style.display = "none"
    box2.style.display = "flex"
}

function save() {
    // Контейнер откуда скачать
    const div = document.querySelector('#save');
    // Элементы которые нужно скачать
    const paragraphs = div.querySelectorAll('h4');

    let fileContent = '';

    // Формат id тега: контент 
    paragraphs.forEach((p) => {
        const id = p.getAttribute('id');
        const content = p.textContent;
        fileContent += `${id}: ${content}\n`;
    });

    // Создаем ссылку для скачивания файла
    const file = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'file.txt';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}

function closeWindow() {
    window.close();
}


var doc = new jsPDF();

function saveAsPDF() {

    doc.fromHTML($('#wrapper').html(), 15, 15, {
        'width': 170
    });
    doc.save('sample-file.pdf');
}