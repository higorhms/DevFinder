/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import { InputBlock, InputGroup } from './styles';

export default function DevForm({ onSubmit }) {
    const [latitude, setUserLatitude] = useState('');
    const [longitude, setUserLongitude] = useState('');
    const [github_username, setGithubUserName] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                // eslint-disable-next-line no-shadow
                const { latitude, longitude } = position.coords;
                setUserLatitude(latitude);
                setUserLongitude(longitude);
            },
            err => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({ github_username, techs, latitude, longitude });

        setGithubUserName('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputBlock>
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    name="github_username"
                    id="github_username"
                    required
                    value={github_username}
                    onChange={e => setGithubUserName(e.target.value)}
                />
            </InputBlock>

            <InputBlock>
                <label htmlFor="techs">Tecnologias</label>
                <input
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
            </InputBlock>

            <InputGroup>
                <InputBlock>
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        name="latitude"
                        type="number"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={e => setUserLatitude(e.target.value)}
                    />
                </InputBlock>
                <InputBlock>
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        name="longitude"
                        type="number"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={e => setUserLongitude(e.target.value)}
                    />
                </InputBlock>
            </InputGroup>

            <button type="submit">Salvar</button>
        </form>
    );
}
