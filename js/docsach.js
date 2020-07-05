
let listMenu = $(".list-group-item");

console.log(listMenu.length)
function view(item) {

    let idfile = $(item).attr("name");
    let duoifile = $(item).attr("value") == 1 ? ".htm" : ".html";
    $("#ifview").attr("src", "suppage/" + idfile + duoifile);
    if ($(item).attr("value") == 0) {
        $("#show_view").css("padding", "0");
    } else $("#show_view").css("padding-top", "0vh");




}

$("#pos").mouseleave(function(){
    $("#btnMenu").click();
})

$("#btnMenu").click(function () {
    let val = $("#pos").attr("val")

    if (val == 1) {
        $("#pos").css("position", "relative");
        $("#pos").attr("val", "2");

        $("#iconMenu").attr("src", "image/icon/study.png")
    }
    else {
        $("#pos").css("position", "absolute");
        $("#pos").attr("val", "1")
        $("#iconMenu").attr("src", "image/icon/book.png")
    }

});

