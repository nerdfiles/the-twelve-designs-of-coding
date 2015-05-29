# OOJS

## Prototyping

Clss = (name) ->
  @name = name or 'Def'

Clss::hello = () ->
  @name

clss = new Clss 'Def1'

## Object composition

obj =
  sugar: () ->
    2 + 2

o = Object.create obj

o.sugar()

## Function Prototype

model = () ->
  __interface__ = {}

  this.set = (t, o) ->
    __interface__[t] = o

    this.trigger('change', {
      name: t
      value: o
    }

  this.get = (t, o) ->
    __interface__[t]

  _.extend @, Backbone.Events

# Usage

_o = {}

model.call(_o).set 'name', 'Top'

_o.get 'name'

_o.on 'change', (e) ->
  console.dir e

