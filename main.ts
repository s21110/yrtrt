input.onButtonPressed(Button.A, function () {
    basic.showNumber(counter)
})
input.onGesture(Gesture.Shake, function () {
    counter += 1
})
input.onButtonPressed(Button.B, function () {
    counter = 0
})
let counter = 0
counter = 0
