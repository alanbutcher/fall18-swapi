import CharactersController from "./components/characters/characters-controller.js";
import PlanetController from "./components/planets/planets-controller.js";

class App {
  constructor() {
    this.controllers = {
      charactersController: new CharactersController(),
      planetController: new PlanetController()
    }
  }
}


window.app = new App()


