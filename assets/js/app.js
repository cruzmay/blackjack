const miModulo = (() => {
    'use strict'
    const askCard = document.getElementById('pedir-carta')
    const playerPoints = document.querySelectorAll('small')
    const cardsPlayerImg = document.querySelector('#card-player')
    const cardsComputerImg = document.querySelector('#card-computer')
    const stopButton = document.querySelector('#stopButton')
    const newGame = document.querySelector('#newGame')

    let deck = [],
        cardKind = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'],
        puntosPlayer = []
    // let puntosJugador = 0,
    //     puntosCompu = 0

    // let playerDeck = 

    const players = ( numPlayers, puntos ) => {
        for( let i = 0; i < numPlayers; i++) {
            puntosPlayer.push(puntos)
        }
        
    }
    players( 2, 0 )


    const createDeck = () => {
        for (let i = 2; i <= 10; i++) {
        for( let card of cardKind) {
            deck.push(`${i}${card}`)
        }
        }
        for( let special of specials) {
            for( let card of cardKind) {
            deck.push(`${special}${card}`)
        }
        }

        // console.log(deck)
        return deck.sort( () =>  Math.random() - 0.5)
        // deck.push(`Q${card}.png`, `J${card}.png`, `A${card}.png`,  `K${card}.png`)
    }
    createDeck()
    console.log(createDeck())


    const pedirCarta = () => {
        return deck.shift()
    }
    // console.log(pedirCarta())

    const valorCarta = ( carta ) => {
        let puntos = 0
        let valor = carta.substring(0, carta.length - 1)
            
        isNaN( valor) 
        ? (( valor === 'A') ? puntos = 11 : puntos = 10 )
        : puntos = parseFloat(valor)
        return puntos
    }
    // console.log(valorCarta())

    askCard.addEventListener('click', () => {
        let cardreturned = pedirCarta();
        console.log(cardreturned)
        puntosPlayer =  puntosPlayer[0] + valorCarta(cardreturned)
        console.log(puntosPlayer)
        playerPoints[0].innerText = puntosPlayer[0]
        let cardImage =  document.createElement('img')
        cardImage.classList.add('carta')
        cardImage.src = `./assets/cartas/${cardreturned}.png`
        cardImage.alt = `carta ${cardreturned}`
        
        cardsPlayerImg.append(cardImage)

        if(puntosPlayer[0]  > 21) {
            alert ('perdiste'), 
            askCard.disabled = true, 
            stopButton.disabled = true, 
            turnoComputadora(puntosPlayer[0])
        } else if (puntosPlayer[0]  === 21 ) {
            alert('Ganaste'), 
            askCard.disabled = true, 
            stopButton.disabled = true, 
            turnoComputadora(puntosPlayer[0] )
        } 
    
    })

    const turnoComputadora = ( puntosMinimos ) => {
        do {
        let cardreturned = pedirCarta();
        puntosCompu  =  puntosPlayer[ puntosPlayer.length -1 ]  + valorCarta(cardreturned)
        playerPoints[1].innerText = puntosCompu
        let cardImage =  document.createElement('img')
        cardImage.classList.add('carta')
        cardImage.src = `./assets/cartas/${cardreturned}.png`
        cardImage.alt = `carta ${cardreturned}`
        
        cardsComputerImg.append(cardImage)

            if ( puntosMinimos > 21) {
                break
            }

        } while ( ( puntosCompu < puntosMinimos ) && ( puntosMinimos <= 21));
    }   

    stopButton.addEventListener('click', () => {
        askCard.disabled = true
        stopButton.disabled = true
        turnoComputadora(puntosJugador)
        if (puntosCompu > 21 ) {
            alert('compu pierde, ganaste!!!')
        } else if ( puntosCompu === puntosJugador && puntosJugador > 0) {
            alert('nadie gana, empate')
        } else if ( puntosCompu > puntosJugador && puntosCompu <= 21) {
            alert('Compu gana, perdiste =(')
        } 
    })

    newGame.addEventListener('click', () => {
    console.clear()
    deck = []
    deck = createDeck()
    puntosJugador = 0
    puntosCompu = 0
    playerPoints[0].innerText = puntosJugador
    playerPoints[1].innerText = puntosCompu
    askCard.disabled = false
    stopButton.disabled = false
    const card =  document.querySelectorAll('.carta')
    card.forEach(data => data.remove())
    // console.log(deck)
    })

    return 'createDeck '
    

})()






