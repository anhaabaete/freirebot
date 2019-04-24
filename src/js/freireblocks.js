Blockly.Blocks['wheels'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://freirebot.oyaquelegal.org/imgs/roda.png", 32, 32, "*"))
          .appendField(new Blockly.FieldImage("https://freirebot.oyaquelegal.org/imgs/arrow_r.png", 15, 32, "*"))
          .appendField(new Blockly.FieldDropdown([["- -","2"], ["- - -","3"], ["- - - - -","5"], ["- - - - - - - -","8"], ["- - - - - - - - - - - - -","13"]]), "distance");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Faz executar passos num motor (roda) ");
   this.setHelpUrl("https://freirebot.oyaquelegal.org/manuais/blocos/rodas");
    }
};


Blockly.JavaScript['wheels'] = function(block) {
var dropdown_distance = block.getFieldValue('distance');
// TODO: Assemble JavaScript into code variable.
var code = '...;\n';
return code;
};    