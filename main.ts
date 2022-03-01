input.onButtonPressed(Button.A, function () {
    number_1 += 1
    basic.showNumber(number_1)
})
input.onButtonPressed(Button.AB, function () {
    Total = number_1 + number_2
    basic.showNumber(Total)
})
input.onButtonPressed(Button.B, function () {
    number_2 += 1
    basic.showNumber(number_2)
})
input.onGesture(Gesture.Shake, function () {
    Total = 0
    number_1 = 0
    number_2 = 0
})
let Total = 0
let number_2 = 0
let number_1 = 0
number_1 = 0
number_2 = 0
