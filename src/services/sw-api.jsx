export function getAllStarships() {
    const url = 'https://swapi.dev/api/starships/';
    return fetch(url, { mode: 'cors' }).then((res) => res.json());
}