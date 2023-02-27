input.onButtonPressed(Button.A, function () {
    _1_ou_2_ou_3 += 1
    basic.showNumber(_1_ou_2_ou_3)
    if (_1_ou_2_ou_3 == 4) {
        _1_ou_2_ou_3 = 1
        basic.showNumber(_1_ou_2_ou_3)
    }
})
let _1_ou_2_ou_3 = 0
radio.setGroup(1)
let Joueur1 = 0
_1_ou_2_ou_3 = 0
