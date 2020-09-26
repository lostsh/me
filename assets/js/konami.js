let keySeq = new Array();
function clrTab(){for(i in keySeq+1){keySeq.pop();}}

// Key pressed detection
document.onkeydown = keys;
function keys(objectHandler){
    //console.log("[+] Pressed "+objectHandler.key+"\n");

    keySeq.push(objectHandler.key);
    if(detectCodeKonami(keySeq) == 0){
        displayGlitch();
    }
    //console.log(keySeq);
}


/**
 * Return 0 if the konami code was correctly typed else return 1
 * @param {*} keyTab tab of key sequance
 */
function detectCodeKonami(keyTab){
    if(isValide(keyTab)==0){//if the key seq correspond with konami code
        if(keyTab.length == 10){
            //console.log("Okey then the code is valide !");
            clrTab();
            return 0;
        }else{
            //console.log("The code isn't complete but not wrong yet");
        }
    }else{//when the sequance of key do not correspond to the code clear the tab
        //console.log("WRONG Clear the tab");
        clrTab();
    }
    return 1;
}

/**
 * Return 1 if the table contain a wrong key
 * and return 0 if all the keys in the tab are valide (even if the tab is not complette)
 * @param {*} tabOfKeys Key tab
 */
function isValide(tabOfKeys){
    let valideSeq = new Array("ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a");
    for(var i=0;i<valideSeq.length;i++){
        if(valideSeq[i]!=tabOfKeys[i] && tabOfKeys[i]!="" && tabOfKeys[i]!=null){
            return 1;
        }
    }
    return 0;
}




function displayGlitch(){
    const bodyElement = document.querySelector("body");
    window.scrollTo(0,0);
    bodyElement.style.overflow = "hidden";

    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.zIndex = "1";
    div.style.top = "0";
    div.style.left = "0";
    div.style.backgroundColor = "red";
    div.style.width = window.innerWidth+"px";
    div.style.height = window.innerHeight+"px";
    div.style.opacity = "0.7";
    var div1 = document.createElement("div");
    div1.style.position = "absolute";
    div1.style.zIndex = "3";
    div1.style.top = "10px";
    div1.style.left = "10px";
    div1.style.backgroundColor = "blue";
    div1.style.width = window.innerWidth-20+"px";
    div1.style.height = window.innerHeight-20+"px";
    div1.style.opacity = "0.7";
    var div2 = document.createElement("div");
    div2.style.position = "absolute";
    div2.style.zIndex = "2";
    div2.style.top = "5px";
    div2.style.left = "5px";
    div2.style.backgroundColor = "yellow";
    div2.style.width = window.innerWidth-10+"px";
    div2.style.height = window.innerHeight-10+"px";
    div2.style.opacity = "0.7";
    

    bodyElement.appendChild(div);
    bodyElement.appendChild(div1);
    bodyElement.appendChild(div2);
    //document.write("Coucou toi ~");
}