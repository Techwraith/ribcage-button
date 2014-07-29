var Base = require('ribcage-view')
  , _ = require('lodash.isarray')
  , AmpersandState = require('ampersand-state')

module.exports = Base.extend({

  tagName: 'button'

, template: require('./template.html.hbs')

, events: {
    'click': 'select'
  }

, attributes: function attributes(){
    var attrs = {}

    if (this.state){
      if (this.state.className) attrs['class'] = this.state.className
      if (!this.state.enabled) attrs.disabled = 'disabled'
    }

    return attrs
  }

// DOM Events
, select: function select(){
    this.trigger('select')
  }

// DOM manipulation
, toggleEnabled: function toggleEnabled(enabled){
    if (enabled)
      this.$el.removeAttr('disabled')
    else
      this.$el.attr('disabled', 'disabled')
  }

// public methods
, enable: function () {
    this.state.enabled = true
  }

, disable: function () {
    this.state.enabled = false
  }

// state methods
, onStateChangeEnabled: function onStateChangeEnabled(state, enabled){
    this.toggleEnabled(enabled)
  }

, State: AmpersandState.extend({
    props: {
      label: ['string', true]
      , icon: ['string', false]
      , enabled: ['boolean', true, true]
      , classes: ['string', true, 'btn']
    }
    , extraProperties: 'reject'
    , derived: {
      className: {
        deps: ['classes']
        , fn: function classNameFn(){
          var classes = _.isArray(this.classes)
            ? this.classes.join(' ')
            : this.classes
          return 'btn ' + classes
        }
      }
    }
  })

, beforeInit: function (options) {
    this.state = new this.State(options)
  }

, bindEvents: function bindEvents(){
    this.stopListening(this.state)

    this.listenTo(this.state, 'change:enabled', this.onStateChangeEnabled)
    this.listenTo(this.state, 'change:label', this.render)
  }

, beforeRender: function beforeRender(){
    // ensure attrs are set before each render b/c backone only does this on init
    this.$el.attr(this.attributes())
  }

})
