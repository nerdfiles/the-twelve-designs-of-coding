// Generated by CoffeeScript 1.7.1
(function() {
  var f, foo, g, x, y;

  (function() {
    return typeof arguments;
  })();

  f = g = function() {
    return 23;
  };

  typeof g();

  (function() {
    delete x;
    return x;
  })(1);

  y = 1;

  x = y = typeof x;

  x;

  (f = function(f) {
    return typeof f();
  })(function() {
    return 1;
  });

  foo = {
    bar: function() {
      return this.baz;
    },
    baz: 1
  };

  (function() {
    return typeof arguments[0]();
  })(foo.bar);

  foo = {
    bar: function() {
      return this.baz;
    },
    baz: 1
  };

  typeof (f = foo.bar)();

  f = (f = function() {
    return "1";
  }, g = function() {
    return 2;
  })();

  typeof f;

  x = 1;

  if ((f = function() {})) {
    x += typeof f;
  }

  x;

  x = [typeof x, typeof y][1];

  typeof typeof x;

  (function(foo) {
    return typeof foo.bar;
  })({
    foo: {
      bar: 1
    }
  });

  (f = function() {
    f = function() {
      return 1;
    };
    f();
    return f = function() {
      return 2;
    };
  })();

  f = function() {
    return f;
  };

  new f() instanceof f;

  with (function (x, undefined) {}) length;

}).call(this);
