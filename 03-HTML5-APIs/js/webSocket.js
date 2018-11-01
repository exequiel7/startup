var wsURI = "ws://echo.websocket.org/";

function testWebSocket(msg){
    websocket = new WebSocket(wsURI);

    websocket.onopen = (objEvent) => onOpen(msg);

    websocket.onmessage = (objEvent) => onMessage(objEvent);

    websocket.onerror = (objEvent) => onError(objEvent);
}

function onOpen(msg){
    writeToScreen("Connected");
    writeToScreen("Sent: "+msg);
    websocket.send(msg);
}

function onMessage(objEvent){
    writeToScreen("Response: "+objEvent.data);
    websocket.close();
}

function onError(objEvent){
    writeToScreen("Error: "+objEvent.data);
}

function writeToScreen(msg){
    var output = document.getElementById("output");
    var pre = document.createElement("p");
    
    pre.innerHTML = msg;
    output.appendChild(pre);
}



