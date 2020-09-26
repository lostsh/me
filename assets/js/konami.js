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
    document.write("Coucou toi ~");
}