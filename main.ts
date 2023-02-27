radio.onReceivedString(function (receivedString) {
    let Total = 0
    if (receivedString == "Joueur1" && Total == 0) {
        radio.sendString("J1")
    }
    if (receivedString == "Joueur2" && Total == 0) {
        radio.sendString("J2")
    }
})
