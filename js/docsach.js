
let listMenu = $(".list-group-item");

console.log(listMenu.length)
function view(item) {
   
    let idfile = $(item).attr("name");
    let duoifile = $(item).attr("value") == 1 ? ".htm" :".html";
    $("#ifview").attr("src", "suppage/" + idfile + duoifile);

}

function addMenu() {
    for (let i = 1; i <= 8; i++) {
        $('.list-group.menu').append('<li class="list-group-item" >\
    <a href="#" value="chuong'+ i + '" onclick="view(this);" >Nội Dung ' + i + '</a>\
    </li>');
    }
    $('.list-group.menu').append('<li class="list-group-item">\
    <a href="#" value ="pp"  onclick="view(this);">PP</a>\
    </li>\
    <li class="list-group-item">\
    <a href="#" value ="playmp3" onclick="view(this);" >Play mp3</a>\
    </li>');
}
addMenu();
//===== resize of w3school========//
/*
function showFrameSize() {
    var t;
    var width, height;
    width = Number(w3_getStyleValue(document.getElementById("iframeResult"), "width").replace("px", "")).toFixed();
    height = Number(w3_getStyleValue(document.getElementById("iframeResult"), "height").replace("px", "")).toFixed();
    document.getElementById("framesize").innerHTML = "Result Size: <span>" + width + " x " + height + "</span>";
}
var dragging = false;
var stack;
function fixDragBtn() {

}

function dragmove(e) {
    var percentage = (e.pageX / window.innerWidth) * 100;
    console.log(e.pageX);
    if (percentage > 5 && percentage < 98) {
        var mainPercentage = 100 - percentage;
        document.getElementById("divmenu").style.width = percentage + "%";
        document.getElementById("ifview").style.width = mainPercentage + "%";
    }
}

    

function dragend() {
    if (window.addEventListener) {
        window.addEventListener("mousemove", function (e) { dragmove(e); });
        window.addEventListener("touchmove", function (e) { dragmove(e); });

    }
}
*/