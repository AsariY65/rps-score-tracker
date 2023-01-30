function showScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + PA)
}
let PA = 0
OLED.init(128, 64)
PA = 0
let PB = 0
let Ties = 0
let Rounds = 0
OLED.writeStringNewLine("Shall we play a game?")
basic.pause(2000)
showScoreboard()
