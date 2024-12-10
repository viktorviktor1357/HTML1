let massiv_image = ["https://avatars.mds.yandex.net/get-entity_search/2394172/993207126/S122x122Smart_2x",
    "https://avatars.mds.yandex.net/get-entity_search/2269087/1009949054/S122x122Smart_2x",
    "https://avatars.mds.yandex.net/get-entity_search/2304479/993138934/S122x122Smart_2x"]
let countImage = 0

// 17 task slider
function left() {
    countImage += 1
    if (countImage == 3) { countImage = 0 }
    center.src = massiv_image[countImage]
    console.log("left")
}
function right() {
    countImage -= 1
    if (countImage == -1) { countImage = 2 }
    center.src = massiv_image[countImage]
}

setInterval(right,3000)

b1.style.display = "none"
b2.style.display = "none"

function yes1(){
    b1.style.display = "flex"
    b2.style.display = "flex"
}
function no1(){
    b1.style.display = "none"
    b2.style.display = "none"
}