function dropHandler(objEvent){
    objEvent.preventDefault();

    if(objEvent.dataTransfer.items){ //Use DataTransferItemList interface to access the file(s)
        for(var i=0; i< objEvent.dataTransfer.items.lenght; i++){
            if(objEvent.dataTransfer.items[i].kind == 'file'){ //If dropped items aren't files, reject them
                var file = objEvent.dataTransfer.items[i].getAsfile();
                console.log(file.name);
            }
        }
    }else{// Use DataTransfer interface to access the file(s)
        for(var i=0; i<objEvent.dataTransfer.files.lenght; i++){
            console.log(objEvent.dataTransfer.files[i].name);
        }
    }
}

function dragOverHandler(objEvent) {
    objEvent.preventDefault();
}

/**function start(){
    drop = document.getElementById("contentInput");
    
    drop.addEventListener("dragenter", function(objEvent){
        objEvent.preventDefault();
    }, false);
    drop.addEventListener("dragover", function(objEvent){
        objEvent.preventDefault();
    }, false);
    drop.addEventListener("drop", dropped, false);
}

function dropped(objEvent){
    var arch;
    var list = "";

    objEvent.preventDefault();
    arch = objEvent.dataTransfer.files;
    for(var i=0; i<arch.length; i++){
        list = arch[i].name;
    }
    drop.innerHTML = list;
}

window.addEventListener("load", start, false);
**/