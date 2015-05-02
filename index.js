import $ from 'jquery';
import codemirror from 'codemirror';
import 'codemirror/mode/python/python';
import run from './src/run_code';

let codeCm = codemirror.fromTextArea($('[name=script]')[0], {
  lineNumbers: true,
  mode: 'python'
});
let outCm = codemirror.fromTextArea($('[name=out]')[0], {});


$('form').on('submit', function(e) {
  e.preventDefault();
  run($(this).serialize())
    .done(function(out) {
      outCm.setValue(out);
    })
    .fail(function(data) {
      outCm.setValue(data.responseJSON.message.replace('Command failed: /bin/sh -c python -c "' + codeCm.getValue() + '"', ''));
    });
});
