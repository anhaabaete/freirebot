
Blockly.Blocks['sonar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("imgs/sonar.png", 32, 32, "*"));
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['sonar'] = function(block) {

    var code = 'sonar()';
    return [code, Blockly.JavaScript.ORDER_NONE];;
};


Blockly.Blocks['wheel_r'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/roda.png", 32, 32, "*"))
          .appendField(new Blockly.FieldImage("imgs/arrow_r.png", 15, 32, "*"))
          .appendField(new Blockly.FieldDropdown([["- -","2"], ["- - -","3"], ["- - - - -","5"], ["- - - - - - - -","8"], ["- - - - - - - - - - - - -","13"]]), "distance");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Faz executar passos num motor (roda) ");
   this.setHelpUrl("https://freirebot.oyaquelegal.org/manuais/blocos/rodas");
    }
};
Blockly.JavaScript['wheel_r'] = function(block) {
var dropdown_distance = block.getFieldValue('distance');

var code = 'runWheelR(' + dropdown_distance +');\n';
return code;
};  


Blockly.Blocks['wheel_l'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/roda.png", 32, 32, "*"))
          .appendField(new Blockly.FieldImage("imgs/arrow_l.png", 15, 32, "*"))
          .appendField(new Blockly.FieldDropdown([["- -","2"], ["- - -","3"], ["- - - - -","5"], ["- - - - - - - -","8"], ["- - - - - - - - - - - - -","13"]]), "distance");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Faz executar passos num motor (roda) ");
   this.setHelpUrl("https://freirebot.oyaquelegal.org/manuais/blocos/rodas");
    }
};

Blockly.JavaScript['wheel_l'] = function(block) {
var dropdown_distance = block.getFieldValue('distance');
// TODO: Assemble JavaScript into code variable.
var code = 'runWheelL(' + dropdown_distance +');\n';
return code;
};   

 	
Blockly.Blocks['se'] = {
  init: function() {
    this.appendValueInput("se")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("imgs/se.png", 30, 30, "*"));
    this.appendStatementInput("entao")
        .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("Condicional 'Se' Ex: 'Se' algo acontecer então faz o que está dentro");
 this.setHelpUrl("https://freirebot.oyaquelegal.org/manuais/blocos/se");
  }
};

Blockly.JavaScript['se'] = function(block) {
    var value_se = Blockly.JavaScript.valueToCode(block, 'se', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_entao = Blockly.JavaScript.statementToCode(block, 'entao');

    var code = 'if ('+ value_se +') \n{\n' + statements_entao + '}\n';
    return code;
  }; 


  