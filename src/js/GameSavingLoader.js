import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((jsonData) => new GameSaving(JSON.parse(jsonData)));
  }
}
