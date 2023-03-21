import { Player } from './player.jsx'

export class Round {
    constructor(){
        this.players = [
            new Player('You')
            , new Player('CPU 1')
            , new Player('CPU 2')
            , new Player('CPU 3')
            , new Player('CPU 4')
        ];


    }

}