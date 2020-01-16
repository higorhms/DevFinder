/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import { Container, Aside, Main } from './styles';
import api from '~/services/api';

import DevItem from '~/components/DevItem';
import DevForm from '~/components/DevForm';

export default function Dashboard() {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        async function fetchMyApi() {
            const response = await api.get('/devs');

            setDevs(response.data);
        }
        fetchMyApi();
    });

    async function handleAddDev(data) {
        const response = await api.post('/devs', data);

        setDevs([...devs, response.data]);
    }

    return (
        <Container>
            <Aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleAddDev} />
            </Aside>

            <Main>
                <ul>
                    {devs &&
                        devs.map(dev => <DevItem key={dev._id} dev={dev} />)}
                </ul>
            </Main>
        </Container>
    );
}
