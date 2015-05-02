# [Pytask](https://tehsis.github.io/webtask-pytask)

![Alt pytask example](https://tehsis.github.io/webtask-pytask/src/example/example.gif)

A [webtask.io](https://webtask.io) example that let you run python code right from your browser!

## What's this?

[webtask.io](http://webtask.io) is a service that lets you run server-side code for your JavaScript and native applications using an API call.

This example uses a *webtask* (tasks/pytask.js) that will run code using the python shell on a webtask sandbox.
It serves as an example of using bash commands on webtask.

_DISCLAIMER_: this is for demo purposes, running this in production won’t give you the best perf since I’m spawning a child process on each request. Webtask should support python natively, vote for that [here](http://webtask.uservoice.com/forums/295194-general/suggestions/7795449-native-python-support)

## Build
  1 - ```$npm i```

  2 - ```$gulp build```

  3 - Fire up a http server.
