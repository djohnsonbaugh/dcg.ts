import {Game} from './game/game';
import {GameConfig} from './game/game';
import axios, { AxiosResponse } from 'axios';
let mygamep: Promise<void>;
mygamep = axios.get('dataconfig.json')
.then((response) => {
  let mygame: Game = new Game(response.data as GameConfig);
})
.catch((err) => console.log(err));

export default mygamep;