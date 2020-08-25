import React from 'react';
import { Link } from 'react-router-dom';

const Pilot = (props) => {
    const pilotUrls = [
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/14/",
        "https://swapi.co/api/people/25/",
        "https://swapi.co/api/people/31/"
    ];

    async function getPilots(urls) {
        const promises = urls.map(url => fetch(url).then(res => res.json()));
        const pilotObjects = await Promise.all(promises);
        return pilotObjects;
    }

    getPilots(pilotUrls).then(pilots => console.log(pilots));
}

export default Pilot