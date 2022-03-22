let _1 = 0
let _2 = 0
input.onButtonPressed(Button.A, function () {
    _1 += -1
    basic.showNumber(_1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(_1 * _2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(_1 + _2)
})
input.onButtonPressed(Button.B, function () {
    _1 += 1
    basic.showNumber(_1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("-")
    basic.showNumber(_1 - _2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(_1 / _2)
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        _2 += 1
        basic.showNumber(_2)
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        _2 += -1
        basic.showNumber(_2)
    }
})
