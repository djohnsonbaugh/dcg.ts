import {DataModule} from './datamodule';
import {Party} from './party';
import {Map} from './map';
import axios from 'axios';
// const env = process.env.NODE_ENV

export class Game {
    public party: Party;
    public map: Map;

    constructor(config: GameConfig) {
        this.initializeData(config);
    }

    private initializeData(config: GameConfig) {
        axios.get(config.party)
        .then((response) => { this.party = new Party(response.data); })
        .catch((err) => console.log(err.response));
    }
}

export interface GameConfig {
    characters: string;
    items: string;
    map: string;
    monsters: string;
    npcs: string;
    party: string;
}
