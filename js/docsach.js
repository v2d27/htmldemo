
let listMenu = $(".list-group-item");

console.log(listMenu.length)
function view(item) {
    console.log($(item).attr("value"));
    let idfile = $(item).attr("value");
    $("#ifview").attr("src", "suppage/" + idfile + ".html");

}

function addMenu(){
    for (let i = 1; i <= 14; i++) {
        $('.list-group.menu').append('<li class="list-group-item" >\
    <a href="#" value="chuong'+ i + '" onclick="view(this);" >Chương ' + i + '</a>\
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

