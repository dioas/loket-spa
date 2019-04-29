import { ApiTree } from '@apicase/services'
import fetch from '@apicase/adapter-fetch'

export const Api = new ApiTree(fetch, [
  {
    url: `https://swapi.co`,
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    children: [
      {
        name: 'all',
        url: 'api/',
        method: 'GET'
      },
      {
        url: 'api',
        children: [
          { name: 'people', url: 'people/', method: 'GET' },
          { name: 'userPeople', url: 'people/:userId', method: 'GET' },
          { name: 'more', url: 'people/?page=:page', method: 'GET' }
        ]
      },
      {
        url: 'api',
        children: [
          { name: 'planet', url: 'planets/', method: 'GET' },
          { name: 'userPlanet', url: 'planet/:userId', method: 'GET' }
        ]
      },
      {
        url: 'api',
        children: [
          { name: 'films', url: 'films/', method: 'GET' },
          { name: 'userFilms', url: 'films/:userId', method: 'GET' }
        ]
      },
      {
        url: 'api',
        children: [
          { name: 'species', url: 'species/', method: 'GET' },
          { name: 'userSpecies', url: 'species/:userId', method: 'GET' }
        ]
      },
      {
        url: 'api',
        children: [
          { name: 'vehicles', url: 'vehicles/', method: 'GET' },
          { name: 'userVehicles', url: 'vehicles/:userId', method: 'GET' }
        ]
      },
      {
        url: 'api',
        children: [
          { name: 'starships', url: 'starships/', method: 'GET' },
          { name: 'userStarships', url: 'starships/:userId', method: 'GET' }
        ]
      }
    ]
  }
])
