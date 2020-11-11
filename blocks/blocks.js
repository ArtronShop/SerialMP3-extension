Blockly.defineBlocksWithJsonArray([
{
  "type": "mp3_begin",
  "message0": "Serial MP3 begin with (TX pin: %1 , RX pin: %2 )",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "tx_pin",
      "options": [
        [
          "IN1",
          "32"
        ],
        [
          "IN2",
          "33"
        ],
        [
          "IN3",
          "34"
        ],
        [
          "IN4",
          "35"
        ],
        [
          "OUT1",
          "26"
        ],
        [
          "OUT2",
          "27"
        ],
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "rx_pin",
      "options": [
        [
          "IN1",
          "32"
        ],
        [
          "IN2",
          "33"
        ],
        [
          "IN3",
          "34"
        ],
        [
          "IN4",
          "35"
        ],
        [
          "OUT1",
          "26"
        ],
        [
          "OUT2",
          "27"
        ],
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "Set TX and RX pin for communication between Serial MP3",
  "helpUrl": "https://www.ioxhop.com/p/763"
},
{
  "type": "mp3_play_index",
  "message0": "Serial MP3 play index %1",
  "args0": [
    {
      "type": "input_value",
      "name": "index",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "Play file with index of file",
  "helpUrl": "https://www.ioxhop.com/p/763"
},
{
  "type": "mp3_is_playing",
  "message0": "Serial MP3 is playing ?",
  "output": null,
  "colour": "#E74C3C",
  "tooltip": "Check now is playing",
  "helpUrl": "https://www.ioxhop.com/p/763"
},
{
  "type": "mp3_set_volume",
  "message0": "Serial MP3 set volume %1 %%",
  "args0": [
    {
      "type": "input_value",
      "name": "level",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "Set volume level 0-100%",
  "helpUrl": "https://www.ioxhop.com/p/763"
},
{
  "type": "mp3_wait_play_end",
  "message0": "Serial MP3 wait end playing",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "wait end playing",
  "helpUrl": "https://www.ioxhop.com/p/763"
},
{
  "type": "mp3_pause",
  "message0": "Serial MP3 pause",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "Pause",
  "helpUrl": "https://www.ioxhop.com/p/763"
},
{
  "type": "mp3_resume",
  "message0": "Serial MP3 resume",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "Resume",
  "helpUrl": "https://www.ioxhop.com/p/763"
},
{
  "type": "mp3_stop",
  "message0": "Serial MP3 stop",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "Stop playing",
  "helpUrl": "https://www.ioxhop.com/p/763"
},
{
  "type": "mp3_next",
  "message0": "Serial MP3 play next",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "Play next file",
  "helpUrl": "https://www.ioxhop.com/p/763"
},
{
  "type": "mp3_previous",
  "message0": "Serial MP3 play previous",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "Play previous file",
  "helpUrl": "https://www.ioxhop.com/p/763"
}
]);
