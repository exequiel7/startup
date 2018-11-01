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
