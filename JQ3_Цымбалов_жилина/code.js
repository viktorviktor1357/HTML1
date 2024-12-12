$(document).ready(function () {
    let mas = ["mediumpurple", "mediumturquoise", "greenyellow"];
    let count9 = 0; // 9 task
    $("#scrol").click(function () {
        $(".wrapper").css("background-color", mas[count9]);
        count9 = Math.floor(Math.random() * 3);
    });
    let count2 = 0
    $("#verify").click(function () {
        if ($("#task21").val() !== "") { count2 += 1 }
        if ($("#task22").val() !== "") { count2 += 1 }
        if ($("#task23").val() !== "") { count2 += 1 }
        if ($("#task24").val() !== "") { count2 += 1 }
        if ($("#task25").val() !== "") { count2 += 1 }
        if (count2 != 5) { $("#p2").text("не все поля заполнены").show().fadeOut(1000); }
        count2 = 0
    });
    y = 0
    x = 0
    $("#up").click(function () {
        $("#box").css("transform", `translateY(${y -= 100}px) translateX(${x}px)`)
    });
    $("#down").click(function () {
        $("#box").css("transform", `translateY(${y += 100}px) translateX(${x}px)`)
    });
    $("#right").click(function () {
        $("#box").css("transform", `translateX(${x += 100}px) translateY(${y}px)`)
    });
    $("#left").click(function () {
        $("#box").css("transform", `translateX(${x -= 100}px) translateY(${y}px)`)
    });

    jQuery(function ($) {
        var currentMousePos = { x: -1, y: -1 };
        $(document).mousemove(function (event) {
            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;
            console.log("y: " + currentMousePos.y + "x: " + currentMousePos.x)
        });
    });
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

$('strong, em').hover(
    function () {
        $(this).css({
            'font-size': '1.2em',
            'color': '#00698f'
        });
    },
    function () {
        $(this).css({
            'font-size': '',
            'color': ''
        });
    }
);

$('#boxx').hover(function() {
    $('.some').addClass('rotate');
  }, function() {
    $('.some').removeClass('rotate');
  });