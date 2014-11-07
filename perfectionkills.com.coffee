(() ->
  typeof arguments
)()


f = g = () ->
  23
typeof g()


(() ->
  delete x
  return x
)(1)


y = 1
x = y = typeof x
x


(f = (f) ->
  typeof f()
)(() ->
  1
)


foo =
  bar: () ->
    @baz
  baz: 1
(() ->
  typeof arguments[0]()
)(foo.bar)


foo =
  bar: () ->
    @baz
  baz: 1
typeof (f = foo.bar)()


f = (
  f = () ->
    return "1"
  g = () ->
    return 2
)()
typeof f


x = 1
if (f = () ->
)
  x += typeof f
x


x = [
  typeof x
  typeof y
][1]
typeof typeof x


((foo) ->
  typeof foo.bar
)({
  foo:
    bar: 1
})


(f = () ->
  f = () -> 1
  f()
  f = () -> 2
)()


f = () -> f
new f() instanceof f


`with (function (x, undefined) {}) length`
