import $ from 'jquery';
import codemirror from 'codemirror';
import 'codemirror/mode/python/python';
import run from './src/run_code';
import example from './src/example/factorial.py';

let codeCm = codemirror.fromTextArea($('[name=script]')[0], {
  lineNumbers: true,
  mode: 'python'
});
codeCm.setValue(example);
let outCm = codemirror.fromTextArea($('[name=out]')[0], {});


$('form').on('submit', function(e) {
  e.preventDefault();
  outCm.setValue('running...');
  run($(this).serialize())
    .done(function(out) {
      outCm.setValue(out);
    })
    .fail(function(data) {
      outCm.setValue(data.responseJSON.message.replace('Command failed: /bin/sh -c python -c "' + codeCm.getValue() + '"', ''));
    });
});
