import FreeOnlineGames from "../img/FreeOnlineGames.png";
import Action from "../img/Action.png";
import Strategy from "../img/Strategy.png";
import RPG from "../img/RPG.png";
import Adventure from "../img/Adventure.png";
import Puzzle from "../img/Puzzle.png";
import Racing from "../img/Racing.png";
import Shooter from "../img/Shooter.png";
import Sports from "../img/Sports.png";

export const ImagesImport = {
  "Free Online Games": FreeOnlineGames,
  Action: Action,
  Strategy: Strategy,
  RPG: RPG,
  Adventure: Adventure,
  Puzzle: Puzzle,
  Racing: Racing,
  Shooter: Shooter,
  Sports: Sports,
};
export type ImageKeys = keyof typeof ImagesImport;
class Images {
  getImage(fileName: ImageKeys) {
    return ImagesImport[fileName];
  }
}

export default new Images();
