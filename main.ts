let Joueur1 = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        basic.showIcon(IconNames.Yes)
        Joueur1 = 1
    }
    if (receivedNumber == 20) {
        basic.showIcon(IconNames.No)
        Joueur1 = 0
    }
})
