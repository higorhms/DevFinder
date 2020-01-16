import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`https://github.com/${dev.github_username}`}>
                Acessar perfil no Github
            </Link>
        </ListItem>
    );
}
