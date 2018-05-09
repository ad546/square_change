$( ".item" ).click(function obtainBox(){
    let box = $( this ).attr('id');

    changeColor(box);
});

function changeColor(box) {
    /*if (box === "rgb(255, 255, 255)"){
        $( "#item2" ).css("background-color", "red");
        $( "#item3" ).css("background-color", "green");
        $( "#item4" ).css("background-color", "blue");
    }
    else {
        for (let i = 2; i <= 4; i++) {
            $( "#item" + i).css("background-color", box);
        }
    }*/
    switch(box){
        case 'item1':
            $( "#item2" ).css("background-color", "red");
            $( "#item3" ).css("background-color", "green");
            $( "#item4" ).css("background-color", "blue");
            break;
        case 'item2':
            $( "#item2" ).css("background-color", "red");
            $( "#item3" ).css("background-color", "red");
            $( "#item4" ).css("background-color", "red");
            break;
        case 'item3':
            $( "#item2" ).css("background-color", "green");
            $( "#item3" ).css("background-color", "green");
            $( "#item4" ).css("background-color", "green");
            break;
        case 'item4':
            $( "#item2" ).css("background-color", "blue");
            $( "#item3" ).css("background-color", "blue");
            $( "#item4" ).css("background-color", "blue");
            break;

    }
}

