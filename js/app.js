$( ".item" ).click(function obtainBox(){
    let box = $( this ).css("background-color");
    changeColor(box);
});

function changeColor(box) {
    for (let i = 1; i <= 4; i++) {
        $( "#item" + i).css("background-color", box);
    }
}

