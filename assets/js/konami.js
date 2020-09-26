let keySeq = ["","","","","","","","","",""];

// Key pressed detection
document.onkeydown = keys;
function keys(objectHandler){
    console.log("[+] Pressed "+objectHandler.key+"\n");

    keySeq.push(objectHandler.key);
    detectCodeKonami();
    /*
    switch (objectHandler.key) {
        case 'ArrowUp':
            console.log("[+] Pressed "+objectHandler.key+"\n");
            break;
        case 'ArrowDown':
            console.log("[+] Pressed "+objectHandler.key+"\n");
            break;
        case 'ArrowLeft':
            console.log("[+] Pressed "+objectHandler.key+"\n");
            break;
        case 'ArrowRight':
            console.log("[+] Pressed "+objectHandler.key+"\n");
            break;
        case 'a':
            console.log("[+] Pressed "+objectHandler.key+"\n");
            break;
        case 'b':
            console.log("[+] Pressed "+objectHandler.key+"\n");
            break;
    }*/
}

function main(){

}

function detectCodeKonami(){

}