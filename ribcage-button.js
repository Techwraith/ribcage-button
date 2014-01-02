var Base = require('ribcage-view')
  , wrap = require('lodash.wrap');

var ButtonBase = Base.extend({

  tagName: 'button'
, className: 'btn'

, beforeInit: function (opts) {
    var self = this;

    this.options = opts;

    this.label  = this.options.label || this.label;
    this.icon   = this.options.icon || this.icon;
    this.action = this.action || wrap(this.options.action, function (fn) {
      if (!this.options.disabled){
        self.trigger('action');
        if (self._action) { self._action(); }
        if (fn) { fn(); }
      }
    });
  }

, events: {
    'click': 'action'
  }

, enable: function () {
    this.options.disabled = false;
    this.render();
    this.$el.attr('disabled', 'false');
  }

, disable: function () {
    this.options.disabled = true;
    this.$el.attr('disabled', 'disabled');
  }

, afterRender: function () {
    if (this.options.disabled) {
      this.disable();
    }
    var label = this.label || '';
    this.$el.append('<span class="label">'+label+'</span>');
    if (this.options.classStr) {
      this.$el.addClass(this.options.classStr);
    }
    if (this.options.icon) {
      this.$el.prepend('<i class="'+this.icon+'"></i>');
    }
  }


});

module.exports = ButtonBase;
