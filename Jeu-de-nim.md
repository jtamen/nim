# Jeu-de-nim
## @showdialog
Tutoriel créé par :
![Afficher logo](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Flogo-technotam-chappe1.jpg)

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

# Etape 1 : carte arbitre
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Farbitre-1.jpg)
Ce qui se transforme en :
![Afficher les blocs](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2FBlocs1.jpg)

# Etape 2 : carte arbitre
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Farbitre-2.jpg)
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(10)
    basic.showLeds(`
        . # . . #
        . # . # #
        . # . . #
        . # . . #
        # . . . #
        `)
})
```

# Etape 3 : carte arbitre
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

# Etape 4 : carte arbitre
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Farbitre-4.jpg)
Ce qui se transforme en :
![Afficher les blocs](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2FBlocs_toujours.jpg)

# Etape 5 : carte arbitre
![Afficher l'algorigramme](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2Farbitre-5.jpg)
Ce qui se transforme en :
![Afficher les blocs](https://edu.tactileo.fr/storage/download?filePath=0750360J%2Fjtamen%2Fpublic%2FBlocs5.jpg)

# Etape 6 : carte arbitre
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

