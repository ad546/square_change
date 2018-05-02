$( ".item" ).click(function obtainBox(){
    let box = $( this ).css("background-color");
    console.log(box);
    if (box === "rgb(255, 255, 255)"){
        $( "#item2" ).css("background-color", "red");
        $( "#item3" ).css("background-color", "green");
        $( "#item4" ).css("background-color", "blue");
    }
    else {
        changeColor(box);
    }
    
});

function changeColor(box) {
    for (let i = 2; i <= 4; i++) {
        $( "#item" + i).css("background-color", box);
    }
}

