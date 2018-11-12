import PlanetService from './planets-service.js';

let _planetService = new PlanetService()
function _draw() {

  let planetsTemplate = ''
  let actionsTemplate = ''


  if (_planetService.prev) {
    actionsTemplate += `<button onclick="app.controllers.planetController.getPlanet('${_planetService.prev}')">Prev</button>`
  }
  if (_planetService.next) {
    actionsTemplate += `<button onclick="app.controllers.planetController.getPlanet('${_planetService.next}')">Next</button>`
  }

  _planetService.planets.forEach(planet => {
    planetsTemplate += `<div class="planet">${planet.name}</div>`
  })



  document.getElementById("category-title").innerText = "Planets"
  document.getElementById("category-description").innerText = "The many planets of Star Wars"
  document.getElementById("category-actions").innerHTML = actionsTemplate
  document.getElementById("category-data").innerHTML = planetsTemplate

}

function _drawError(error) {
  console.log("Iv'e got a bad feeling about this", error)
}

export default class PlanetController {
  constructor() {
    console.log('hello, from planet controller')
  }

  getPlanet(url) {
    _planetService.getPlanets(_draw, _drawError, url)
  }

  showPlanets() {
    _planetService.getPlanets(_draw, _drawError)
  }


}

