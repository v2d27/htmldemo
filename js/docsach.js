
let listMenu = $(".list-group-item");

console.log(listMenu.length)
function view(item){
    console.log( $(item).attr("value"));
    let idfile= $(item).attr("value");
    $("#ifview").attr("src","suppage/"+idfile+".html");
    
}
