document.addEventListener("DOMContentLoaded", () => {
  const polosa = document.getElementById("polosa");
  const volumeValue = document.getElementById("volume-value");
  const volumeCircle = document.getElementById("volume");

  let isDragging = false;
  let controlCenter = { x: 0, y: 0 };

  function calculateVolume(angle) {
    return Math.min(Math.max(Math.round((angle + 180) / 3.6), 0), 100);
  }

  function updateVolume(angle) {
    const volume = calculateVolume(angle);
    volumeValue.textContent = `${volume}`;
    polosa.style.transform = `translate(0, -50%) rotate(${angle}deg)`;
  }

  function getAngle(event) {
    const x = event.clientX - controlCenter.x;
    const y = event.clientY - controlCenter.y;
    return Math.atan2(y, x) * (180 / Math.PI);
  }

  volumeCircle.addEventListener("mousedown", (event) => {
    isDragging = true;
    const rect = volumeCircle.getBoundingClientRect();
    controlCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  });

  document.addEventListener("mousemove", (event) => {
    if (isDragging) {
      const angle = getAngle(event);
      updateVolume(angle);
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});

setInterval(function () {
  const logotxt = $("#logotxt");
  const currentColor = logotxt.css("color");
  if (currentColor === "rgb(255, 0, 0)") {
    // Красный цвет
    logotxt.css("color", "blue");
  } else {
    logotxt.css("color", "red");
  }
}, 10000);

$(document).ready(function () {
  // 2 task
  $(".centerphoto").click(function () {
    $(this).css("width", "160px");
    $(this).css("height", "160px");
    $(this).css("height", "160px");
    $(this).css("padding", "0 75px 0 75px");
    $("#text_new2").text("");
  });
  $("#right_").click(function () {
    $(this).css("width", "160px");
    $(this).css("height", "160px");
    $(this).css("padding", "0 75px 0 75px");
  });
  $("#left_").click(function () {
    $(this).css("width", "160px");
    $(this).css("height", "160px");
    $(this).css("padding", "0 75px 0 75px");
  });

  const Text_new1 = `травка зеленеет
солнышко блестит`;
  let Text_new2 = "Машина едет, радует владельца";
  let Text_new3 = "Своя машина это всегда в радость";

  // 3 задача: изменение текста
  $("#par31").click(function () {
    $("#text_new1").text(Text_new1);
  });
  $("#par32").click(function () {
    $("#text_new2").text(Text_new2);
  });
  $("#par33").click(function () {
    $("#text_new3").text(Text_new3);
  });

  // 4 задача: изменение прозрачности
  let flag4 = true;
  $(".par4").click(function () {
    $(this).css("filter", flag4 ? "opacity(10%)" : "opacity(0%)");
    flag4 = !flag4;
  });

  // 5 задача: генерация случайного числа
  $(".par5").click(function () {
    $("#par51").text(Math.floor(Math.random() * 12000));
  });

  // 6 задача: изменение прозрачности элементов
  map1 = false;
  gear1 = true;
  globus1 = true;
  $("#ss33, #34, #ss35").click(function () {
    console.log(this.id);
    if (this.id == "ss33") {
      if (gear1) {
        console.log("туда gear");
        $(".par7").css("opacity", "0%");
      } else {
        console.log("сюда gear");
        $(".par7").css("opacity", "100%");
      }
      gear1 = !gear1;
    } else if (this.id == "34") {
      if (globus1) {
        console.log("туда глобус");
        $(".par5").css("opacity", "0%");
      } else {
        console.log("Сюда глобус");
        $(".par5").css("opacity", "100%");
      }
      globus1 = !globus1;
    } else if (this.id == "ss35") {
      if (map1) {
        console.log("сюда карту");
        $(".par55").css("opacity", "100%");
      } else {
        console.log("туда карту");
        $(".par55").css("opacity", "0%");
      }
      map1 = !map1;
    }
  });

  // 7 задача: вращение элемента
  let num7 = 0;
  function rotate() {
    num7 += 4;
    $("#p61").css("transform", `rotate(${num7}deg)`);
  }

  $(".par7").click(function () {
    clearInterval(rotate);
    setInterval(rotate, 100);
  });

  let f1 = 0; // 8 task
  let f3 = 0;
  $(".par81").click(function () {
    if (f1 == 0 || f3 == 0) {
      f1 = 1;
      if (f1 == 1 && f3 == 1) {
        $(this).css("filter", "opacity(0%)");
        $(".par83").css("filter", "opacity(0%)");
      }
    }
  });

  $(".par82").click(function () {
    $(this).css("color", "yellow");
  });

  $(".par83").click(function () {
    if (f1 == 0 || f3 == 0) {
      f3 = 1;
      if (f1 == 1 && f3 == 1) {
        $(this).css("filter", "opacity(0%)");
        $(".par81").css("filter", "opacity(0%)");
      }
    }
  });

  let mas = ["gold", "rgb(219, 219, 176)", "darkcyan"];
  let count9 = 0; // 9 task
  $("#swapbt").click(function () {
    $(".wrapper").css("background-color", mas[count9]);
    count9 += 1;
    if (count9 == 3) {
      count9 = 0;
    }
  });
  let count10 = 0;
  function style_swap() {
    console.log("style_swap");

    const elements = $(".par101, .par102, .par103, .par104");
    if (count10 === 0) {
      elements.css("filter", "opacity(50%)");
      elements.css("border-radius", "0px");
      count10 = 1;
    } else {
      elements.css("filter", "opacity(100%)");
      elements.css("border-radius", "45px");
      count10 = 0;
    }
  }

  $(".par101, .par102, .par103, .par104").click(style_swap);

  let flag11 = false;
  $(".par11").click(function () {
    document.querySelectorAll("#compadydisc").forEach((compadydisc) => {
      flag11 = !flag11;

      if (flag11) {
        compadydisc.style.height = "138%";
      } else {
        compadydisc.style.height = "94%";
        console.log(flag11);
      }
    });
  });

  let count121 = 0; // 12 задача (Добавление текста)
  $(".par121").click(function () {
    if (count121 < 2) {
      $(this).append("Легковые автомобили: Обычно используются для личного передвижения.");
      count121++;
    }
  });

  let count122 = 0;
  $(".par122").click(function () {
    if (count122 < 2) {
      $(this).append(
        "Внедорожники: Эти автомобили имеют увеличенный клиренс и мощные двигатели, что позволяет им преодолевать сложные дорожные условия."
      );
      count122++;
    }
  });

  let count123 = 0;
  $(".par123").click(function () {
    if (count123 < 2) {
      $(this).append("Грузовые автомобили: Спроектированы для перевозки грузов.");
      count123++;
    }
  });
  document.querySelectorAll("#compadydisc").forEach((compadydisc) => {
    compadydisc.style.overflowY = "hidden";
    compadydisc.style.overflowY = "auto";
  });
  let flag13 = true; // 13 задача (Скрытие и показ)
  $(".par13").click(function () {
    if (flag13) {
      $(this).css("color", "blue");
      $("#hidetext").css("display", "block");

      flag13 = false;
    } else {
      $(this).css("color", "black");
      $("#hidetext").css("display", "none");

      flag13 = true;
    }
  });

  $(".par141").click(function () {
    // 14 задача (Показать дополнительный текст)
    $(".par141_").show();
  });
  $(".par142").click(function () {
    $(".par142_").show();
  });
  $(".par143").click(function () {
    $(".par143_").show();
  });

  let flag15 = true; // 15 задача (Смена изображений)
  function swap_() {
    if (flag15) {
      $("#par151").attr(
        "src",
        "https://avatars.mds.yandex.net/i?id=7b7c30d7788a908fcc04518c9deae001_l-5427734-images-thumbs&n=13"
      );
      $("#par152").attr(
        "src",
        "https://avatars.mds.yandex.net/i?id=483259c2dd2bb0c588067ab8db8a01a5_l-5345266-images-thumbs&n=13"
      );
      flag15 = false;
    } else {
      $("#par152").attr(
        "src",
        "https://avatars.mds.yandex.net/i?id=7b7c30d7788a908fcc04518c9deae001_l-5427734-images-thumbs&n=13"
      );
      $("#par151").attr(
        "src",
        "https://avatars.mds.yandex.net/i?id=483259c2dd2bb0c588067ab8db8a01a5_l-5345266-images-thumbs&n=13"
      );
      flag15 = true;
    }
  }

  $(".par151, .par152").click(swap_);

  let flag161 = true; // 16 задача (Изменение масштаба изображений)
  let flag162 = true;
  let flag163 = true; 
  $(".par161").click(function () {
    if (flag161) {  
        $(this).css("font-size", "2em");
        $(this).css("margin-bottom", "4px");
        $(this).css("color", "red");
        $(this).css("fontWeight", "bold");

    } else {
        $(this).css("font-size", "1.2em");
        $(this).css("margin-bottom", "18.720px");
    }
    flag161 = !flag161;
  });


  $(".par162").click(function () {
    if (flag162) {  
        $(this).css("font-size", "2em");
        $(this).css("margin-bottom", "4px");
    } else {
        $(this).css("font-size", "1.2em");
        $(this).css("margin-bottom", "18.720px");
    }
    flag162 = !flag162;
  });
  $(".par163").click(function () {
    if (flag163) {  
        $(this).css("font-size", "2em");
        $(this).css("margin-bottom", "4px");
    } else {
        $(this).css("font-size", "1.2em");
        $(this).css("margin-bottom", "18.720px");
    }
    flag163 = !flag163;
  });

  let massiv_image = [
    "https://i.pinimg.com/originals/03/11/2a/03112a270a4cd776cb2e66e2a61d9d33.jpg",
    "https://i.pinimg.com/736x/79/76/28/79762826ac246a71dea829a121808de4.jpg",
    "https://avatars.mds.yandex.net/get-mpic/5266697/img_id7655033859845393116.jpeg/orig",
  ];
  let countImageL = Math.floor(Math.random() * 3);
  console.log(countImageL);
  if (countImageL == 3) {
    countImageL = 0;
  }
  let countImageC = countImageL + 1;
  if (countImageC == 3) {
    countImageC = 0;
  }
  let countImageR = countImageC + 1;
  if (countImageR == 3) {
    countImageR = 0;
  }
  left_.src = massiv_image[countImageL];
  center.src = massiv_image[countImageC];
  right_.src = massiv_image[countImageR];

  // 18 задача (Слайдер изображений)
  $(document).ready(function () {
    window.left = function () {
      countImageL = (countImageL + 1) % 3;
      countImageC = (countImageC + 1) % 3;
      countImageR = (countImageR + 1) % 3;
      $("#left_").attr("src", massiv_image[countImageL]);
      $("#center").attr("src", massiv_image[countImageC]);
      $("#right_").attr("src", massiv_image[countImageR]);
    };

    window.right = function () {
      countImageL = (countImageL - 1 + 3) % 3;
      countImageC = (countImageC - 1 + 3) % 3;
      countImageR = (countImageR - 1 + 3) % 3;
      $("#left_").attr("src", massiv_image[countImageL]);
      $("#center").attr("src", massiv_image[countImageC]);
      $("#right_").attr("src", massiv_image[countImageR]);
    };

    $(".left-arrow").click(window.left);
    $(".right-arrow").click(window.right);
  });

  // 19 задача (Таймер и смена цвета)
  let time_s = 0;
  let time_m = 0;

  function timer() {
    time_s++;
    if (time_s == 60) {
      time_m++;
      time_s = 0;
    }
    $("#time").text(`Таймер ${time_m}:${time_s}`);
  }

  setInterval(timer, 1000);
  function colorTime() {
    const masColor = [
      "red",
      "blue",
      "darkgreen",
      "hotpink",
      "cadetblue",
      "yellow",
      "gray",
      "rebeccapurple",
      "peru",
      "skyblue",
    ];
    const rand = Math.floor(Math.random() * 10);
    $(".par19").css("color", masColor[rand]);
  }

  setInterval(colorTime, 60000);
});

const searchBox = document.getElementById("search-box");
const carBrands = document.getElementById("car-brands");

searchBox.addEventListener("focus", function () {
  carBrands.size = carBrands.options.length;
  $("#car-brands").css("position", "absolute");
  $(".par81").css("padding-top", "19px");
});

searchBox.addEventListener("blur", function () {
  carBrands.size = 0;
  $("#car-brands").css("position", "relative");
  $(".par81").css("padding-top", "0");
});

searchBox.addEventListener("input", function () {
  carBrands.size = carBrands.options.length;
});

searchBox.addEventListener("input", function () {
  const filter = searchBox.value.toLowerCase();
  const options = carBrands.options;

  for (let i = 0; i < options.length; i++) {
    const optionText = options[i].text.toLowerCase();
    options[i].hidden = !optionText.includes(filter);
  }
});
