//@ts-ignore
let planetAPI = axios.create({
  baseURL: 'https://swapi.co/api/planets/'
})

let _planets = []
let nextUrl = ""
let prevUrl = ""

export default class PlanetService {
  constructor() {
    console.log('hello, from planet service')
  }

  get planets() {
    return _planets
  }

  get next() {
    return nextUrl
  }

  get prev() {
    return prevUrl
  }

  getPlanets(success, fail, url = "") {
    planetAPI.get(url)
      .then(res => {
        _planets = res.data.results
        nextUrl = res.data.next
        prevUrl = res.data.previous
        success()
      })
      .catch(error => {
        fail(error)
        console.log(error)
      })
  }










}