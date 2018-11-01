//IndexedDB
var db;

function startIndexedDB(){
    var saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", addObj, false);
    var request = indexedDB.open("myDatabase"); // create database
    request.onsuccess = function(objEvent){
        db = objEvent.target.result; //store in 'db' the database
    }
    
    request.onupgradeneeded = function(objEvent){
        db = objEvent.target.result;
        db.createObjectStore("inputText", {keyPath: "contentInput"});//create object store inside the database
    }
}

function addObj(){
    var contentInput = document.getElementById("contentInput").value;

    var trans =  db.transaction(["inputText"], "readwrite");

    var store = trans.objectStore("inputText");
    
    var objAdd = store.add({contentInput: contentInput});
}

function clearIndexedDB(){
    var clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", clear, false);
}

function clearData(){
    var trans = db.transaction(["inputText"], "readwrite");
    var objStore = trans.objectStore("inputText");
    var request = objStore.clear(); // Make a request to clear all the data out of the object store
    request.onerror = function(objEvent){
        console.log("transaction not opened due to erorr: "+ trans.error);
    };
    request.onsuccess = function(objEvent){
        console.log("Request successful.")
        document.getElementById("contentInput").value = "";
    }  
}


//https://www.taniarascia.com/how-to-use-local-storage-with-javascript/

//Local Storage
function startLocalStorage(){
    var saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", function(){
        var inputText = document.getElementById("contentInput").value;
        localStorage.setItem("content", inputText);
    });
}

function clearLS(){
    var clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", function(){
        localStorage.clear();
    })
}

window.addEventListener("load",startIndexedDB,false);
window.addEventListener("load",startLocalStorage,false);