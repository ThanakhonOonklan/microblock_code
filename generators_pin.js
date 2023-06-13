    //Motor Strat //////////////////////////

    Blockly.Python['stopMotor'] = function(block) {
      Blockly.Python.definitions_['import_machine'] = 'import machine';
      Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
      Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

      Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
      Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
      Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
      Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
      Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
      Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
      Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
      Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
      var code = '...';
      var code = 'stopMotor()\n';
      var functionName = Blockly.Python.provideFunction_(
        'stopMotor',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        '  LMotor.off()',
        '  pwm1.duty(0)',
        '  RMotor.off()',   
        '  pwm2.duty(0)',
        '  LMotor2.off()',
        '  pwm3.duty(0)',
        '  RMotor2.off()',
        '  pwm4.duty(0)']);
      return code;
    };
 
  Blockly.Python['moveAward'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
    
    Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
    Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
    Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
    Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
    Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
    Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

    var moveAward = block.getFieldValue('moveAward');
    var speed = block.getFieldValue('speed');
    var code = `moveAward(${moveAward}, ${speed})\n`;
    var functionName = Blockly.Python.provideFunction_(
      'moveAward',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
      '  LMotor.on()',
      '  pwm1.duty(speed)',
      '  RMotor.on()',
      '  pwm2.duty(speed)',
      '  LMotor2.off()',
      '  pwm3.duty(0)',
      '  RMotor2.off()',
      '  pwm4.duty(0)',
      '  time.sleep(duration)']);
    return code;
  };

  Blockly.Python['moveBack'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

    Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
    Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
    Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
    Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
    Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
    Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
    var moveBack = block.getFieldValue('moveBack');
    var speed = block.getFieldValue('speed');
    var code = `moveBack(${moveBack}, ${speed})\n`;
    var functionName = Blockly.Python.provideFunction_(
      'moveBack',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
      '  LMotor.off()',
      '  pwm1.duty(0)',
      '  RMotor.off()',
      '  pwm2.duty(0)',
      '  LMotor2.on()',
      '  pwm3.duty(speed)',
      '  RMotor2.on()',
      '  pwm4.duty(speed)',
      '  time.sleep(duration)']);
    return code;
  };

  Blockly.Python['moveLeft'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

    Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
    Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
    Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
    Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
    Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
    Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
    var moveLeft = block.getFieldValue('moveLeft');
    var speed = block.getFieldValue('speed');
    var code = `moveLeft(${moveLeft}, ${speed})\n`;
    var functionName = Blockly.Python.provideFunction_(
      'moveLeft',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
      '  LMotor.off()',
      '  pwm1.duty(0)',
      '  RMotor.on()',
      '  pwm2.duty(speed)',
      '  LMotor2.off()',
      '  pwm3.duty(0)',  
      '  RMotor2.off()',
      '  pwm4.duty(0)',
      '  time.sleep(duration)']);
    return code;
  };

  Blockly.Python['moveRight'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

    Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
    Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
    Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
    Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
    Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
    Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
    Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';
    var moveLeft = block.getFieldValue('moveRight');
    var speed = block.getFieldValue('speed');
    var code = `moveRight(${moveLeft}, ${speed})\n`;
    var functionName = Blockly.Python.provideFunction_(
      'moveRight',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(duration, speed):',
      '  LMotor.on()',
      '  pwm1.duty(speed)',
      '  RMotor.off()',
      '  pwm2.duty(0)',
      '  LMotor2.off()',
      '  pwm3.duty(0)',  
      '  RMotor2.off()',
      '  pwm4.duty(0)',
      '  time.sleep(duration)']);
    return code;
  };

Blockly.Python['Forward'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

  var speed = block.getFieldValue('speed');
  var code = `Forward(${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'Forward',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
    '  LMotor.on()',
    '  pwm1.duty(speed)',
    '  RMotor.on()',
    '  pwm2.duty(speed)',
    '  LMotor2.off()',
    '  pwm3.duty(0)',
    '  RMotor2.off()',
    '  pwm4.duty(0)']);
  return code;
};

Blockly.Python['Backward'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

  var speed = block.getFieldValue('speed');
  var code = `Backward(${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'Backward',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
    '  LMotor.off()',
    '  pwm1.duty(0)',
    '  RMotor.off()',
    '  pwm2.duty(0)',
    '  LMotor2.on()',
    '  pwm3.duty(speed)',
    '  RMotor2.on()',
    '  pwm4.duty(speed)']);
  return code;
};

Blockly.Python['Left'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

  var speed = block.getFieldValue('speed');
  var code = `Left(${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'Left',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
    '  LMotor.off()',
    '  pwm1.duty(0)',
    '  RMotor.on()',
    '  pwm2.duty(speed)',
    '  LMotor2.off()',
    '  pwm3.duty(0)',  
    '  RMotor2.off()',
    '  pwm4.duty(0)']);
  return code;
};

Blockly.Python['Right'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
  Blockly.Python.definitions_['LMotor'] = 'LMotor = machine.Pin(27, machine.Pin.OUT);';
  Blockly.Python.definitions_['LMotor2'] = 'LMotor2 = machine.Pin(14, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor'] = 'RMotor = machine.Pin(25, machine.Pin.OUT);';
  Blockly.Python.definitions_['RMotor2'] = 'RMotor2 = machine.Pin(26, machine.Pin.OUT);';
  Blockly.Python.definitions_['pwm1'] = 'pwm1 = machine.PWM(LMotor)';
  Blockly.Python.definitions_['pwm2'] = 'pwm2 = machine.PWM(RMotor)';
  Blockly.Python.definitions_['pwm3'] = 'pwm3 = machine.PWM(LMotor2)';
  Blockly.Python.definitions_['pwm4'] = 'pwm4 = machine.PWM(RMotor2)';

  var speed = block.getFieldValue('speed');
  var code = `Right(${speed})\n`;
  var functionName = Blockly.Python.provideFunction_(
    'Right',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(speed):',
    '  LMotor.on()',
    '  pwm1.duty(speed)',
    '  RMotor.off()',
    '  pwm2.duty(0)',
    '  LMotor2.off()',
    '  pwm3.duty(0)',  
    '  RMotor2.off()',
    '  pwm4.duty(0)']);
  return code;
};
//Motor End ///////////////////////////////////

// servo Start ////////////////////////////////
Blockly.Python['servo'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
    var code = `PWM(Pin(${value_pin}), freq=50).duty(int(25.57 + (((${value_angle}) / 180.0) * 102.3)))\n`;
    return code;
  };
// servo End //////////////////////////////////

//OLED Start //////////////////////////////////
Blockly.Python['oled_init'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';

  var dropdown_size = block.getFieldValue('size');

  var code = `oled = OLED.SSD1306_I2C(128, ${+dropdown_size == 0 ? 64 : 32})\n`;
  return code;
};

Blockly.Python['oled_draw_text'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';
  
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);

  var code = `oled.text(${value_text}, ${value_x}, ${value_y}, 1); oled.show()\n`;
  return code;
};

Blockly.Python['oled_draw_line'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';

  var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);

  var code = `oled.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, 1); oled.show()\n`;
  return code;
};

Blockly.Python['oled_draw_rect'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';

  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  var dropdown_fill = block.getFieldValue('fill');

  var code = `oled.${(+dropdown_fill) ? 'fill_rect' : 'rect'}(${value_x}, ${value_y}, ${value_width}, ${value_height}, 1); oled.show()\n`;
  return code;
};

Blockly.Python['oled_fill'] = function(block) {
  var code = 'oled.fill(1); oled.show()\n';
  return code;
};

Blockly.Python['oled_clear'] = function(block) {
  var code = 'oled.fill(0); oled.show()\n';
  return code;
};
//OLED END ////////////////////////////////////

// buzzer Start ///////////////////////////////
function buzzerWriteFunction() {
  let board = boards.find(board => board.id === boardId);

  const _duty = board?.chip === "RP2" ? "duty_u16" : "duty";
  const _max_duty = board?.chip === "RP2" ? "65535" : "1023";

  return Blockly.Python.provideFunction_(
    'buzzerWrite',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin, freq=1000, duty=50, stop=0):',
    '  pwm = PWM(Pin(pin))',
    '  pwm.freq(freq)',
    '  pwm.' + _duty + '(int(duty / 100 * ' + _max_duty + '))',
    '  if stop > 0:',
    '    sleep(stop)',
    '    pwm.' + _duty + '(0)'
  ]);
}
Blockly.Python['buzzer1'] = function(block) {
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var code = `${buzzerWriteFunction()}(${value_pin}, freq=${value_freq}, stop=${value_time})\n`;
  return code;
};

Blockly.Python['buzzer2'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var code = `${buzzerWriteFunction()}(${value_pin}, freq=${value_freq})\n`;
  return code;
};

Blockly.Python['buzzer3'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var code = `${buzzerWriteFunction()}(${value_pin}, duty=0)\n`;
  return code;
};
// buzzer End /////////////////////////////////

// LED Start //////////////////////////////////
Blockly.Python['led_onoff'] = function(block) {
  Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
  
  var dropdown_trig = block.getFieldValue('pin_trig');
  var dropdown_onoff = Blockly.Python.valueToCode(block, 'onoff', Blockly.Python.ORDER_ATOMIC);
  code = '';;
  if(dropdown_trig == 1){
    code = `Pin(33, Pin.OUT).value(${dropdown_onoff})\n`;
  }else if(dropdown_trig == 2){
    code = `Pin(12, Pin.OUT).value(${dropdown_onoff})\n`;
  }
  return code;
};
// LED End /////////////////////////////////////

// Ultrasonic Start ////////////////////////////
Blockly.Python['ultra_read'] = function(block) {
  Blockly.Python.definitions_['import_ultra'] = 'import Ultrasonic';
  Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';


  Blockly.Python.definitions_['triger_pin'] = 'ULTRASONIC_TRIGGER_PIN = 2';
  Blockly.Python.definitions_['echo_pin'] = 'ULTRASONIC_ECHO_PIN = 15';
  
  var math_choice = block.getFieldValue('math');
  var read_number = Blockly.Python.valueToCode(block, 'read_num', Blockly.Python.ORDER_ATOMIC);

  code = `Ultrasonic.read(2, 15) ${math_choice} ${read_number}`;
  return [code, Blockly.Python.ORDER_NONE];
};
// Ultrasonic End ///////////////////////////////

// Neo_pixel Start //////////////////////////////

Blockly.Python['neopixel_fill_color1'] = function(block) {
  Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';

  Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
  Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
  
  Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 

  var colour_color = block.getFieldValue('color');

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
  var red = parseInt(result[1], 16);
  var green = parseInt(result[2], 16);
  var blue = parseInt(result[3], 16);

  //for i in range(np.n): np[i] = (${red} ,${green}, ${blue})\nnp.write()
  var code = `for i in range(np.n): np[i] = (${red} ,${green}, ${blue})\nnp.write()`;
  return code;
};
Blockly.Python['neopixel_off'] = function(block) {
  Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';

  Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
  Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
  
  Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
  
  var code = `for i in range(np.n): np[i] = (0,0,0)\nnp.write()\n`;
  return code;
};
Blockly.Python['neopixel_toggle'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';

  Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
  Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
  Blockly.Python.definitions_['toggle_state'] = 'toggle_state = False';   
  
  Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
  
  var tog_colors1 = block.getFieldValue('tog_color1');
  var tog_colors2 = block.getFieldValue('tog_color2');

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tog_colors1);
  var red = parseInt(result[1], 16);
  var green = parseInt(result[2], 16);
  var blue = parseInt(result[3], 16);

  var result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tog_colors2);
  var red2 = parseInt(result2[1], 16);
  var green2 = parseInt(result2[2], 16);
  var blue2 = parseInt(result2[3], 16);

 
  var functionName = Blockly.Python.provideFunction_(
    `toggle_light`,
    [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
    `  global toggle_state`,
    `  toggle_state = not toggle_state`,
    `  if toggle_state:`,   
    `      for i in range(np.n):`,
    `          np[i] = (${red}, ${green}, ${blue})`,
    `          time.sleep(0.1) `,
    `  else:`,
    `      np.fill((${red2}, ${green2}, ${blue2}))`,
    `      time.sleep(0.1)`,
    `  np.write()`]);

  var code = 'toggle_light()\n'
  //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
  return code;
};
Blockly.Python['rainbow_neo'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'from time import sleep_ms';
  Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';

  Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
  Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
  
  Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
  
  var functionName = Blockly.Python.provideFunction_(
    `rainbow_neo`,
    [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
    `  for j in range(256):`,
    `        for i in range(np.n):`,
    `            WheelPos = (i * 1 + j) % 256`,   
    `            if WheelPos < 85:`,
    `                np[i] = (int(WheelPos * 3), int(255 - WheelPos * 3), 0)`,
    `            elif WheelPos < 170:`,
    `                WheelPos -= 85`,
    `                np[i] = (int(255 - WheelPos * 3), 0, int(WheelPos * 3))`,
    `            else:`,
    `                WheelPos -= 170`,
    `                np[i] = (0, int(WheelPos * 3), int(255 - WheelPos * 3))`,
    `        np.write()`,
    `        sleep_ms(5)`,]);

  var code = 'rainbow_neo()\n'
  //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
  return code;
};
// Neo_pixel End ////////////////////////////////

// button Start /////////////////////////////////
Blockly.Python['button'] = function(block) {
  Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['buttonA_pin = 18'] = 'buttonA_pin = 18';
  Blockly.Python.definitions_['buttonB_pin = 5'] = 'buttonB_pin = 5';
  
  Blockly.Python.definitions_['button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)'] = 'button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)';
  Blockly.Python.definitions_['button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'; 
  
  var dropdown_button = block.getFieldValue('pin');
  
  code = '';;
  if(dropdown_button == 18){
    code = `button_a.value() == 1`;
  }else if(dropdown_button == 5){
    code = `button_b.value() == 1`;
  }
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['buttonA_toggle'] = function(block) {
  Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['buttonA_pin = 18'] = 'buttonA_pin = 18';
  //Blockly.Python.definitions_['buttonB_pin = 5'] = 'buttonB_pin = 5';
  
  Blockly.Python.definitions_['button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)'] = 'button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)';
  //Blockly.Python.definitions_['button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)';
  Blockly.Python.definitions_['toggle_state = False'] = 'toggle_state = False';
 //Blockly.Python.definitions_['toggleb_state = False'] = 'toggleb_state = False';
  
 Blockly.Python.definitions_['def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state'] = 'def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state';
  //Blockly.Python.definitions_['if button_b.value() == 1 : \n toggleb_state = not toggleb_state'] = 'if button_b.value() == 1: \n toggleb_state = not toggleb_state';
  Blockly.Python.definitions_['def toggle_interrupt_handler(pin):\n     if pin.value() == 0:\n        toggle_pin()'] = 'def toggle_interrupt_handler(pin):\n    if pin.value() == 0:\n        toggle_pin()';
  
  Blockly.Python.definitions_['button_a.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)'] = 'button_a.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)\n';
  
  code = 'toggle_state';
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['buttonB_toggle'] = function(block) {
  Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
  //Blockly.Python.definitions_['buttonA_pin = 18'] = 'buttonA_pin = 18';
  Blockly.Python.definitions_['buttonB_pin = 5'] = 'buttonB_pin = 5';
  
  //Blockly.Python.definitions_['button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)'] = 'button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)';
  Blockly.Python.definitions_['button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)';
  Blockly.Python.definitions_['toggle_state = False'] = 'toggle_state = False';
 //Blockly.Python.definitions_['toggleb_state = False'] = 'toggleb_state = False';
  
 Blockly.Python.definitions_['def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state'] = 'def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state';
  //Blockly.Python.definitions_['if button_b.value() == 1 : \n toggleb_state = not toggleb_state'] = 'if button_b.value() == 1: \n toggleb_state = not toggleb_state';
  Blockly.Python.definitions_['def toggle_interrupt_handler(pin):\n     if pin.value() == 0:\n        toggle_pin()'] = 'def toggle_interrupt_handler(pin):\n    if pin.value() == 0:\n        toggle_pin()';
  
  Blockly.Python.definitions_['button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)'] = 'button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)\n';
  
  code = 'toggle_state';
  return [code, Blockly.Python.ORDER_NONE];
}; 
// button End ///////////////////////////////////
