
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


  Blockly.Blocks['olhos'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/olhos_vaz.png", 75, 32, "*"))
          .appendField(new Blockly.FieldDropdown([
              [{"src":"imgs/olhos_vaz.png","width":75,"height":32,"alt":"*"},"\"vazio\""], 
              [{"src":"imgs/olhos_tra.png","width":75,"height":32,"alt":"*"},"\"tranquilo\""], 
              [{"src":"imgs/olhos_did.png","width":75,"height":32,"alt":"*"},"\"olha_did\""], 
              [{"src":"imgs/olhos_die.png","width":75,"height":32,"alt":"*"},"\"olha_die\""], 
              [{"src":"imgs/olhos_dsd.png","width":75,"height":32,"alt":"*"},"\"olha_dsd\""], 
              [{"src":"imgs/olhos_dse.png","width":75,"height":32,"alt":"*"},"\"olha_dse\""], 
              [{"src":"imgs/olhos_son.png","width":75,"height":32,"alt":"*"},"\"cansado\""], 
              [{"src":"imgs/olhos_bra.png","width":75,"height":32,"alt":"*"},"\"bravo\""], 
              [{"src":"imgs/olhos_est.png","width":75,"height":32,"alt":"*"},"\"estrela\""], 
              [{"src":"imgs/olhos_cor.png","width":75,"height":32,"alt":"*"},"\"coracao\""]]), 
                "tipo_olhar");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Selecione o olhar do robô");
   this.setHelpUrl("http://freirebot;oyaquelegal.org/manual/blocks/olhos");
    }
  };


  Blockly.JavaScript['olhos'] = function(block) {
    var dropdown_tipo_olhar = block.getFieldValue('tipo_olhar');

    var code = 'olhos(' + dropdown_tipo_olhar + ');\n';
    return code;
  };

  Blockly.Blocks['cabeca'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/cabeca_frente.png", 64, 58, "*"))
          .appendField(new Blockly.FieldDropdown([
            [{"src":"imgs/cabeca_esquerda.png","width":59,"height":58,"alt":"*"},"\"esquerda\""], 
            [{"src":"imgs/cabeca_direita.png","width":59,"height":58,"alt":"*"},"\"direita\""], 
            [{"src":"imgs/cabeca_frente.png","width":64,"height":58,"alt":"*"},"\"frente\""]]), 
            "virar");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(315);
   this.setTooltip("Selecione para onde você quer que o robo rode a cabeça!");
   this.setHelpUrl("https://freirebot.oyaquelegal.com/manual/block/cabeca");
    }
  };

  Blockly.JavaScript['cabeca'] = function(block) {
    var dropdown_virar = block.getFieldValue('virar');
    // TODO: Assemble JavaScript into code variable.
    var code = 'virarCabeca(' + dropdown_virar + ');\n';
    return code;
  };

  Blockly.Blocks['espera'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/pare.png", 32, 32, "*"))
          .appendField(new Blockly.FieldDropdown([
            ["- - ","2000"], 
            ["- - -","3000"], 
            ["- - - - -","5000"], 
            ["- - - - - - - -","8000"], 
            ["- - - - - - - - - - - - -","13000"]]), 
            "milessegundos");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("https://freirebot.oyaquelegal.com/manual/block/espera");
    }
  };

  Blockly.JavaScript['espera'] = function(block) {
    var dropdown_milessegundos = block.getFieldValue('milessegundos');
    var code = 'delay('+ dropdown_milessegundos +');\n';
    return code;
  };