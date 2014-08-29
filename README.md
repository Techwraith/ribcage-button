Ribcage Button
==============

A little view to use with `ribcage-view` that gives you a button.

## Usage

```javascript

  var Button = require('button')

  var button = new Button({
    label: 'Submit'
    , name: 'optional name'
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

### `<String> name`
Optional. Set a name for this button. Will be passed in select events

## JS Methods

### `enable()`
Enable the button.

### `disable()`
Disable the button.

## Events

### `.on('action|select', view, name, null, label)`
Triggered when the button is enabled and clicked. **the `select` event is now deprecated, use `action` instead**

* `view` is the button view
* `name` is the name option, if set
* third argument will always be `null` because buttons can't have a value
* `label` is the label option.

## Tests
None yet. Should be in prova when implemented.

## Developing
Test that this compiles with `browserify -t hbsfy ribcage-button.js`
