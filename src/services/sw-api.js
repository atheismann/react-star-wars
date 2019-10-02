const BASE_URL = 'https://swapi.co/api';

export function getAllStarships(){
  return fetch(`${BASE_URL}/starships`, {mode: "cors"})
  .then(res => res.json());
};

export function getPilots(urls){
  return Promise.all(urls.map(url => fetch(`${url}`, {mode: "cors"}).then(res => res.json())));
};