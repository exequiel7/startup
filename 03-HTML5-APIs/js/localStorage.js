//Local Storage
var inputTextarea = document.querySelector('.content-imput');
var saveButton = document.querySelector('.saveButton');

saveButton.addEventListener('click', saveLS);
inputTextarea.value = localStorage.getItem('content');

function saveLS(){
    localStorage.setItem('content', inputTextarea.value);
}

function deleteLS(){
    var clearButton = document.querySelector('.clearButton');

    clearButton.addEventListener('click', clearLS);
}

function clearLS(){
    localStorage.clear();
}

//IndexedDB
