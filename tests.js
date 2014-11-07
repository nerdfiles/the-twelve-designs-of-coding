// Generated by CoffeeScript 1.7.1

/*
A bridge builder commands decorative factories inside massive observatories single-handedly and strategically on time.

Adapter
Builder
Command
Decorator
Factory
Interpeter
Memento
Observer
Singleton
Strategy
Template Method
 */

(function() {
  var BrowserSubscriber, DeepThought, DeeperThought, LazyInput, PageDOM, PhilosopherMixin, PhoneSubscriber, earth, input, li, mixOf, pageDOM, sub1, sub2, type,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  mixOf = function() {
    var Mixed, base, method, mixin, mixins, name, _i, _ref;
    base = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    Mixed = (function(_super) {
      __extends(Mixed, _super);

      function Mixed() {
        return Mixed.__super__.constructor.apply(this, arguments);
      }

      return Mixed;

    })(base);
    for (_i = mixins.length - 1; _i >= 0; _i += -1) {
      mixin = mixins[_i];
      _ref = mixin.prototype;
      for (name in _ref) {
        method = _ref[name];
        Mixed.prototype[name] = method;
      }
    }
    return Mixed;
  };

  DeepThought = (function() {
    function DeepThought() {}

    DeepThought.prototype.answer = function() {
      return 42;
    };

    return DeepThought;

  })();

  PhilosopherMixin = (function() {
    function PhilosopherMixin() {}

    PhilosopherMixin.prototype.pontificate = function() {
      console.log("hmmm...");
      return this.wise = true;
    };

    return PhilosopherMixin;

  })();

  DeeperThought = (function(_super) {
    __extends(DeeperThought, _super);

    function DeeperThought() {
      return DeeperThought.__super__.constructor.apply(this, arguments);
    }

    DeeperThought.prototype.answer = function() {
      this.pontificate();
      return DeeperThought.__super__.answer.call(this);
    };

    return DeeperThought;

  })(mixOf(DeepThought, PhilosopherMixin));

  earth = new DeeperThought;

  console.log(earth.answer());

  if (this.NAMESPACE == null) {
    this.NAMESPACE = {};
  }

  type = function(obj) {
    var classToType;
    if (obj === void 0 || obj === null) {
      return String(obj);
    }
    classToType = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regexp',
      '[object Object]': 'object'
    };
    return classToType[Object.prototype.toString.call(obj)];
  };

  console.log(type([]));

  if (typeof myArray !== "undefined" && myArray !== null) {
    if (typeof myArray.push === "function") {
      myArray.push(4);
    }
  }

  ("f b c".split(" ").map(function(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  })).join(' ');

  typeof [(''.split('') != null) != null];

  PageDOM = (function() {
    function PageDOM() {
      this.subscribers = [];
    }

    PageDOM.prototype.notify = function(element) {
      var subscriber, _i, _len, _ref, _results;
      _ref = this.subscribers;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        subscriber = _ref[_i];
        if (subscriber.item === item) {
          _results.push(subscriber.callback(item));
        }
      }
      return _results;
    };

    PageDOM.prototype.subscribe = function(to, onNewEvent) {
      return this.subscribers.push({
        'item': to,
        'callback': onNewEvent
      });
    };

    return PageDOM;

  })();

  BrowserSubscriber = (function() {
    function BrowserSubscriber() {}

    BrowserSubscriber.prototype.onNewEvent = function(item) {
      return item.on('click', function() {
        return console.log(item + ' was backed');
      });
    };

    return BrowserSubscriber;

  })();

  PhoneSubscriber = (function() {
    function PhoneSubscriber() {}

    PhoneSubscriber.prototype.onNewEvent = function(item) {
      return item.on('click', function() {
        return console.log(item + ' was clicked');
      });
    };

    return PhoneSubscriber;

  })();

  pageDOM = new PageDOM();

  sub1 = new BrowserSubscriber();

  sub2 = new PhoneSubscriber();

  pageDOM.subscribe('back', sub1.onNewEvent);

  pageDOM.subscribe('click', sub2.onNewEvent);

  pageDOM.notify('click');

  pageDOM.notify('back');

  LazyInput = (function() {
    var Input;

    Input = (function() {
      function Input(text) {
        this.text = text;
      }

      return Input;

    })();

    function LazyInput(text) {
      this.text = text;
    }

    LazyInput.prototype.save = function(newText) {
      var input;
      input = new Input(this.text);
      this.text = newText;
      return input;
    };

    LazyInput.prototype.restore = function(input) {
      return this.text = input.text;
    };

    return LazyInput;

  })();

  li = new LazyInput('Original entry');

  input = li.save('New entry');

  li.save('User enters again');

  li.restore(input);

}).call(this);
