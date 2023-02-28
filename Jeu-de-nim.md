# Jeu-de-nim
```package
neopixel=github:microsoft/pxt-neopixel#v0.6.12
```
```ghost
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
for (let index = 0; index <= 4; index++) {
    strip.setPixelColor(index + 0, neopixel.colors(NeoPixelColors.Red))
}
```
## @showdialog
Tutoriel créé par :
![Afficher logo](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Flogo-technotam-chappe1.jpg)
Tout au long de ce tutoriel, si l'image est trop petite pour apparaître correctement, il est conseillé de faire un clic droit dessus,
puis "ouvrir l'image dans un nouvel onglet".

## @showdialog
Académie :
![Afficher logo-académie](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Flogo-IAN.png)

## @showdialog
Nous allons réaliser un programme permettant de jouer au jeu de nim sur trois cartes micro:bit.
Deux personnes jouent à tour de rôle (chacun possêde une carte), et choisissent d'enlever 1, 2 ou 3 allumettes (représentée par des leds
d'un bandeau connecté à la troisième  carte microbit). 
Le 1er joueur choisi le nombre de dels à éteindre en cliquant 1, 2 ou 3 fois sur le bouton A de sa carte,
puis il valide son choix en appuyant sur le bouton B.
C'est ensuite au deuxième joueur de faire son choix, et ainsi de suite jusqu'à la dernière del qui désigne le gagnant.
La carte 3 sert à désigner le joueur qui commence et à désigner le gagnant de la partie.
![Afficher les 3 cartes](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjeu%20de%20nim.jpg)

## @showdialog
Nous allons travailler dabord sur la 3eme carte, celle qui sert d'arbitrage et d'éclairage des Dels.
Voici l'algorithme de programmation :
![Afficher l'algorithme arbitre](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Falgorithme_arbitre-Page-1.png)

## Etape 1 : carte arbitre
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Farbitre-1.jpg)
Ce qui se transforme en :
![Afficher les blocs](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2FBlocs1.jpg)

## Etape 2 : carte arbitre
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Farbitre-2.jpg)
```blocks

```

## Etape 3 : carte arbitre
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Farbitre-3.jpg)
```blocks
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(20)
    basic.showLeds(`
        . # . # #
        . # . . #
        . # . # #
        . # . # .
        # . . # #
        `)
})
```

## Etape 4 : carte arbitre
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Farbitre-4.jpg)
Ce qui se transforme en :
![Afficher les blocs](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2FBlocs_toujours.jpg)

## Etape 5 : carte arbitre
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Farbitre-5.jpg)
Ce qui se transforme en :
![Afficher les blocs](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2FBlocs5.jpg)

## Etape 6 : carte arbitre
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Farbitre-6.jpg)
```blocks
radio.onReceivedString(function (receivedString) {
    let Total = 0
    if (receivedString == "Joueur1" && Total == 0) {
        radio.sendString("J1")
    }
    if (receivedString == "Joueur2" && Total == 0) {
        radio.sendString("J2")
    }
})
```
## Etape 7 : carte arbitre
Brancher la carte micro:bit en USB avec le câble fourni.
![Afficher branchement](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjeu%20de%20nim-branchement.jpg)
Téléverser le programme dans la carte micro:bit à l'aide de la commande "Télécharger".
![Afficher bouton](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fbp_telecharger.jpg)

## @showdialog
Nous allons à présent travailler sur la carte du joueur 1.
Voici l'algorithme de programmation :
![Afficher l'algorithme arbitre](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Falgorithme_joueur1.png)

## Etape 1 : carte joueur 1
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjoueur1-1.jpg)
```blocks
radio.setGroup(1)
let Joueur1 = 0
let _1_ou_2_ou_3 = 0
```

## Etape 2 : carte joueur 1
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjoueur1-2.jpg)
```blocks
input.onButtonPressed(Button.A, function () {
    _1_ou_2_ou_3 += 1
    basic.showNumber(_1_ou_2_ou_3)
    if (_1_ou_2_ou_3 == 4) {
        _1_ou_2_ou_3 = 1
        basic.showNumber(_1_ou_2_ou_3)
    }
})
```

## Etape 3 : carte joueur 1
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjoueur1-3.jpg)
```blocks
let Joueur1 = 0
input.onButtonPressed(Button.B, function () {
    if (Joueur1) {
        let _1_ou_2_ou_3 = 0
        if (_1_ou_2_ou_3 == 1) {
            radio.sendNumber(1)
        }
        if (_1_ou_2_ou_3 == 2) {
            radio.sendNumber(2)
        }
        if (_1_ou_2_ou_3 == 3) {
            radio.sendNumber(3)
        }
        Joueur1 = 0
        basic.showIcon(IconNames.No)
        radio.sendNumber(20)
    }
    radio.sendString("Joueur1")
})
```

## Etape 4 : carte joueur 1
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjoueur1-4.jpg)
```blocks
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
```

## Etape 5 : carte joueur 1
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjoueur1-5.jpg)
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "J1") {
        basic.showIcon(IconNames.Happy)
    }
    if (receivedString == "J2") {
        basic.showIcon(IconNames.Sad)
    }
})
```
## Etape 6 : carte joueur 1
Brancher la carte micro:bit en USB avec le câble fourni.
![Afficher branchement](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjeu%20de%20nim-joueur1.jpg)
Téléverser le programme dans la carte micro:bit à l'aide de la commande "Télécharger".
![Afficher bouton](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fbp_telecharger.jpg)

## @showdialog
Nous allons à présent travailler sur la carte du joueur 2.
Voici l'algorithme de programmation :
![Afficher l'algorithme arbitre](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Falgorithme_joueur2.png)

## Etape 1 : carte joueur 2
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjoueur2-1.jpg)
```blocks
radio.setGroup(1)
let Joueur2 = 0
let _1_ou_2_ou_3 = 0
```

## Etape 2 : carte joueur 2
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjoueur1-2.jpg)
```blocks
input.onButtonPressed(Button.A, function () {
    _1_ou_2_ou_3 += 1
    basic.showNumber(_1_ou_2_ou_3)
    if (_1_ou_2_ou_3 == 4) {
        _1_ou_2_ou_3 = 1
        basic.showNumber(_1_ou_2_ou_3)
    }
})
```

## Etape 3 : carte joueur 2
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjoueur2-3.jpg)
```blocks
let Joueur2 = 0
input.onButtonPressed(Button.B, function () {
    if (Joueur2) {
        let _1_ou_2_ou_3 = 0
        if (_1_ou_2_ou_3 == 1) {
            radio.sendNumber(1)
        }
        if (_1_ou_2_ou_3 == 2) {
            radio.sendNumber(2)
        }
        if (_1_ou_2_ou_3 == 3) {
            radio.sendNumber(3)
        }
        Joueur2 = 0
        basic.showIcon(IconNames.No)
        radio.sendNumber(10)
    }
    radio.sendString("Joueur2")
})
```

## Etape 4 : carte joueur 2
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjoueur2-4.jpg)
```blocks
let Joueur2 = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 20) {
        basic.showIcon(IconNames.Yes)
        Joueur2 = 1
    }
    if (receivedNumber == 10) {
        basic.showIcon(IconNames.No)
        Joueur2 = 0
    }
})
```

## Etape 5 : carte joueur 2
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjoueur2-5.jpg)
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "J1") {
        basic.showIcon(IconNames.Sad)
    }
    if (receivedString == "J2") {
        basic.showIcon(IconNames.Happy)
    }
})
```
## Etape 6 : carte joueur 2
Brancher la carte micro:bit en USB avec le câble fourni.
![Afficher branchement](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fjeu%20de%20nim-joueur2.jpg)
Téléverser le programme dans la carte micro:bit à l'aide de la commande "Télécharger".
![Afficher bouton](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Fbp_telecharger.jpg)

## FIN
Nous avons fini notre programmation, il reste à tester si cela fonctionne !

```template
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
```