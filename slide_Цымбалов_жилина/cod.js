let hide = false;
function hide_show() {
    if (hide) {
        outputText.style.display = 'block';
        hide = false
        hide_.innerText = "Скрыть"
    }
    else {
        outputText.style.display = 'none';
        hide = true
        hide_.innerText = "Показать"
    }
}

document.getElementById('rangeSpeed').oninput = () => {
    document.getElementById('rangeSpeed1').innerText = document.getElementById('rangeSpeed').value + "мс";
};

let massiv_image = ["https://images.wallpaperscraft.ru/image/single/devushka_siluet_mlechnyj_put_1181590_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/zvezdnoe_nebo_oblaka_zakat_120716_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/gory_noch_dolina_1075359_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/gory_holmy_derevia_1082220_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/zakat_derevo_ozero_130063_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/trava_siluety_solntse_1297847_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/more_bereg_gorizont_1316736_1920x1080.jpg",
    "https://cdn.ingos.ru/images/blog/gde-uvidet-severnoe-siyanie-v-rossii.jpg"
];

let massiv_context = [
    "Девочка сидит на холме и смотря на млечный путь",
    "Прекрасное звездное небо с краными бликами на облаках",
    "Солнце село в горы, образуя прекраный фиолетово-красный закат",
    "Горный вид простелающийся до горизонта, заполнен оранжевыми деревьями",
    "Одиноко стоящее дерево посреди замезшего озера",
    "Клосья пшеници на фоне прекрасного заката",
    "Холодное море в рассветный час немного колышется",
    "Северное сияние раскинулось на всё небо средь белых гор"
]

let countImage = 0;
let imageActive = document.querySelector('#imageActive');

changeActiveBtn()
document.getElementById('slide-1').addEventListener('click', () => slideTo(0));
document.getElementById('slide-2').addEventListener('click', () => slideTo(1));
document.getElementById('slide-3').addEventListener('click', () => slideTo(2));
document.getElementById('slide-4').addEventListener('click', () => slideTo(3));
document.getElementById('slide-5').addEventListener('click', () => slideTo(4));
document.getElementById('slide-6').addEventListener('click', () => slideTo(5));
document.getElementById('slide-7').addEventListener('click', () => slideTo(6));
document.getElementById('slide-8').addEventListener('click', () => slideTo(7));

function changeActiveBtn() {
    let slideMinImg = document.querySelectorAll('.slide-min-img');
    slideMinImg.forEach(el => {
        el.classList.remove('active');
        el.classList.add('disactiv');
    });
    slideMinImg[countImage].classList.add('active');
    slideMinImg[countImage].classList.remove('disactiv');
}


function slideTo(index) {
    countImage = index
    width = (countImage + 1) * 12.5
    bar.innerText = width + "%";
    myBar.style.width = width + "%"
    changeActiveBtn()
    imageActive.src = massiv_image[index]
}

let width = 12.5

function right() {
    countImage = Math.min(countImage + 1, massiv_image.length - 1);
    imageActive.src = massiv_image[countImage]
    outputText.innerText = massiv_context[countImage]
    width = (countImage + 1) * 12.5
    bar.innerText = width + "%";
    myBar.style.width = width + "%"
    changeActiveBtn()
    if (massiv_image.length - 1 == countImage) {
        countImage = -1;
        width = 0
    }
}

function left() {
    countImage = Math.max(countImage - 1, 0);
    imageActive.src = massiv_image[countImage]
    outputText.innerText = massiv_context[countImage]
    width = (countImage + 1) * 12.5
    bar.innerText = width + "%";
    myBar.style.width = width + "%"
    changeActiveBtn()
    if (0 == countImage) {
        countImage = massiv_image.length;
        width = 112.5
    }
}

var setNW;
let falg = true;
function task1() {
    if (falg) {
        start.innerText = "Стоп";
        falg = false;
        setNW = setInterval(right, rangeSpeed.value);
    }
    else {
        start.innerText = "Cтарт";
        falg = true;
        clearInterval(setNW);
    }
}