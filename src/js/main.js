
/**
 * Open File like download
 */
function abrirNoArduino() {
    var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);

    var filename = getFilename();
    
    code = btoa(code);

    var link = document.createElement('a');
    link.download = filename;
    link.href = 'data:text/ino;base64,' + code;
    document.body.appendChild(link);
    link.click();
    link.id = 'tempa';
    setTimeout(function() { //sanitize element
        element = document.getElementById("tempa"); 
        element.parentNode.removeChild(element);
    }, 1000);
}

/**
 * Function to create a beauty name to download
 */
function getFilename() {
    var dt = new Date();
    toString()
    
    return 'oya' + dt.getTime().toString().substr(-8) + '.ino';
}

