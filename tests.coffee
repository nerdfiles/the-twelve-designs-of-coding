###
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
###

mixOf = (base, mixins...) ->
  class Mixed extends base
  for mixin in mixins by -1
    for name, method of mixin::
      Mixed::[name] = method
  Mixed

class DeepThought
  answer: ->
    42

class PhilosopherMixin
  pontificate: ->
    console.log "hmmm..."
    @wise = yes

class DeeperThought extends mixOf DeepThought, PhilosopherMixin
  answer: ->
    @pontificate()
    super()

earth = new DeeperThought
console.log earth.answer()

@NAMESPACE ?= {}

type = (obj) ->
  if obj == undefined or obj == null
    return String obj
  classToType =
    '[object Boolean]': 'boolean'
    '[object Number]': 'number'
    '[object String]': 'string'
    '[object Function]': 'function'
    '[object Array]': 'array'
    '[object Date]': 'date'
    '[object RegExp]': 'regexp'
    '[object Object]': 'object'
  classToType[Object.prototype.toString.call(obj)]

console.log type []

myArray?.push? 4

("f b c".split(" ").map (word) -> word[0].toUpperCase() + word[1..-1].toLowerCase()).join ' '

typeof [''.split('')??]


class PageDOM
  constructor: () ->
    @subscribers = []
  notify: (element) ->
    subscriber.callback(item) for subscriber in @subscribers when subscriber.item is item
  subscribe: (to, onNewEvent) ->
    @subscribers.push {'item': to, 'callback': onNewEvent}

class BrowserSubscriber
  onNewEvent: (item) ->
    item.on 'click', () ->
      console.log item + ' was backed'

class PhoneSubscriber
  onNewEvent: (item) ->
    # now that the user has subscribed to a row, something can be clicked
    item.on 'click', () ->
      console.log item + ' was clicked'

pageDOM = new PageDOM()
sub1 = new BrowserSubscriber()
sub2 = new PhoneSubscriber()
pageDOM.subscribe 'back', sub1.onNewEvent
pageDOM.subscribe 'click', sub2.onNewEvent
pageDOM.notify 'click'
pageDOM.notify 'back'

# Inputs with a back button assuming clicked; so notify on click of input,
# then show a new DOM element but add a handler to make it clickable only
# if the subscription has occurred
class LazyInput
  class Input
    constructor: (@text) ->

  constructor: (@text) ->
  save: (newText) ->
    input = new Input @text
    @text = newText
    input
  restore: (input) ->
    @text = input.text

li = new LazyInput 'Original entry'
input = li.save 'New entry' # say, on blur
li.save 'User enters again' # or even save via livetyping
li.restore input  # "back" inside of the input > so inputs with back buttons or 
                  # or even histories
