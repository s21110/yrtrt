input.onButtonPressed(Button.A, function () {
    basic.showNumber(walk)
})
input.onButtonPressed(Button.AB, function () {
    run = 0
    walk = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(run)
})
let run = 0
let walk = 0
walk = 0
run = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1000 && input.acceleration(Dimension.Strength) < 1500) {
        walk += 1
        basic.pause(1000)
    } else {
        if (input.acceleration(Dimension.Strength) > 1500 && input.acceleration(Dimension.Strength) < 2000) {
            run += 1
            basic.pause(1000)
        }
    }
})
