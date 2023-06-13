Blockly.Msg.LED_LIFT_Msg = "Left";
Blockly.Msg.LED_RIGHT_Msg = "Right";
Blockly.Msg.On_Msg = "ON";
Blockly.Msg.OFF_Msg = "Off";
Blockly.Msg.buttonA_Msg = "Button_A";
Blockly.Msg.buttonB_Msg = "Button_B";
Blockly.Msg.mt_sigh = ">=";
Blockly.Msg.lt_sigh = "<=";
Blockly.Msg.eq_sigh = "==";

Blockly.defineBlocksWithJsonArray([

  //Motor Start //////////////////////////////
{
  "type": "stopMotor",
  "message0": "stopMotor",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "moveAward",
  "message0": "moveForward for  %1 sec at Speed  %2",
  "args0": [
    {
      "type": "field_number",
      "name": "moveAward",
      "value": 0
    },
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "moveBack",
  "message0": "moveBack for  %1 sec at Speed  %2",
  "args0": [
    {
      "type": "field_number",
      "name": "moveBack",
      "value": 0
    },
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "moveLeft",
  "message0": "moveLeft for  %1 sec at Speed  %2",
  "args0": [
    {
      "type": "field_number",
      "name": "moveLeft",
      "value": 0
    },
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "moveRight",
  "message0": "moveRight for  %1 sec at Speed  %2",
  "args0": [
    {
      "type": "field_number",
      "name": "moveRight",
      "value": 0
    },
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "Forward",
  "message0": "moveForward at Speed  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "Backward",
  "message0": "moveBackward at Speed  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "Left",
  "message0": "moveLeft at Speed  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "Right",
  "message0": "moveRight at Speed  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
//Motor End //////////////////////////////////

//servo Start ////////////////////////////////
{
  "type": "servo",
  "message0": "Servo pin %1 set angle %2 °",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#943126",
  "tooltip": "",
  "helpUrl": ""
},
//servo End //////////////////////////////////

//OLED Start /////////////////////////////////

{
  "type": "oled_init",
  "message0": "OLED initial with size %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "size",
      "options": [
        [
          "128x64",
          "0"
        ],
        [
          "128x32",
          "1"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
},
{
  "type": "oled_draw_text",
  "message0": "OLED draw text %1 at (x: %2 , y: %3 )",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
},
{
  "type": "oled_draw_line",
  "message0": "OLED draw line start at (x: %1 , y: %2 ) end at (x: %3 , y: %4 )",
  "args0": [
    {
      "type": "input_value",
      "name": "x1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "x2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y2",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
},
{
  "type": "oled_draw_rect",
  "message0": "OLED draw rectangle start at (x: %1 , y: %2 ) width: %3 height: %4 fill: %5",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "height",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "fill",
      "options": [
        [
          "No",
          "0"
        ],
        [
          "Yes",
          "1"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
  "tooltip": "Draw rectangle on OLED",
  "helpUrl": ""
},
{
  "type": "oled_fill",
  "message0": "OLED fill",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
  "tooltip": "Fill screen",
  "helpUrl": ""
},
{
  "type": "oled_clear",
  "message0": "OLED clear",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
  "tooltip": "clear screen",
  "helpUrl": ""
},


//OLED End ///////////////////////////////////

//Buzzer Start ///////////////////////////////
{
  "type": "buzzer1",
  "message0": "Buzzer pin %1 frequency %2 beep %3 seconds",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "freq",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D35400",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "buzzer2",
  "message0": "Buzzer pin %1 frequency %2 beep",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "freq",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,

  "nextStatement": null,
  "colour": "#D35400",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "buzzer3",
  "message0": "Buzzer pin %1 stop beep",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D35400",
  "tooltip": "",
  "helpUrl": ""
},
//Buzzer End /////////////////////////////////

//LED Start //////////////////////////////////
{ 
  "type": "led_onoff",
  "message0": "LED pin : %1 is : %2",
  "args0":[
  {
    "type": "field_dropdown",
    "name": "pin_trig",
    "options": [
      [Blockly.Msg.LED_LIFT_Msg , "1"],
      [Blockly.Msg.LED_RIGHT_Msg , "2"]
    ]
      
  },
  {
    "type": "input_value",
    "name": "onoff",
    "check": "Number"
  }
], 
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": "#229954",
"tooltip": "",
"helpUrl": ""
},
//LED End ////////////////////////////////////

//Ultrasonic Start ///////////////////////////
{ 
  "type": "ultra_read",
  "message0": "Ultrasonic read  %1 %2",
  "args0":[
  {
    "type": "field_dropdown",
    "name": "math",
    "options": [
      [Blockly.Msg.mt_sigh , ">="],
      [Blockly.Msg.lt_sigh , "<="],
      [Blockly.Msg.eq_sigh , "=="]
    ]
      
  },
  {
    "type": "input_value",
    "name": "read_num",
    "check": "Number"
  }
], 
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "#196F3D",
"tooltip": "",
"helpUrl": ""
},

//Ultrasonic End /////////////////////////////

//neopixel Start /////////////////////////////
{
  "type": "neopixel_fill_color1",
  "message0": "NeoPixel fill color %1",
  "args0": [
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#00FF00"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17A589",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_off",
  "message0": "NeoPixel Off",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17A589",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_toggle",
  "message0": "NeoPixel toggle color %1 : %2",
  "args0": [
    {
      "type": "field_colour",
      "name": "tog_color1",
      "colour": "#FF0000"
    },
    {
      "type": "field_colour",
      "name": "tog_color2",
      "colour": "#00FF00"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17A589",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rainbow_neo",
  "message0": "NeoPixel rainbow",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17A589",
  "tooltip": "",
  "helpUrl": ""
},
//neopixel End ///////////////////////////////

//button Start ///////////////////////////////
{
  "type":"button",
  "message0": "Button: %1 is put",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "pin",
      "options" : [
        [
          Blockly.Msg.buttonA_Msg , "18"
        ],
        [
          Blockly.Msg.buttonB_Msg , "5"
        ]
      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "#2E86C1",
"tooltip": "",
"helpUrl": ""
},
//button End /////////////////////////////////

//button_toggle Start ////////////////////////
{
  "type":"buttonA_toggle",
  "message0": "Switch: %1 is on ",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "pin",
      "options" : [
        [
          Blockly.Msg.buttonA_Msg , "18"
        ]
      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
"colour": "#27AE60",
"tooltip": "",
"helpUrl": ""
},
{
  "type":"buttonB_toggle",
  "message0": "Switch: %1 is on ",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "pin",
      "options" : [
        [
          Blockly.Msg.buttonB_Msg , "5"
        ]
      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
"colour": "#1F618D",
"tooltip": "",
"helpUrl": ""
},

{
  "type":"buttonA_toggle",
  "message0": "Switch: %1 is on ",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "pin",
      "options" : [
        [
          Blockly.Msg.buttonA_Msg , "18"
        ]
      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "#1F618D",
"tooltip": "",
"helpUrl": ""
},
{
  "type":"buttonB_toggle",
  "message0": "Switch: %1 is on ",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "pin",
      "options" : [
        [
          Blockly.Msg.buttonB_Msg , "5"
        ]
      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "#1F618D",
"tooltip": "",
"helpUrl": ""
},
// button_toggle end //////////////////////



]);





