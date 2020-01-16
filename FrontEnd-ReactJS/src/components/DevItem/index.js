import React from 'react';

import { ListItem, UserInfo } from './styles';

export default function DevItem({ dev }) {
    return (
        <ListItem>
            <header>
                <img
                    src={
                        dev.avatar_url ||
                        'https://api.adorable.io/avatars/64/abott@adorable.png'
                    }
                    alt="avatar"
                />
                <UserInfo>
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </UserInfo>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>
                Acessar perfil no Github
            </a>
        </ListItem>
    );
}
