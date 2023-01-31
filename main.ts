input.onButtonPressed(Button.A, function () {
    PA += 1
    Rounds += 1
    showScoreboard()
})
function showScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A'" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B'" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties'" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds'" + Rounds)
}
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    Rounds += 1
    showScoreboard()
})
input.onButtonPressed(Button.B, function () {
    PB += 1
    Rounds += 1
    showScoreboard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Shall we play a game?")
    basic.pause(2000)
    showScoreboard()
}
let Ties = 0
let PB = 0
let Rounds = 0
let PA = 0
reset()
