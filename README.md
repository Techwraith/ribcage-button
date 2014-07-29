Ribcage Button
==============

A little view to use with `ribcage-view` that gives you a button.

## Install

```
npm install -S  ribcage-button
```

## Usage

```javascript

  var Button = require('ribcage-button')

  var button = new Button({
    label: 'Submit'
  })

```

## Options

### `<String> label` **Required**
What the text of the button should be.

### `<Boolean> enabled`
Should the button start in an enabled state? Defaults to `true`.

### `<String> icon`
A class name of an icon to prepend to the button. Will be prepended as `<i class="icon-{{icon}}></i>`

### `<String> classes`
The CSS classes to apply to the `<button>`. Defaults to `'btn'`.

## Methods

### `enable()`
Enable the button.

### `disable()`
Disable the button.

## Events

### `.on('select')`
Triggered when the button is enabled and clicked.

## Tests
None yet. Should be in prova when implemented.

## Developing
Test that this compiles with `browserify -t hbsfy ribcage-button.js`
