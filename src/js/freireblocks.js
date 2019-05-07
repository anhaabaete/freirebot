

/***********************************************
 * Blocks Fase Nao Numerica Nao Alfabetica - 1 *
 ***********************************************/

Blockly.Blocks['sonar_1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("imgs/sonar.png", 32, 32, "*"));
    this.setOutput(true, null);
    this.setColour(247);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['sonar_1'] = function(block) {

    var code = 'sonar()';
    return [code, Blockly.JavaScript.ORDER_NONE];;
};


Blockly.Blocks['wheel_r_1'] = {
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
Blockly.JavaScript['wheel_r_1'] = function(block) {
var dropdown_distance = block.getFieldValue('distance');

var code = 'runWheelR(' + dropdown_distance +');\n';
return code;
};  


Blockly.Blocks['wheel_l_1'] = {
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

Blockly.JavaScript['wheel_l_1'] = function(block) {
var dropdown_distance = block.getFieldValue('distance');
// TODO: Assemble JavaScript into code variable.
var code = 'runWheelL(' + dropdown_distance +');\n';
return code;
};   

 	
Blockly.Blocks['se_1'] = {
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

Blockly.JavaScript['se_1'] = function(block) {
    var value_se = Blockly.JavaScript.valueToCode(block, 'se', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_entao = Blockly.JavaScript.statementToCode(block, 'entao');

    var code = 'if ('+ value_se +') \n{\n' + statements_entao + '}\n';
    return code;
  }; 


  Blockly.Blocks['olhos_1'] = {
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


  Blockly.JavaScript['olhos_1'] = function(block) {
    var dropdown_tipo_olhar = block.getFieldValue('tipo_olhar');

    var code = 'olhos(' + dropdown_tipo_olhar + ');\n';
    return code;
  };

  Blockly.Blocks['cabeca_1'] = {
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

  Blockly.JavaScript['cabeca_1'] = function(block) {
    var dropdown_virar = block.getFieldValue('virar');
    // TODO: Assemble JavaScript into code variable.
    var code = 'virarCabeca(' + dropdown_virar + ');\n';
    return code;
  };

  Blockly.Blocks['espera_1'] = {
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

  Blockly.JavaScript['espera_1'] = function(block) {
    var dropdown_milessegundos = block.getFieldValue('milessegundos');
    var code = 'delay('+ dropdown_milessegundos +');\n';
    return code;
  };

 
  /***********************************************
 * Blocks Fase [NUMERICA] Nao Alfabetica - 2   *
 ***********************************************/


Blockly.Blocks['sonar_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("imgs/sonar.png", 32, 32, "*"));
    this.setOutput(true, null);
    this.setColour(247);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['sonar_2'] = function(block) {

    var code = 'sonar()';
    return [code, Blockly.JavaScript.ORDER_NONE];;
};


Blockly.Blocks['wheel_r_2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/roda.png", 32, 32, "*"))
          .appendField(new Blockly.FieldImage("imgs/arrow_r.png", 15, 32, "*"))
          .appendField(new Blockly.FieldDropdown([
            ["1","1"],["2","2"], ["3","3"], ["5","5"], ["8","8"], ["13","13"]]), "distance");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Faz executar passos num motor (roda) ");
   this.setHelpUrl("https://freirebot.oyaquelegal.org/manuais/blocos/rodas");
    }
};
Blockly.JavaScript['wheel_r_2'] = function(block) {
var dropdown_distance = block.getFieldValue('distance');

var code = 'runWheelR(' + dropdown_distance +');\n';
return code;
};  


Blockly.Blocks['wheel_l_2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/roda.png", 32, 32, "*"))
          .appendField(new Blockly.FieldImage("imgs/arrow_l.png", 15, 32, "*"))
          .appendField(new Blockly.FieldDropdown([
            ["1","1"],["2","2"], ["3","3"], ["5","5"], ["6","8"], ["13","13"]]), "distance");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Faz executar passos num motor (roda) ");
   this.setHelpUrl("https://freirebot.oyaquelegal.org/manuais/blocos/rodas");
    }
};

Blockly.JavaScript['wheel_l_2'] = function(block) {
var dropdown_distance = block.getFieldValue('distance');
// TODO: Assemble JavaScript into code variable.
var code = 'runWheelL(' + dropdown_distance +');\n';
return code;
};   

 	
Blockly.Blocks['se_2'] = {
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

Blockly.JavaScript['se_2'] = function(block) {
    var value_se = Blockly.JavaScript.valueToCode(block, 'se', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_entao = Blockly.JavaScript.statementToCode(block, 'entao');

    var code = 'if ('+ value_se +') \n{\n' + statements_entao + '}\n';
    return code;
  }; 


  Blockly.Blocks['olhos_2'] = {
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


  Blockly.JavaScript['olhos_2'] = function(block) {
    var dropdown_tipo_olhar = block.getFieldValue('tipo_olhar');

    var code = 'olhos(' + dropdown_tipo_olhar + ');\n';
    return code;
  };

  Blockly.Blocks['cabeca_2'] = {
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

  Blockly.JavaScript['cabeca_2'] = function(block) {
    var dropdown_virar = block.getFieldValue('virar');
    // TODO: Assemble JavaScript into code variable.
    var code = 'virarCabeca(' + dropdown_virar + ');\n';
    return code;
  };

  Blockly.Blocks['espera_2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/pare.png", 32, 32, "*"))
          .appendField(new Blockly.FieldDropdown([
            ["1","1000"],
            ["2","2000"], 
            ["3","3000"], 
            ["5","5000"], 
            ["8","8000"], 
            ["13","13000"]]), 
            "milessegundos");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("https://freirebot.oyaquelegal.com/manual/block/espera");
    }
  };

  Blockly.JavaScript['espera_2'] = function(block) {
    var dropdown_milessegundos = block.getFieldValue('milessegundos');
    var code = 'delay('+ dropdown_milessegundos +');\n';
    return code;
  };



/***********************************************
 * Blocks Fase [NUMERICA] E [ALFABETICA] - 3   *
 ***********************************************/

 
Blockly.Blocks['sonar_3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("imgs/sonar.png", 32, 32, "*"));
    this.setOutput(true, null);
    this.setColour(247);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['sonar_3'] = function(block) {

    var code = 'sonar()';
    return [code, Blockly.JavaScript.ORDER_NONE];;
};


Blockly.Blocks['wheel_r_3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/roda.png", 32, 32, "*"))
          .appendField(new Blockly.FieldImage("imgs/arrow_r.png", 15, 32, "*"))
          .appendField(new Blockly.FieldDropdown([
            ["1","1"],
            ["2","2"], 
            ["3","3"], 
            ["5","5"], 
            ["8","8"], 
            ["13","13"]
          ]), "distance");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Faz executar passos num motor (roda) ");
   this.setHelpUrl("https://freirebot.oyaquelegal.org/manuais/blocos/rodas");
    }
};
Blockly.JavaScript['wheel_r_3'] = function(block) {
var dropdown_distance = block.getFieldValue('distance');

var code = 'runWheelR(' + dropdown_distance +');\n';
return code;
};  


Blockly.Blocks['wheel_l_3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/roda.png", 32, 32, "*"))
          .appendField(new Blockly.FieldImage("imgs/arrow_l.png", 15, 32, "*"))
          .appendField(new Blockly.FieldDropdown([
            ["1","1"],
            ["2","2"], 
            ["3","3"], 
            ["5","5"], 
            ["8","8"], 
            ["13","13"]
          ]), "distance");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Faz executar passos num motor (roda) ");
   this.setHelpUrl("https://freirebot.oyaquelegal.org/manuais/blocos/rodas");
    }
};

Blockly.JavaScript['wheel_l_3'] = function(block) {
var dropdown_distance = block.getFieldValue('distance');
// TODO: Assemble JavaScript into code variable.
var code = 'runWheelL(' + dropdown_distance +');\n';
return code;
};   

 	
Blockly.Blocks['se_3'] = {
  init: function() {
    this.appendValueInput("se_valor")
        .setCheck(null)
        .appendField("Se?");
    this.appendStatementInput("se")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Senão...");
    this.appendStatementInput("senao")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("Se alfabético, lógica de decisão");
 this.setHelpUrl("http://freirebot.oyaquelegal.org/manual/se");
  }
};

Blockly.JavaScript['se_3'] = function(block) {
  var value_se_valor = Blockly.JavaScript.valueToCode(block, 'se_valor', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_se = Blockly.JavaScript.statementToCode(block, 'se');
  var statements_senao= Blockly.JavaScript.statementToCode(block, 'senao');
  
  var code = 'if ('+ value_se_valor +') \n{\n' + statements_se + '\n}\n' +
            ' else \n{\n'+ statements_senao + '\n}\n';
    return code;
  }; 


  Blockly.Blocks['olhos_3'] = {
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


  Blockly.JavaScript['olhos_3'] = function(block) {
    var dropdown_tipo_olhar = block.getFieldValue('tipo_olhar');

    var code = 'olhos(' + dropdown_tipo_olhar + ');\n';
    return code;
  };

  Blockly.Blocks['cabeca_3'] = {
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

  Blockly.JavaScript['cabeca_3'] = function(block) {
    var dropdown_virar = block.getFieldValue('virar');
    // TODO: Assemble JavaScript into code variable.
    var code = 'virarCabeca(' + dropdown_virar + ');\n';
    return code;
  };

  Blockly.Blocks['espera_3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("imgs/pare.png", 32, 32, "*"))
          .appendField(new Blockly.FieldDropdown([
            ["1 Segundo","1000"],
            ["2 segundos","2000"], 
            ["3 segundos","3000"], 
            ["5 segundos-","5000"], 
            ["8 segundos","8000"], 
            ["13 segundos","13000"]]), 
            "milessegundos");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("https://freirebot.oyaquelegal.com/manual/block/espera");
    }
  };

  Blockly.JavaScript['espera_3'] = function(block) {
    var dropdown_milessegundos = block.getFieldValue('milessegundos');
    var code = 'delay('+ dropdown_milessegundos +');\n';
    return code;
  };


/**********************************************************************
 * ----------------------- [OUTROS BLOCOS] ---------------------------*
 **********************************************************************/

Blockly.Blocks['looping'] = {
  init: function() {
    this.appendStatementInput("main")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("imgs/infinite.png", 64, 32, "*"));
    this.setColour(300);
 this.setTooltip("Todo sistema roda infinitamente todas as peças precisam estar dentro desta");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['looping'] = function(block) {
  var statements_main = Blockly.JavaScript.statementToCode(block, 'main');
  // TODO: Assemble JavaScript into code variable.
  var code = 'void loop {\n' + 
            statements_main + 
            '\n}';
  return code;
};


Blockly.Blocks['for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Repita ")
        .appendField(new Blockly.FieldNumber(0), "vezes")
        .appendField("vezes");
    this.appendStatementInput("codigo")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['for'] = function(block) {
  var number_vezes = block.getFieldValue('vezes');
  var statements_codigo = Blockly.JavaScript.statementToCode(block, 'codigo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for(int i = 1;i<'+ number_vezes +';i++) {\n '+ statements_codigo +'\n}\n';
  return code;
};