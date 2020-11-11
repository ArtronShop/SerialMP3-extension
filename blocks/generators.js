Blockly.Python['mp3_begin'] = function(block) {
  Blockly.Python.definitions_['import_MP3'] = 'import SerialMP3';

  var dropdown_tx_pin = block.getFieldValue('tx_pin');
  var dropdown_rx_pin = block.getFieldValue('rx_pin');

  var code = `SerialMP3.begin(${dropdown_tx_pin}, ${dropdown_rx_pin})\n`;
  return code;
};

Blockly.Python['mp3_play_index'] = function(block) {
  Blockly.Python.definitions_['import_MP3'] = 'import SerialMP3';

  var value_index = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC);

  var code = `SerialMP3.play(${value_index})\n`;
  return code;
};

Blockly.Python['mp3_is_playing'] = function(block) {
  Blockly.Python.definitions_['import_MP3'] = 'import SerialMP3';

  var code = `SerialMP3.isPlaying()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mp3_set_volume'] = function(block) {
  Blockly.Python.definitions_['import_MP3'] = 'import SerialMP3';

  var value_level = Blockly.Python.valueToCode(block, 'level', Blockly.Python.ORDER_ATOMIC);

  var code = `SerialMP3.setVolume(${value_level})\n`;
  return code;
};

Blockly.Python['mp3_wait_play_end'] = function(block) {
  Blockly.Python.definitions_['import_MP3'] = 'import SerialMP3';

  var code = `SerialMP3.waitPlayEnd()\n`;
  return code;
};

Blockly.Python['mp3_pause'] = function(block) {
  Blockly.Python.definitions_['import_MP3'] = 'import SerialMP3';

  var code = `SerialMP3.pause()\n`;
  return code;
};

Blockly.Python['mp3_resume'] = function(block) {
  Blockly.Python.definitions_['import_MP3'] = 'import SerialMP3';

  var code = `SerialMP3.play()\n`;
  return code;
};

Blockly.Python['mp3_stop'] = function(block) {
  Blockly.Python.definitions_['import_MP3'] = 'import SerialMP3';

  var code = `SerialMP3.stop()\n`;
  return code;
};

Blockly.Python['mp3_next'] = function(block) {
  Blockly.Python.definitions_['import_MP3'] = 'import SerialMP3';

  var code = `SerialMP3.next()\n`;
  return code;
};

Blockly.Python['mp3_previous'] = function(block) {
  Blockly.Python.definitions_['import_MP3'] = 'import SerialMP3';

  var code = `SerialMP3.previous()\n`;
  return code;
};
